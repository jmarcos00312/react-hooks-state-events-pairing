import React from 'react'

function Video({ width = "919", height = "525", embedUrl, frameBorder = "0".allowFullScreen, title }) {
    return (
        <div>
            <iframe
                width="919"
                height="525"
                src={embedUrl}
                frameBorder="0"
                allowFullScreen
                title={title}
            />
        </div>
    )
}

export default Video
