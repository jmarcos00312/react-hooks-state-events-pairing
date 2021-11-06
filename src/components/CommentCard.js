import React, { useState } from 'react'



function CommentCard({ comment }) {
    console.log(comment)

    const [upVotes, setUpVotes] = useState(0)
    const [downVotes, setDownVotes] = useState(0)

    const handleLike = () => {
        setUpVotes(upvotes => upvotes + 1)
    }


    const handleDisLike = () => {
        setDownVotes(downVotes => downVotes + 1)
    }
    // {
    // const comments = comment.map(comment => {
    //     return (
    //         <div>
    //             <button>Hide Comments</button>
    //             <h3>{comment.user}</h3>
    //             <p>{comment.comment}</p>
    //             <button onClick={handleLike} className="like">👍 {upVotes}</button>
    //             <button onClick={handleDisLike} className="dislike">👎 {downVotes}</button>
    //         </div>
    //     )
    // })

    return (
        <div>
            <div>
                {/* <button>Hide Comments</button> */}
                <h3>{comment.user}</h3>
                <p>{comment.comment}</p>
                <button onClick={handleLike} className="like">👍 {upVotes}</button>
                <button onClick={handleDisLike} className="dislike">👎 {downVotes}</button>
            </div>
        </div>
    )
}
// }

export default CommentCard
