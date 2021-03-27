import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import AddIcon from '@material-ui/icons/Add';
import AddRoutes from '../../components/AddRoutesDialog/AddRoutesDialog';
import AddNewCustomerForm from './AddNewCustomer';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "15px 4px",
    display: "flex",
    alignItems: "center",
    width: "auto",
  },
  iconButton: {
    padding: 10,
    color: theme.palette.primary.main,
  },
  divider: {
    height: 20,
    margin: 4,
    color: "#444444",
  },
  routeCount: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    height: 30,
    fontWeight: "bold",
    width: 60,
    margin: 4,
    color: theme.palette.primary.main,
    borderRadius: "3px",
    border: `1px solid ${theme.palette.primary.main}`,
    marginLeft: "35px",
  },
  textLabel: {
    marginLeft: "25px",
    fontWeight: "bold",
    color: theme.palette.primary.main,
  },
  addCustomer: {
    marginRight: "30px",
    textTransform: "capitalize",
    backgroundColor: "#40D192",
    color: "#FFFFFF",
     "&:hover": {
      backgroundColor: theme.palette.primary.main,
    }
  },
  exportBtn: {
    padding: theme.spacing(1, 5),
    border: "1px solid grey",
    marginLeft: "15px",
    fontSize: "14px",
    textTransform: "capitalize",
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.grey[100],
  },
  spacer: {
    flex: 2,
  },
}));

export default function CustomersNav() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();
  // const theme = useTheme();

  return (
    <Paper component="form" className={classes.root}>
      <IconButton className={classes.iconButton} aria-label="menu">
        <HomeRoundedIcon />
      </IconButton>
      <Divider className={classes.divider} orientation="vertical" />
      <Typography className={classes.textLabel}>Customer</Typography>
      <Box className={classes.routeCount}>18</Box>
      <Button className={classes.exportBtn} variant="contained" size="small">
        Export
      </Button>
      <div className={classes.spacer} />
      <Button
        className={classes.addCustomer}
        variant="contained"
        size="large"
        startIcon={<AddIcon />}
        onClick={handleClickOpen}
      >
        Add New Customer
      </Button>
      <AddRoutes open={open} handleClose={handleClose}>
        <AddNewCustomerForm />
      </AddRoutes>
    </Paper>
  );
}
