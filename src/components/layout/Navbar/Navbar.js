import { AppBar, IconButton, Toolbar, Button } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NavbarStyles from "./NavbarStyles";

export default function Navbar(props) {
  const classes = NavbarStyles(props);
  return (
    <div>
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbar__toolbar}>
          <h1 className={classes.logo}>Studify</h1>
          {/* <IconButton>
            <AccountCircleIcon className={classes.accountCircle} />
          </IconButton> */}
          <Button className={classes.button__register} variant="outlined">
            Sign Up
          </Button>
          <Button className={classes.button__login} variant="contained">
            Sign In
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
