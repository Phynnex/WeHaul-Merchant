import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import Button from '@material-ui/core/Button';
import { BiWallet } from 'react-icons/bi';
import AddRoutes from '../../components/AddRoutesDialog/AddRoutesDialog';
import FundCustomerWalletForm from './FundWallet';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '20px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 'auto',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
    color: theme.palette.primary.main,
  },
  divider: {
    height: 20,
    margin: 4,
  },
  routeCount: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    height: 25,
    fontWeight: 'bold',
    width: 40,
    margin: 4,
    color: theme.palette.primary.main,
    borderRadius: '3px',
    border: `1px solid ${theme.palette.primary.main}`,
    marginLeft: '35px',
  },
  textLabel: {
    marginLeft: '18px',
    fontWeight: 'bold',
    color: theme.palette.primary.main,
  },
  addRoutes: {
    marginRight: '30px',
    textTransform: 'capitalize',
  },
  spacer: {
    flex: 2,
  },
}));

export default function CustomPageNav() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Paper component="form" className={classes.root}>
      <IconButton className={classes.iconButton} aria-label="menu">
        <HomeRoundedIcon />
      </IconButton>
      <Divider className={classes.divider} orientation="vertical" />
      <Typography className={classes.textLabel}>Finance</Typography>
      <div className={classes.spacer} />
      <Button
        className={classes.addRoutes}
        variant="contained"
        color="primary"
        size="small"
        startIcon={<BiWallet color="#ffffff" style={{ fill: '#ffffff' }} />}
        onClick={handleClickOpen}
      >
        Fund Wallet
      </Button>
      <AddRoutes open={open} handleClose={handleClose}>
        <FundCustomerWalletForm />
      </AddRoutes>
    </Paper>
  );
}
