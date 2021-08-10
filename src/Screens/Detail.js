import React, {useEffect} from "react";
import {  useParams, Link } from "react-router-dom";

function Detail(props) {
  const { data, id } = (props.location && props.location.state) || {};

 console.log(data)

  return (
    <div>
      <div className="p-3 bg-white mt-2 d-flex align-center justify-content-around shadow-sm">
        <a href={data?.source} className='btn btn-dark' >Listen</a>
        <a href={data?.source} className='btn btn-success '>Download</a>
      </div>
      <div className="p-3 bg-white mt-4 shadow-sm">
        <p>
          {data?.desc}
        </p>
      </div>
    </div>
  );
}

export default Detail;
