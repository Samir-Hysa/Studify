import { CssBaseline, Grid, makeStyles, Paper } from "@material-ui/core";
import Navbar from "../Navbar/Navbar";
import LandingStyle from "./LandingStyles";
import React, { useRef, useState, useEffect } from "react";
import Header from "./Header/Header";

export default function Landing() {
  const classes = LandingStyle();

  return (
    <div className={classes.root}>
      <Navbar />
      <Header />
    </div>
  );
}
