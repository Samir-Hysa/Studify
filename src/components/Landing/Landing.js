import { makeStyles } from "@material-ui/core";
import Navbar from "../Navbar/Navbar";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default function Landing() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Navbar />
      <h1>Landing page</h1>
    </div>
  );
}
