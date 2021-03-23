import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { AiFillStar } from 'react-icons/ai';
import profile from '../../assets/profile.jpg';
import { MdCall, MdChat } from 'react-icons/md';
import { FaTimes } from 'react-icons/fa';
import { RiUserSharedLine } from 'react-icons/ri';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(3, 0),
      width: '100%',
      height: theme.spacing(16),
    },
  },
  Content: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  firstSectionContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  profileDPContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100px',
    height: '100px',
    // borderTop: '5px solid #40D192',
    // borderRight: '5px solid #40D192',
    // borderRight: '5px solid #40D192',
    borderRadius: '50%',
  },
  profileDP: {
    width: '100%',
    height: '100%',
    border: '5px solid #40D192',
    borderRadius: '50%',
  },
  profileDPname: {
    marginLeft: 30,
  },
  profileRating: {
    display: 'flex',
    alignItems: 'center',
    // marginLeft: 5,
  },
  vehicleType: {
    padding: theme.spacing(0, 3),
    border: '1px solid #40D192',
    borderRadius: '30px',
    marginLeft: '10px',
  },
  call: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 2),
    borderRadius: '6px',
    '&:hover': {
      border: '1px solid #40D192',
      padding: theme.spacing(0, 2),
      cursor: 'pointer',
      backgroundColor: theme.palette.grey[200],
    },
  },
  chat: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 2),
    borderRadius: '6px',
    '&:hover': {
      border: '1px solid #40D192',
      padding: theme.spacing(0, 2),
      cursor: 'pointer',
      backgroundColor: theme.palette.grey[200],
    },
  },
  button: {
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.green.main,
    },
  },
  textColor: {
    color: theme.palette.grey[600],
    fontWeight: '600',
    marginLeft: 4,
  },
  amountRequest: {
    color: theme.palette.primary.main,
  },
  Icon: {
    color: theme.palette.primary.main,
  },
  ratingValue: {
    color: theme.palette.primary.main,
    marginLeft: 4,
  },
  driverName: {
    color: theme.palette.grey[600],
    marginLeft: 4,
  },
  btnCancell: {
    padding: theme.spacing(0.5, 1),
    borderRadius: '2px',
    color: theme.palette.grey[400],
    '&:hover': {
      color: theme.palette.secondary.main,
      border: `1px solid ${theme.palette.secondary.main}`,
    },
  },
}));

export default function RequestTruckSearchResult() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.Content}>
        <Box className={classes.firstSectionContainer}>
          <Box className={classes.profileDPContainer}>
            <img className={classes.profileDP} src={profile} alt="Driver DP" />
          </Box>
          <Box className={classes.profileDPname}>
            <div>
              <Typography className={classes.driverName} variant="h5">
                Adebayo Oke
              </Typography>
            </div>
            <div className={classes.profileRating}>
              <AiFillStar size="30" color="#40D192" />{' '}
              <Typography className={classes.ratingValue} variant="h6">
                4.8
              </Typography>
              <Box className={classes.vehicleType}>
                <Typography className={classes.Icon} variant="p">
                  Lorry
                </Typography>
              </Box>
            </div>
          </Box>
        </Box>
        <Typography className={classes.amountRequest} variant="h5">
          N15000
        </Typography>
        <Box className={classes.call}>
          <MdCall size="30" color="#113E82" />
          <Typography className={classes.textColor} variant="h6">
            Call
          </Typography>
        </Box>
        <Box className={classes.chat}>
          <MdChat size="27" color="#113E82" />
          <Typography className={classes.textColor} variant="h6">
            Chat
          </Typography>
        </Box>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<RiUserSharedLine size="30" />}
        >
          Assign
        </Button>
        <Box className={classes.btnCancell}>
          <FaTimes size="20" />
        </Box>
      </Paper>
    </div>
  );
}
