import React from "react";

export default function PostInfo(props) {
  const { imageURL, content, name } = props.pt;
  return (
      <>
      <div className="card col-sm-4">
  <img src={imageURL} className="card-img-top" alt="..."/>
  <div className="card-body">
      <h3 className="card-title">{name}</h3>
    <p className="card-text">{content}</p>
  </div>
  <div className="text-center border-top-0 mb-1">
                  {/* <button onClick={() => showDetails()}>View Details</button> */}
                </div>
</div>
    </>
  )
}
