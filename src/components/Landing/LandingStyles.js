import { makeStyles } from "@material-ui/core";

const LandingStyle = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  video: {
    display: "flex",
    flexDirection: "column",
  },
  a: {
    backgroundColor: "black",
  },
  b: {
    backgroundColor: "white",
  },
}));

export default LandingStyle;
