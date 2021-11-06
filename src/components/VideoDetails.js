import React from 'react'
import Button from "./Button"

function VideoDetails({ title, views, createdAt, upvotes, downvotes }) {


    return (
        <div>
            <h1>{title}</h1>
            <p>{views} views | Created at {createdAt}</p>
            <Button upvotes={upvotes} downvotes={downvotes} />
        </div>
    )
}

export default VideoDetails
