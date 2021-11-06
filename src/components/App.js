

import video from "../data/video.js";
import VideoCard from "./VideoCard.js";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <VideoCard video={video} />
    </div>
  );
}

export default App;
