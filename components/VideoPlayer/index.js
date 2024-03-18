// components/VideoPlayer.js

import React, { useRef, useEffect, useState } from "react";
import styles from "./styles.module.scss";
const VideoPlayer = ({ src }) => {
  const videoRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust this threshold as per your requirement
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      });
    }, options);

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    // Clean up the observer
    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isInView]);

  return (
    <video ref={videoRef} className={styles.video} autoPlay muted loop>
      <source src={src} type="video/mp4" />
    </video>
  );
};

export default VideoPlayer;
