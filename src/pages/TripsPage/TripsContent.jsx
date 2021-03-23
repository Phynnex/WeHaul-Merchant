import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import CompletedTrips from "./CompletedTrips";
import OnGoingTrips from "./OnGoingTrips";
import AllTrips from "./AllTrips";
import PendingTrips from "./PendingTrips";
import CancelledTrips from "./CancelledTrips";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  transform: {
    fontWeight: "700",
    color: theme.palette.primary.main,
  },
  activeBg: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    borderRadiusLeft: 10,
    textTransform: "capitalize",
    fontWeight: "700",
  },
  cancelledTrips: {
    backgroundColor: theme.palette.secondary.main,
    color: "white",
    borderRadiusLeft: 10,
    fontWeight: "700",
  },
  ongoingTrips: {
    backgroundColor: theme.palette.green.main,
    color: "white",
    borderRadiusLeft: 10,
    fontWeight: "700",
  },
  pendingTrips: {
    backgroundColor: theme.palette.yellow.main,
    color: "white",
    borderRadiusLeft: 10,
    fontWeight: "700",
  },
  background: {
    backgroundColor: "white",
  },
}));

export default function TripsContent() {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          className={classes.background}
          value={value}
          onChange={handleChange}
          //   backgroundColor="primary"
          indicatorColor="inherit"
          //   textColor={value === value ? classes.activeBg : "primary"}
          //   variant="scrollable"
          //   scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab
            className={clsx(classes.transform, {
              [classes.activeBg]: value === 0,
            })}
            label="All Trips"
            {...a11yProps(0)}
          />
          <Tab
            className={clsx(classes.transform, {
              [classes.pendingTrips]: value === 1,
            })}
            label="Pending Trips"
            {...a11yProps(1)}
          />
          <Tab
            className={clsx(classes.transform, {
              [classes.ongoingTrips]: value === 2,
            })}
            label="On-Going Trips"
            {...a11yProps(2)}
          />
          <Tab
            className={clsx(classes.transform, {
              [classes.activeBg]: value === 3,
            })}
            label="Completed Trips"
            {...a11yProps(3)}
          />
          <Tab
            className={clsx(classes.transform, {
              [classes.cancelledTrips]: value === 4,
            })}
            label="Cancelled Trips"
            {...a11yProps(3)}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <AllTrips />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <PendingTrips />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <OnGoingTrips />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <CompletedTrips />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <CancelledTrips />
      </TabPanel>
    </div>
  );
}
