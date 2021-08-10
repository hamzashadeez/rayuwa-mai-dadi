import React from "react";
import "./episode.css";
import { useHistory } from "react-router-dom";

function Episode({ data, id }) {
  const history = useHistory();
  return (
    <div
      className="bg-white mb-4 shadow-sm p-4 cursor-pointer epi"
      onClick={() =>
        history.push({ pathname: `episode/${id}`, state: { data, id } })
      }
    >
      <div className="d-flex justify-content-between align-items-center">
        <p className="margin-0 text-muted">RAYUWA MAI DADI</p>
        <p className="margin-0" style={{ color: "#009688" }}>
          {data?.date}
        </p>
      </div>
      <h4 className="header__epi">{data?.title}</h4>
      <p style={{fontSize: '12px'}} className='text-muted'>{data?.length}</p>
    </div>
  );
}

export default Episode;
