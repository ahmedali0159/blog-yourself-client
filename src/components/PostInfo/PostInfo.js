import React from "react";

export default function PostInfo(props) {
  const { image, title, content, category, date } = props.pt;
  return (
      <>
      <div className="card col-md-4">
  <img src={image} className="card-img-top" alt="..."/>
  <div className="card-body">
      <h3 className="card-title">{title}</h3>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <div className="d-flex">
      <p><span>{category}</span></p>
     
     <p><span>{date}</span></p>
  </div>
</div>
    </>
  )
}
