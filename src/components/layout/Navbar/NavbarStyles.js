import { makeStyles } from "@material-ui/core";

const NavbarStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: "#656af7",
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
  },
  button__register: {
    color: "#fff",
    fontSize: "1.2rem",
    margin: "auto 0.4rem",
    borderRadius: "50rem",
    borderColor: "#fff",
  },
  button__login: {
    color: "#656af7",
    backgroundColor: "white",
    margin: "auto 0.4rem",
    fontSize: "1.2rem",
    borderRadius: "50rem",
  },
}));

export default NavbarStyles;
