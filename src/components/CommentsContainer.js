import React, { useState } from 'react'
import CommentCard from "./CommentCard"

function CommentsContainer({ comments, handleDelete }) {
    const [showComments, setShowComments] = useState(true)


    let everyComment = comments.map(comment => {
        return <CommentCard comment={comment} key={comment.id} handleDelete={handleDelete} />
    })
    const handleShow = () => {
        setShowComments(prev => !prev)
    }
    const hideOrShow = showComments ? "Hide Comments" : "Show Comments"


    return (
        <div>
            <button onClick={handleShow}>{hideOrShow}</button>
            {showComments ? everyComment : ""}
        </div>
    )
}

export default CommentsContainer
