import React from "react";

export default function PostInfo(props) {
  const { imageURL, content, name } = props.pt;
  return (
      <>
      <div className="card col-md-4">
  <img src={imageURL} className="card-img-top" alt="..."/>
  <div className="card-body">
      <h3 className="card-title">{name}</h3>
    <p className="card-text">{content}</p>
  </div>
</div>
    </>
  )
}
