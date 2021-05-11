import { makeStyles } from "@material-ui/core";

const HeaderStyles = makeStyles((theme) => ({
  root: {
    height: "95vh",
    alignItems: "center",
    textAlign: "center",
    marginTop: "20rem",
  },
  image: {
    marginTop: "5rem",
    backgroundImage: `url(${
      process.env.PUBLIC_URL + "/assets/illustration/10SCENE.svg"
    })`,
    backgroundRepeat: "no-repeat",
    backgroundColor: "white",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "80%",
    height: "80%",
  },
  a: {
    backgroundColor: "white",
  },
}));

export default HeaderStyles;
