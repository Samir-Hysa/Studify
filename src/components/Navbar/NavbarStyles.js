import { makeStyles } from "@material-ui/core";

const NavbarStyles = makeStyles((theme) => ({
  root: {},
  appbar: {
    height: "5vh",
    backgroundColor: "transparent",
    boxShadow: "none",
  },
  appbar__toolbar: {
    width: "95%",
    margin: "0 auto",
  },
  accountCircle: {
    color: "#fff",
    fontSize: "3rem",
  },
  logo: {
    flexGrow: "1",
    fontSize: "3rem",
    color: "black",
  },
  button__register: {
    color: "black",
    fontSize: "1.2rem",
    margin: "auto 0.4rem",
    borderRadius: "0.5rem",
  },
  button__login: {
    color: "black",
    backgroundColor: "white",
    margin: "auto 0.4rem",
    fontSize: "1.2rem",
    borderRadius: "0.5rem",
  },
}));

export default NavbarStyles;
