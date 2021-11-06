import React, { useState } from 'react'
import video from '../data/video'

function Button(props) {
    const [upvotes, setUpvotes] = useState(video.upvotes)
    const [downVotes, setDownVotes] = useState(video.downvotes)

    const handleLike = () => {
        setUpvotes(upvotes => upvotes + 1)
    }


    const handleDisLike = () => {
        setDownVotes(downVotes => downVotes + 1)
    }

    return (
        <div>
            <button onClick={handleLike} className="like">👍 {upvotes}</button>
            <button onClick={handleDisLike} className="dislike">👎 {downVotes}</button>
        </div>
    )
}

export default Button
