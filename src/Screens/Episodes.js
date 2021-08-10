import React, {useState, useEffect} from 'react'
import Episode from '../Components/Episode';
import {db} from '../Config/Firebase'

function Episodes() {
    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        db.collection("episodes").orderBy("timestamp", "desc").onSnapshot((shot) => {
          setEpisodes(
            shot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
      }, []);
    return (
        <div className='mx-3'>
            <h5 className='mb-3 text-dark'>Episodes</h5>
            {episodes.map(epi=> <Episode key={epi.id} data={epi.data} id={epi.id} />)}
            
        </div>
    )
}

export default Episodes
