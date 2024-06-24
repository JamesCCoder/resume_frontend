import React, { useEffect, useRef, useState } from 'react';
import './IntroVideo.scss'; 

import videoSrc from '../../static/intro-video.mp4'; 

interface IntroVideoProps {
  onEnd: () => void;
}

const IntroVideo: React.FC<IntroVideoProps> = ({ onEnd }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoEnded, setIsVideoEnded] = useState(false);

  useEffect(() => {
    const handleVideoEnd = () => {
      setIsVideoEnded(true);
      setTimeout(onEnd, 1000); // 1秒钟的黑屏效果
    };

    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener('ended', handleVideoEnd);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener('ended', handleVideoEnd);
      }
    };
  }, [onEnd]);

  return (
    <div className={`intro-container ${isVideoEnded ? 'fade-to-black' : ''}`}>
      <video ref={videoRef} autoPlay muted playsInline>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default IntroVideo;
