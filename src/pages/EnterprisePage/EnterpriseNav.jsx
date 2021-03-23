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
import { Link } from 'react-router-dom';

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
    height: '40px',
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
  Link: {
    textDecoration: 'none',
  },
  routeCount: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    height: 30,
    fontWeight: 'bold',
    width: 60,
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
    textTransform: 'capitalize',
    backgroundColor: theme.palette.green.main,
    color: '#FFFFFF',
  },
  exportBtn: {
    padding: theme.spacing(1, 5),
    border: '1px solid grey',
    marginLeft: '15px',
    fontSize: '14px',
    textTransform: 'capitalize',
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.grey[100],
  },
  spacer: {
    flex: 2,
  },
}));

export default function EnterpriseNav() {
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
      <Typography className={classes.textLabel}>Enterprise</Typography>
      <Box className={classes.routeCount}>22</Box>

      <Box className={classes.searchContent}>
        <InputBase
          className={classes.input}
          placeholder=""
          inputProps={{ 'aria-label': '' }}
        />

        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Box>
      <Button className={classes.exportBtn} variant="contained" size="small">
        Export
      </Button>
      <div className={classes.spacer} />
      <Link className={classes.Link} to="/add-new-enterprise">
        <Button
          className={classes.addRoutes}
          variant="contained"
          size="large"
          startIcon={<AddIcon />}
        >
          Add Enterprise
        </Button>
      </Link>
    </Paper>
  );
}
