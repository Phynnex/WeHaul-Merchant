import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import CustomCard from '../../components/CustomCard/CustomCard';
import totalTrip from '../../assets/TotalIcon.svg';
import canceledIcon from '../../assets/CancelIcon.svg';
import completeIcon from "../../assets/CompleteIcon.svg";
import ActiveIcon from "../../assets/ActiveIcon.svg";
import ReusableTopNav from '../../components/TopNavWithHomeLabel';
import SettingsForm from "./SettingsForm";

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
  Content: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    width: '100%',
    padding: '25px',
  },
  settingsText: {
    color: theme.palette.primary.main,
    fontSize: '34px',
    fontWeight: 'bold',
  },
}));

export default function SettingsPage() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <>
      <br />
      <br />
      <br />

      <Grid
        className={classes.UIT}
        container
        spacing={matches ? 3 : 1}
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12} sm={6} md={3}>
          <CustomCard
            cardBackground="#FFBB00"
            title="Total Trips"
            count={22}
            icon={totalTrip}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CustomCard
            cardBackground="#40D192"
            title="Completed Trips"
            count={48}
            icon={completeIcon}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CustomCard title="Active Trips" count={28} icon={ActiveIcon} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CustomCard
            cardBackground="#F3402B"
            title="Cancelled Trips"
            count={8}
            icon={canceledIcon}
          />
        </Grid>
      </Grid>
      <br />
      <br />
      <ReusableTopNav label="Settings" />
      <SettingsForm />
    </>
  );
}
