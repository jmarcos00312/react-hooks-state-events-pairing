import React, { useState } from 'react'



function CommentCard({ comment, handleDelete, videoComments }) {
    const [upVotes, setUpVotes] = useState(0)
    const [downVotes, setDownVotes] = useState(0)

    const handleLike = () => {
        setUpVotes(upvotes => upvotes + 1)
    }


    const handleDisLike = () => {
        setDownVotes(downVotes => downVotes + 1)
    }


    return (
        <div>
            <div>
                {/* <button>Hide Comments</button> */}
                <h3>{comment.user}</h3>
                <p>{comment.comment}</p>
                <button onClick={handleLike} className="like">👍 {upVotes}</button>
                <button onClick={handleDisLike} className="dislike">👎 {downVotes}</button>
                {/* <button onClick={(e) => handleDelete(e)}>Delete</button> */}
            </div>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}
// }

export default CommentCard
