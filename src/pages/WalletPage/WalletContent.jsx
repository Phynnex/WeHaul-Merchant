import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Deposits from "./Deposits";
import Withdrawals from "./Withdrawals";

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

export default function WalletContent() {
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
            label="DEPOSITS"
            {...a11yProps(0)}
          />
          <Tab
            className={clsx(classes.transform, {
              [classes.ongoingTrips]: value === 1,
            })}
            label="WITHDRWALS"
            {...a11yProps(2)}
          />

          {/* <Tab
            className={clsx(classes.transform, {
              [classes.pendingTrips]: value === 1,
            })}
            label="ACTIVE REQUEST"
            {...a11yProps(1)}
          />
          <Tab
            className={clsx(classes.transform, {
              [classes.activeBg]: value === 3,
            })}
            label="Completed Trips"
            {...a11yProps(3)}
          /> */}
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Deposits />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Withdrawals />
      </TabPanel>
    </div>
  );
}
