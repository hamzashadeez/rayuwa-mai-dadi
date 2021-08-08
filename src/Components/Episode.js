import React from "react";
import "./episode.css";
import { useHistory } from "react-router-dom";

function Episode() {
    const history = useHistory();
  return (
    <div className="bg-white mb-4 shadow-sm p-4 cursor-pointer epi" onClick={()=>history.push("episode/id")}>
      <div className="d-flex justify-content-between align-items-center">
        <p className="margin-0 text-muted">RAYUWA MAI DADI : 1</p>
        <p className="margin-0" style={{color: "#009688"}}>2 days ago</p>
      </div>
      <h4 className='header__epi'>New Episode COntent</h4>
      <p style={{fontSize: '12px'}} className='text-muted'>2:40 Minutes</p>
    </div>
  );
}

export default Episode;
