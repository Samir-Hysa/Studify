import {
  AppBar,
  Button,
  makeStyles,
  Toolbar,
  Typography,
  IconButton,
  Link,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  logo: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  button__signin: {
    margin: "0.5rem 0.5rem",
  },
  button__signup: {
    margin: "0.5rem 0.5rem",
  },
}));

export default function Navbar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.logo} color="inherit">
            Studify
          </Typography>

          <Button
            variant="contained"
            color="secondary"
            className={classes.button__signin}
            href="/signup"
          >
            Sign In
          </Button>

          <Button
            variant="contained"
            color="secondary"
            className={classes.button__signup}
            href="/signup"
          >
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
