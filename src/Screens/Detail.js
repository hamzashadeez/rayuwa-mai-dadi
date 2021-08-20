import React, { useEffect } from "react";
import firebase from "firebase";
import { db } from "../Config/Firebase";
import './Details.css'

function Detail(props) {
  const { data, id } = (props.location && props.location.state) || {};

  const clicked = async () => {
    const increment = firebase.firestore.FieldValue.increment(1);
    const storyRef = db.collection("episodes").doc(id);

    // Update read count
    storyRef.update({ downloads: increment });
  };
  console.log(data);

  return (
    <div>
      <div className="bg-white mt-2 d-flex align-center justify-content-around shadow-sm main__btns">
        <a
          onClick={() => clicked()}
          href={data?.source}
          className="btn btn-one"
        >
          Listen
        </a>
        <a
          onClick={() => clicked()}
          href={data?.source}
          className="btn btn-one2"
        >
          Download
        </a>
      </div>
      <div className="p-3 bg-white mt-4 shadow-sm">
        <p>{data?.desc}</p>
      </div>
    </div>
  );
}

export default Detail;
