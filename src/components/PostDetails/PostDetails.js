import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from '../Header/Header'

export default function PostDetails() {
  const { _id } = useParams();
  console.log(_id);
  const [event, setEvent] = useState({});

  useEffect(() => {
    fetch(`https://polar-forest-65976.herokuapp.com/event/${_id}`)
      .then((res) => res.json())
      .then((data) => setEvent(data[0]));
  }, [_id]);
  return (
    <div>
      <Header />
      <div class="card mb-3">
        <img src={event.imageURL} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{event.name}</h5>
          <p class="card-text">
            {event.content}
          </p>
          <p class="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  );
}
