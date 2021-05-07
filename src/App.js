import { CssBaseline, makeStyles } from "@material-ui/core";
import Navbar from "./components/layout/Navbar/Navbar";
import "./App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    // backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/mainbg.jpg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar />
    </div>
  );
}
