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
import AddRoutes from './AddRoutesDialog/AddRoutesDialog';
import CreateRouteForm from '../pages/RoutesPage/AddNewRoute';

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

export default function CustomPageNav() {
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
      <Typography className={classes.textLabel}>Routes</Typography>
      <Box className={classes.routeCount}>06</Box>

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
        startIcon={<AddIcon />}
        onClick={handleClickOpen}
      >
        Add Route
      </Button>
      <AddRoutes open={open} handleClose={handleClose}>
        <CreateRouteForm />
      </AddRoutes>
    </Paper>
  );
}
