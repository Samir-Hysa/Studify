import { makeStyles } from "@material-ui/core";

const LandingStyle = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  video: {
    display: "flex",
    flexDirection: "column",
  },
  video__player: {
    // objectFit: "fill",
    width: "100%",
    height: "100%",
  },
  a: {
    backgroundColor: "black",
  },
  b: {
    backgroundColor: "white",
  },
}));

export default LandingStyle;
