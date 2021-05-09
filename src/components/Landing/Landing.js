import { CssBaseline, Grid, makeStyles, Paper } from "@material-ui/core";
import Navbar from "../Navbar/Navbar";
import LandingStyle from "./LandingStyles";
import React, { useRef, useState, useEffect } from "react";

export default function Landing() {
  const classes = LandingStyle();

  // var that keep the state of the video
  const [playing, setPlaying] = useState(true);
  // Reference for the Video
  const videoRef = useRef(null);
  // Function that handle the video start and stop
  const handleVideoClick = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.a}>
        <div className="video">
          <video
            onClick={handleVideoClick}
            className={classes.video__player}
            loop
            ref={videoRef}
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          ></video>
        </div>
      </Grid>
      <Grid item xs={12} sm={8} md={5} className={classes.b} />
    </Grid>
  );
}
