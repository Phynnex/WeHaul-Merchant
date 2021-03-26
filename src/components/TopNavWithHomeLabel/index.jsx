import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "10px 4px",
    display: "flex",
    alignItems: "center",
    width: "auto",
    marginTop: "30px",
  },
  iconButton: {
    padding: 10,
    color: theme.palette.primary.main,
  },
  divider: {
    height: 20,
    margin: 4,
  },
  tripCount: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    height: 25,
    fontWeight: "bold",
    width: 40,
    margin: 4,
    backgroundColor: theme.palette.grey[300],
    color: theme.palette.grey[600],
    borderRadius: "3px",
    border: `1px solid ${theme.palette.grey[500]}`,
    marginLeft: "35px",
  },
  textLabel: {
    marginLeft: "18px",
    fontWeight: "bold",
    color: theme.palette.primary.main,
  },
  spacer: {
    flex: 2,
  },
}));

export default function ReusableTopNav({ count, label }) {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root}>
      <IconButton className={classes.iconButton} aria-label="menu">
        <HomeRoundedIcon />
      </IconButton>
      <Divider className={classes.divider} orientation="vertical" />
      <Typography className={classes.textLabel}>{label}</Typography>
      {count && <Box className={classes.tripCount}>{count}</Box>}
      <div className={classes.spacer} />
    </Paper>
  );
}
