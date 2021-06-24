import React from 'react';
import img1 from '../../images/food-712665_640.jpg';
import img2 from '../../images/tech1.jpg';
import img3 from '../../images/fashoin1.jpg';
import PostInfo from '../PostInfo/PostInfo'

const postData = [
    {
        image: img1,
        title: "Fish Food, Recipes You Can Make Today",
        content:"orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        category:'Food',
        date: '1 min ago'
    },
    {
        image: img2,
        title: "Fish Food, Recipes You Can Make Today",
        content:"orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        category:'Food',
        date: '1 min ago'
    },
    {
        image: img3,
        title: "Fish Food, Recipes You Can Make Today",
        content:"orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        category:'Food',
        date: '1 min ago'
    },
]

export default function Post() {
    return (
        <div className="row">
            {
                postData.map(pt => <PostInfo pt={pt}></PostInfo>)
            }
        </div>
    )
}