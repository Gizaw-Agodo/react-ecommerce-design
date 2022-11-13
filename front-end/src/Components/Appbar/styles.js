import { alpha, makeStyles } from "@material-ui/core/styles";
import "@fontsource/montez";

export default makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  logo: {
    fontFamily: `"Montez"`,
    fontSize: "35px",
    display:"flex",
  },
  logosm:{
    [theme.breakpoints.down("sm")]:{
      display:"none"
    }
  },

  search: {
    display: "flex",
    alignItems: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width: "50%",
  },

  input: {
    color: "white",
    marginLeft: "10px",
  },

  icons: {
    justifyContent: "space-between",
    alignItems: "center",
    display: (props) => (props.open ? "none" : "flex"),
  },

  searchButton: {
    display: "none",
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.open ? "none" : "flex"),
    },
  },

  cancel: {
    display:"none",
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.open ? "block" : "none"),
    },
  },

  badje: {
    marginRight: theme.spacing(3),
  },
}));
