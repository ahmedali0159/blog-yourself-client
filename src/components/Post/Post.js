import React, { useState, useEffect } from 'react';
import PostInfo from '../PostInfo/PostInfo'


export default function Post() {
    const [post, setPost] = useState([]);

    useEffect(() => {
        fetch('https://polar-forest-65976.herokuapp.com/events')
        .then(res => res.json())
        .then(data => setPost(data))
    }, [])
    return (
       <div>
           <h1 className="text-center">Blogs</h1>
            <div className="row">
            {
                post.map(pt => <PostInfo pt={pt}></PostInfo>)
            }
        </div>
       </div>
    )
}