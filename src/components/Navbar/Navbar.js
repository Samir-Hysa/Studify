import { AppBar, Toolbar, Button } from "@material-ui/core";
import NavbarStyles from "./NavbarStyles";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar(props) {
  const classes = NavbarStyles(props);
  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} elevation={0} position="static">
        <Toolbar className={classes.appbar__toolbar}>
          <h1 className={classes.logo}>Studify</h1>
          <Link to="/register" className="text__link">
            <Button className={classes.button__register} variant="outlined">
              Sign Up
            </Button>
          </Link>
          <Link to="/login" className="text__link">
            <Button className={classes.button__login} variant="contained">
              Sign In
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
