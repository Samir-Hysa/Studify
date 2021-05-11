import { makeStyles } from "@material-ui/core";

const LoginStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    marginTop: "10rem",
    backgroundImage: `url(${
      process.env.PUBLIC_URL + "/assets/illustration/10SCENE.svg"
    })`,
    backgroundRepeat: "no-repeat",
    width: "70%",
    height: "70%",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default LoginStyles;
