import { CssBaseline, makeStyles } from "@material-ui/core";
import Navbar from "../navbar/Navbar";

const useStyles = makeStyles((theme) => ({}));

export default function Landing() {
  const classes = useStyles();
  return (
    <div className="main">
      <Navbar />
    </div>
  );
}
