import React from 'react'
import VideoDetails from './VideoDetails'
import CommentContainer from './CommentsContainer'

function VideoCard({ video }) {
    return (
        <div className="Container">
            <iframe
                width="919"
                height="525"
                src={video.embedUrl}
                frameBorder="0"
                allowFullScreen
                title={video.title}
            />
            <VideoDetails
                title={video.title}
                views={video.views}
                createdAt={video.createdAt}
                upVotes={video.upvotes}
                downVotes={video.downvotes}
            />
            <hr />
            <CommentContainer comments={video.comments} />
        </div>
    )
}

export default VideoCard
