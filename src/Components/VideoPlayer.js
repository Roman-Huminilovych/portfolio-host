import ReactPlayer from 'react-player';
import romanvid from '../Assets/video-dek.mp4';
import mobromanvid from '../Assets/video-dek.mp4';

const VideoPlayer = () => {
  //Sets video based on screen width
  if (window.innerWidth < 500) {
    return (
      <div className="video-div">
        <ReactPlayer
          style={{ backgroundColor: 'black' }}
          url={mobromanvid}
          playing
          loop
          muted
          playsinline
          height="120%"
          width="100%"
        />
      </div>
    );
  } else {
    return (
      <div>
        <video className="desktop-vid " playsinline muted autoPlay loop>
          <source src={romanvid} type="video/mp4" />
        </video>
      </div>
    );
  }
};

export default VideoPlayer;
