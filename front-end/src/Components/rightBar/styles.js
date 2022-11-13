import { makeStyles } from "@material-ui/core";
export default makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
    marginTop: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    position: "sticky",
    top: 20,
  },
  links: {
    marginLeft: 30,
  },
  link: {
    marginRight: 20,
  },
}));
