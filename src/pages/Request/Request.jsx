import React from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import CustomCard from '../../components/CustomCard/CustomCard';
import totalTrip from '../../assets/TotalIcon.svg';
import canceledIcon from '../../assets/CancelIcon.svg';
import busyIcon from '../../assets/BusyIcon.svg';
import checkedIcon from '../../assets/CheckedIcon.svg';
import { useHistory } from "react-router-dom";

import RequestContent from './RequestContent';


import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import AddIcon from "@material-ui/icons/Add";
//  
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  dashboardCard: {
    minWidth: "220px",
    display: "block",
    color: theme.palette.grey[50],
  },
  cancelledColor: {
    background: "red",
  },
  successColor: {
    background: "green",
  },
  navRoot: {
    padding: "15px 4px",
    display: "flex",
    alignItems: "center",
    width: "auto",
  },
  iconButton: {
    padding: 10,
    color: theme.palette.primary.main,
  },
  divider: {
    height: 20,
    margin: 4,
    color: "#444444",
  },
  routeCount: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    height: 30,
    fontWeight: "bold",
    width: 60,
    margin: 4,
    color: theme.palette.primary.main,
    borderRadius: "3px",
    border: `1px solid ${theme.palette.primary.main}`,
    marginLeft: "35px",
  },
  textLabel: {
    marginLeft: "25px",
    fontWeight: "bold",
    color: theme.palette.primary.main,
  },
  addCustomer: {
    marginRight: "30px",
    textTransform: "capitalize",
    backgroundColor: "#40D192",
    color: "#FFFFFF",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
  },
  exportBtn: {
    padding: theme.spacing(1, 5),
    border: "1px solid grey",
    marginLeft: "15px",
    fontSize: "14px",
    textTransform: "capitalize",
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.grey[100],
  },
  spacer: {
    flex: 2,
  },
}));

const Request = () => {
  let history = useHistory();
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  // const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    history.push("/add-new-trip");
  };
  // const handleClose = () => {
  //   setOpen(false);
  // };
  // const theme = useTheme();

  return (
    <>
      <br />
      <br />
      <br />
      <div className={classes.root}>
        <Grid
          container
          spacing={matches ? 3 : 1}
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12} sm={6} md={3}>
            <CustomCard
              cardBackground="#FFBB00"
              title="Total Drivers"
              count={22}
              icon={totalTrip}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <CustomCard
              cardBackground="#40D192"
              title="Available Drivers"
              count={48}
              icon={checkedIcon}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <CustomCard title="Busy Drivers" count={28} icon={busyIcon} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <CustomCard
              cardBackground="#F3402B"
              title="Banned Drivers"
              count={8}
              icon={canceledIcon}
            />
          </Grid>
        </Grid>
        <br />
      </div>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={12} sm={12} md={12}>
          <Paper component="form" className={classes.navRoot}>
            <IconButton className={classes.iconButton} aria-label="menu">
              <HomeRoundedIcon />
            </IconButton>
            <Divider className={classes.divider} orientation="vertical" />
            <Typography className={classes.textLabel}>Request</Typography>
            <Box className={classes.routeCount}>68</Box>
            <Button
              className={classes.exportBtn}
              variant="contained"
              size="small"
            >
              Export
            </Button>
            <div className={classes.spacer} />
            <Button
              className={classes.addCustomer}
              variant="contained"
              size="large"
              startIcon={<AddIcon />}
              onClick={handleClick}
            >
              Request New Trip
            </Button>
          </Paper>
        </Grid>
      </Grid>
      <br />
      <RequestContent />
    </>
  );
};;;;;;;
export default Request;
