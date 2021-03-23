import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import CustomCard from '../../components/CustomCard/CustomCard';
import totalTrip from '../../assets/TotalIcon.svg';
import canceledIcon from '../../assets/CancelIcon.svg';
import checkedIcon from '../../assets/CheckedIcon.svg';
import tripIcon from '../../assets/Trip_Icon.svg';
import ReusableTopNav from '../../components/TopNavWithHomeLabel';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '20px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 'auto',
  },
  mt: {
    display: 'hidden',
  },
  chatArea: {
    backgroundColor: '#F4F4F4',
    height: '70vh',
    borderRadius: 7,
  },
  chatContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
  },
}));

export default function TripsPage() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <>
      <br />
      <br />
      <br />

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
          <CustomCard title="Busy Drivers" count={28} icon={tripIcon} />
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
      <br />
      <ReusableTopNav label="Chat" />
      <Paper className={classes.root}>
        <div className={classes.chatContainer}>
          <Grid
            xs={12}
            md={12}
            sm={10}
            lg={11}
            className={classes.chatArea}
          ></Grid>
        </div>
      </Paper>
      {/* <TripsNav /> */}
    </>
  );
}
