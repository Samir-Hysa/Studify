import { Grid, Paper, Typography } from "@material-ui/core";
import HeaderStyles from "./HeaderStyles";

export default function Header() {
  const classes = HeaderStyles();
  return (
    // <Grid container component="main" className={classes.root}>
    //   <Grid item xs={false} sm={4} md={7} className={classes.image}></Grid>
    //   <Grid
    //     item
    //     xs={12}
    //     sm={8}
    //     md={5}
    //     elevation={6}
    //     className={classes.a}
    //   ></Grid>
    // </Grid>
    <div className={classes.root}>
      <Typography variant="h1" component="h2">
        Welcome to studify
      </Typography>
      <Typography variant="subtitle1">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
        sed ipsum atque sit odio vel, accusantium nemo in tenetur soluta aliquid
        alias quo recusandae eius, dignissimos tempore quam adipisci ea.
      </Typography>
    </div>
  );
}
