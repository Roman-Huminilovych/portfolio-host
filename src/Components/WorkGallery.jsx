import ReactPlayer from 'react-player/youtube';

// Render a YouTube video player

export default function WorkGallery() {
  return (
    <div className="video-project">
      <ReactPlayer url="https://www.youtube.com/watch?v=1HG8l0IvzFE" />
      <ReactPlayer url="https://www.youtube.com/watch?v=ZPp-BZvnc2E" />
      <ReactPlayer url="https://youtu.be/eUPnQfb7CwA" />
      <ReactPlayer url="https://youtu.be/8w0SFBZZV2Y" />
    </div>
  );
}
