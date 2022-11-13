import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  leftbar: {
    backgroundColor: "#559",
    height: "100vh",
    color: "white",
    padding: theme.spacing(2),
    paddingTop: theme.spacing(6),
    marginTop: theme.spacing(2.8),
    position:"sticky",
    top:20 
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(4),
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "grey",
    },
  },
  text: {
    marginLeft: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));
