

import video from "../data/video.js";
import VideoCard from "./VideoCard.js";
import { useState } from "react";

function App() {
  const [videoComments, setVideoComments] = useState(video.comments)
  const [videos, setVideo] = useState(video)


  const handleDelete = (comment) => {
    setVideoComments(
      console.log("this comment has been deleted mentally")
    )
  }

  return (
    <div className="App">
      <VideoCard video={videos} handleDelete={handleDelete} videoComments={videoComments} />
    </div>
  );
}

export default App;
