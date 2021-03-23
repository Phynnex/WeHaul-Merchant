import React from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import CustomCard from '../../components/CustomCard/CustomCard';
import totalTrip from '../../assets/TotalIcon.svg';
import canceledIcon from '../../assets/CancelIcon.svg';
import busyIcon from '../../assets/BusyIcon.svg';
import checkedIcon from '../../assets/CheckedIcon.svg';

import TableBar from '../../components/TableBar/TableBar';
import RequestContent from './RequestContent';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  dashboardCard: {
    minWidth: '220px',
    display: 'block',
    color: theme.palette.grey[50],
  },
  cancelledColor: {
    background: 'red',
  },
  successColor: {
    background: 'green',
  },
}));

const Request = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

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
          <TableBar
            text={'Requests'}
            count={68}
            button={true}
            buttonText={'Request Trip'}
            exportButton={true}
          />
        </Grid>
      </Grid>
      <br />
      <RequestContent />
    </>
  );
};
export default Request;
