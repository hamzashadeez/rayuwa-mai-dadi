import React, { useState, useEffect } from "react";
import "./admin.css";
import { db, storage } from "../Config/Firebase";
import firebase from 'firebase'

function Admin() {
  const [today, setToday] = useState("");
  const [desc, setDesc] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [length, setLength] = useState("");
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setTodayDate();
  }, []);
  const setTodayDate = () => {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const dateObj = new Date();
    const month = monthNames[dateObj.getMonth()];
    const day = String(dateObj.getDate()).padStart(2, "0");
    const year = dateObj.getFullYear();
    setToday(day + " " + month + ", " + year);
  };

  const submit = async (e) => {
    e.preventDefault(); // Let's prevent refresh
    if (file !== null) {
      const uploadTask = storage.ref(`podcasts/${file.name}`).put(file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          //progress...
          const pr = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(pr);
        },
        (error) => {
          alert(error.message);
        },
        () => {
          storage
            .ref("podcasts")
            .child(file.name)
            .getDownloadURL()
            .then((url) => {
              // post file
              db.collection("episodes").add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                title,
                desc,
                source: url,
                length,
                date: today
              });

              setPassword("");
              setLength("");
              setFile(null);
              setDesc("")
              alert("done");
            })
            .catch((err) => console.log(err));
        }
      );
    }else{
      console.log("No data")
    }
  };
  return (
    <div>
      <form onSubmit={(e) => submit(e)}>
        <h2 className="text-dark mb-4">Upload New Episode</h2>
        <input className="input" type="file" required onChange={(e) => setFile(e.target.files[0])} />
        <label>Enter Title</label>
        <input
          className="input"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label>Enter Descriptions here</label>
        <input
          className="input"
          type="text"
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          required
        />
        <label>Media Length</label>
        <input
          className="input"
          type="text"
          placeholder="Media length"
          required
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
        <label>Enter Password here</label>
        <input
          className="input"
          type="text"
          placeholder="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn btn-primary">Submit Podcast</button> <p className='m-2'>{progress}</p>
      </form>
    </div>
  );
}

export default Admin;
