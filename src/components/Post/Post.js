import React, { useState, useEffect } from 'react';
import PostInfo from '../PostInfo/PostInfo'


export default function Post() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://polar-forest-65976.herokuapp.com/events')
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])
    return (
       <div>
           <h1 className="text-center">Blogs</h1>
            <div className="row">
            {
                posts.map(pt => <PostInfo pt={pt}></PostInfo>)
            }
        </div>
       </div>
    )
}