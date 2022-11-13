import { AppBar, Avatar, Badge, InputBase, Toolbar, Typography } from "@material-ui/core";
import { Cancel, Mail, Notifications, Search } from "@material-ui/icons";
import profile from "../../assets/logo4.jpg"
import React, { useState } from "react";
import useStyles from "./styles";
function Appbar() {
  const [open,setOpen] = useState(false)
  const classes = useStyles({open});
  return (
    <AppBar elevation= {1} position="fixed"  sx = {{zIndex:"0",elevation:0}}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.logo}>
          <Typography className={classes.logo} >Gax</Typography>
          <Typography className={`${classes.logosm} ${classes.logo}`}>Ag</Typography>
        </div>

        <div className={classes.search}>
          <Search />
          <InputBase placeholder="search..." className={classes.input} />
          <Search className={classes.searchButton} onClick = {()=>setOpen(!open)}/>
          <Cancel className={classes.cancel} onClick={()=>setOpen(!open)}/>
        </div>
        <div className={classes.icons}>
          <Badge badgeContent= {4} color = "secondary" className={classes.badje}>
           <Mail/>
          </Badge>
          <Badge badgeContent= {4} color = "secondary" className={classes.badje}>
           <Notifications/>
          </Badge>
          <Avatar src = {profile}/>
        </div>
      </Toolbar>
      
    </AppBar>
  );
}

export default Appbar;
