import React, { useState, useEffect } from "react";
import Episode from "../Components/Episode";
import Hamza from "../Components/Hamza";
import { db } from "../Config/Firebase";
import './episode.css'

function Episodes() {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    db.collection("episodes")
      .orderBy("timestamp", "desc")
      .onSnapshot((shot) => {
        setEpisodes(
          shot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
        setLoading(false);
      });
  }, []);
  return (
    <div className="mx-3">
      <h5 className="mb-3 text-dark">Episodes</h5>
      {loading ? (
        <div className='loading'>
          <div className='loading__box one'></div>
          <div className='loading__box two'></div>
          <div className='loading__box three'></div>
          <div className='loading__box three'></div>
        </div>
      ) : (
        <div>
          <Hamza />
          {episodes.map((epi) => (
            <Episode key={epi.id} data={epi.data} id={epi.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Episodes;
