import { Container, Typography } from "@material-ui/core";
import { Bookmark, ExitToApp, Home, Person, PlayCircleOutlineOutlined, Settings, TabletMac } from "@material-ui/icons";
import React from "react";
import useStyles from "./styles";

function Leftbar() {
  const classes = useStyles();

  return (
    <Container className={classes.leftbar}>
      <div className={classes.item}>
        <Home />
        <Typography className={classes.text}>Homepage</Typography>
      </div>
      <div className={classes.item}>
        <Person />
        <Typography className={classes.text}>Friends</Typography>
      </div>
      <div className={classes.item}>
        <PlayCircleOutlineOutlined />
        <Typography className={classes.text} >Videos</Typography>
      </div>
      <div className={classes.item}>
        <TabletMac />
        <Typography className={classes.text} >Apps</Typography>
      </div>
      <div className={classes.item}>
        <Bookmark />
        <Typography className={classes.text} >Collections</Typography>
      </div>
      <div className={classes.item}>
        <Home />
        <Typography className={classes.text} >Homepage</Typography>
      </div>
      <div className={classes.item}>
        <Settings />
        <Typography className={classes.text} >Settings</Typography>
      </div>
      <div className={classes.item}>
        <ExitToApp />
        <Typography className={classes.text} >LogOut</Typography>
      </div>
    </Container>
  );
}

export default Leftbar;
