import { Container, Grid } from "@material-ui/core";
import React from "react";
import Feed from "../feed/Feed";
import Leftbar from "../leftBar/Leftbar";
import Rightbar from "../rightBar/Rightbar";
import useStyle from "./styles"
function Home() {
  const classes = useStyle()
  return (
      <Grid container spacing={3} className={classes.home}>
        <Grid item xs={3} md = {2}>
          <Leftbar />
        </Grid>
        <Grid  xs={9} md = {7}>
          <Feed />
        </Grid>
        <Grid item xs={3} className={classes.rightbar}>
          <Rightbar />
        </Grid>
      </Grid>
  );
}

export default Home;
