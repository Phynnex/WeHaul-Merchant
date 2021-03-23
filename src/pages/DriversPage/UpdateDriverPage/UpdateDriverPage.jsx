import React, { useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import profileImage from '../../../assets/profile.jpg';
import UpdateDriverDetailsForm from './UpdateDriverDetailsForm';
import UserTrips from './UserTrips';
import DriverTripsContent from './DriverTrips/TripsContent';
import DriversNav from '../DriversNav';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
    opacity: 0.8,
  },
  profileBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    width: '100%',
    paddingLeft: theme.spacing(10),
  },
  profileImageDiv: {
    marginRight: theme.spacing(4),
  },
  profileImageStyle: {
    width: '210px',
    height: '210px',
    objectFit: 'cover',
    borderRadius: '10px',
  },
  profileName: {
    fontWeight: 'bold',
  },
  capitalize: {
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`driver-tabpanel-${index}`}
      aria-labelledby={`driver-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}
function a11yProps(index) {
  return {
    id: `driver-tab-${index}`,
    'aria-controls': `driver-tabpanel-${index}`,
  };
}
function UpdateDriverPage() {
  const [personalIdImage, setPersonalIdImage] = useState(null);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <DriversNav />
      <Paper elevation={1} className={classes.formContainerPaper}>
        <Box className={classes.profileBox} p={2} mt={2} mb={2}>
          <div className={classes.profileImageDiv}>
            <img
              src={profileImage}
              alt="driver"
              className={classes.profileImageStyle}
            />
          </div>
          <div className={classes.profileInfoDiv}>
            <Typography
              gutterBottom
              className={classes.profileName}
              variant="h6"
            >
              Robin Jenkins
            </Typography>
            <Typography
              color="textSecondary"
              className={classes.profileName}
              variant="body1"
              gutterBottom
            >
              Kozimadgaje@gmail.com
            </Typography>
            <Typography
              color="textSecondary"
              className={classes.profileName}
              variant="body1"
              gutterBottom
            >
              +234 902 823 2471
            </Typography>
          </div>
        </Box>
      </Paper>
      <section>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          aria-label="driver tabs "
        >
          <Tab
            className={classes.capitalize}
            label="General Information"
            {...a11yProps(0)}
          />
          <Tab
            className={classes.capitalize}
            label="User Trips"
            {...a11yProps(1)}
          />
        </Tabs>

        <TabPanel value={value} index={0}>
          <UpdateDriverDetailsForm />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <DriverTripsContent />
        </TabPanel>
      </section>
    </div>
  );
}

export default UpdateDriverPage;
