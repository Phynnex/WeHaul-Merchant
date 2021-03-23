import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { BiLeftArrowCircle } from 'react-icons/bi';
import illustration from '../../assets/Illustration.svg';
import RequestTruckSearchResult from '../../components/RequestTruckSearchResult/RequestTruckSearchResult';
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(6, 0),
    width: '100%',
  },
  Content: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: theme.spacing(0, 3),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  labelIcon: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent: 'space-between',
    justifyItems: 'space-between',
    // alignItems: 'space-between',
    height: '25vh',
  },
  textAvailabe: {
    color: theme.palette.primary.main,
  },
  arrowLeft: {
    transition: 'linear 2s ease-in-out',
    cursor: 'pointer',
    '&:hover': {
      transform: 'scale(1.1)',
      opacity: 0.5,
      color: theme.palette.green.main,
    },
  },
}));

export default function RequestSearchPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box className={classes.Content}>
        <Box className={classes.labelIcon}>
          <BiLeftArrowCircle
            className={classes.arrowLeft}
            size="50"
            color="#113E82"
          />
          <Typography className={classes.textAvailabe} variant="h4">
            Available Drivers
          </Typography>
        </Box>
        <Box className={classes.profileDPContainer}>
          <img
            className={classes.profileDP}
            src={illustration}
            alt="Driver DP"
          />
        </Box>
      </Box>
      <br />
      <br />
      <br />
      <br />
      {[...Array(6)].map((driver, index) => (
        <RequestTruckSearchResult key={index} />
      ))}
    </div>
  );
}
