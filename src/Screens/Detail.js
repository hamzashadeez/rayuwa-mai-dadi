import React, {useEffect, useRef} from "react";
import { useHistory, useParams } from "react-router-dom";
import ReactHowler from 'react-howler'

function Detail() {
  const { id } = useParams();

 

  return (
    <div>
      <div className="p-3 bg-white mt-2 shadow-sm">
      <ReactHowler
        src='http://goldfirestudios.com/proj/howlerjs/sound.ogg'
        playing={true}
      />
      </div>
      <div className="p-3 bg-white mt-4 shadow-sm">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
      </div>
    </div>
  );
}

export default Detail;
