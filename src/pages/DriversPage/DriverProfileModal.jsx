import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Box, Typography } from '@material-ui/core';
import { FaShuttleVan } from 'react-icons/fa';
import { HiCog } from 'react-icons/hi';
import driverPassport from '../../assets/profile.jpg';
import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    borderRadiusTopLeft: 10,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    borderRadius: 20,
    color: theme.palette.text.secondary,
  },
  FormContent: {
    padding: theme.spacing(2, 5),
    color: theme.palette.primary.main,
  },
  formHeader: {
    padding: theme.spacing(2, 5),
    display: 'flex',
    height: '7rem',
    alignItems: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: '#E2E5EB',
  },
  divider: {
    backgroundColor: '#BEBEC7',
    height: '1px',
  },
  textDriverName: {
    fontWeight: '700',
    marginTop: '1rem',
    marginBottom: '1.5rem',
  },
  textDriverEmail: {
    fontWeight: '400',
  },
  imageContainer: {
    marginTop: '5rem',
  },
  textContainer: {
    marginLeft: '30px',
    marginTop: '8rem',
  },
  tripInfoContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#E2E5EB',
    height: '6rem',
    textAlign: 'center',
    borderRadius: '12px',
    border: `1px solid ${theme.palette.grey[500]}`,
  },
  dividerVertical: {
    width: '2px',
    height: 80,
    backgroundColor: '#BFC0C3',
  },
  stationInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '2rem',
  },
  stationText: {
    marginLeft: '8px',
  },
  stationType: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  settingsSection: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: theme.spacing(3, 3),
    width: '100%',
    marginBottom: -25,
    backgroundColor: '#E2E5EB',
  },
  cogIcon: {
    cursor: 'pointer',
    transition: 'linear 1s ease-in-out',
    '&:hover': {
      transform: `scale(1.1)`,
    },
  },
  submitBtn: {
    width: '100%',
    height: '3.5rem',
    fontWeight: '600',
    fontSize: '1.5rem',
    textTransform: 'capitalize',
  },
}));

export default function DriverProfileModal() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.PaperForm}>
        <div className={classes.settingsSection}>
          <HiCog
            className={classes.cogIcon}
            style={{ fill: '#113E82' }}
            size="26"
          />
        </div>
        <div className={classes.formHeader}>
          <div className={classes.imageContainer}>
            <img
              style={{ height: '200px', width: '240px', borderRadius: '5px' }}
              src={driverPassport}
              alt="Driver Passport"
            />
          </div>
          <div className={classes.textContainer}>
            <Typography className={classes.textDriverName} variant="h5">
              Kazim Adgaje
            </Typography>
            <Typography className={classes.textDriverEmail} variant="body1">
              kazimadgaje@gmail.com
            </Typography>
            <Typography className={classes.textPhoneNumber} variant="h6">
              +234 9028232471
            </Typography>
          </div>
        </div>
        <Divider className={classes.divider} />
        <br />
        <br />
        <br />
        <br />
        <div className={classes.FormContent}>
          <Grid container spacing={3}>
            <Grid className={classes.stationInfo} item xs={12}>
              <Typography>Trips</Typography>
              <div className={classes.stationType}>
                <FaShuttleVan style={{ marginRight: '10px' }} size="26" />
                {/* <img src={} alt="Station" /> */}
                <Typography className={classes.stationText} variant="caption">
                  {' '}
                  Station Wagon
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12}>
              <Box className={classes.tripInfoContainer}>
                <div className={classes.tripRequest}>
                  <Typography variant="h4">18</Typography>
                  <Typography variant="body1">Trip Request</Typography>
                </div>
                <Divider
                  className={classes.dividerVertical}
                  orientation="vertical"
                />
                <div className={classes.completedRequest}>
                  <Typography variant="h4">27</Typography>
                  <Typography variant="body1">Completed Request</Typography>
                </div>
              </Box>
            </Grid>
          </Grid>
          <Box mt={2}>
            <br />
            <Link to="/drivers/update-details/:driverName/:driverId">
              <Button
                className={classes.submitBtn}
                variant="contained"
                color="primary"
              >
                Profile Details
              </Button>
            </Link>
          </Box>
          <br />
        </div>
      </Paper>
    </div>
  );
}
