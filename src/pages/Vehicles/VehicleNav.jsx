import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import AddIcon from '@material-ui/icons/Add';
import AddRoutes from '../../components/AddRoutesDialog/AddRoutesDialog';
import AddNewVehicleForm from './AddNewVehicle';

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
  searchContent: {
    // marginLeft: theme.spacing(1),
    display: 'flex',
    border: `1px solid ${theme.palette.primary.main}`,
    width: 400,
    height: '30px',
    marginLeft: '35px',
    borderRadius: '3px',
  },
  iconButton: {
    padding: 10,
    color: theme.palette.primary.main,
  },
  divider: {
    height: 20,
    margin: 4,
  },
  vehicleCount: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    height: 25,
    fontWeight: 'bold',
    width: 40,
    margin: 4,
    backgroundColor: theme.palette.grey[400],
    color: theme.palette.grey[600],
    borderRadius: '3px',
    border: `1px solid ${theme.palette.grey[500]}`,
    marginLeft: '35px',
  },
  textLabel: {
    marginLeft: '25px',
    fontWeight: 'bold',
    color: theme.palette.primary.main,
  },
  addRoutes: {
    marginRight: '30px',
    textTransform: 'capitalise',
  },
  spacer: {
    flex: 2,
  },
}));

export default function VehoicleNav() {
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
      <Typography className={classes.textLabel}>Vehicles</Typography>
      <Box className={classes.vehicleCount}>04</Box>

      <Box className={classes.searchContent}>
        <InputBase
          className={classes.input}
          placeholder="Search Google Maps"
          inputProps={{ 'aria-label': 'search google maps' }}
        />

        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Box>
      <div className={classes.spacer} />
      <Button
        className={classes.addRoutes}
        variant="contained"
        color="primary"
        size="small"
        startIcon={<AddIcon size="100px" />}
        onClick={handleClickOpen}
      >
        Add vehicle Type
      </Button>
      <AddRoutes open={open} handleClose={handleClose}>
        <AddNewVehicleForm />
      </AddRoutes>
    </Paper>
  );
}
