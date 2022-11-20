import './Card.css';
import video from '../data/video.mp4';

function Video() {
  return (
    <div className="videoWrapper">
      <video autoPlay loop muted={true} className="video">
        <source src={video} type="video/mp4"></source>
      </video>
    </div>
  );
}
export default Video;
