import React, { useState } from 'react';
import clsx from 'clsx';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { RiMenu3Fill } from 'react-icons/ri';
// import { useHistory } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import SearchIcon from '@material-ui/icons/Search';

import { AiOutlineWechat } from 'react-icons/ai';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import NavDrawer from './NavDrawer';
import ProfilePopper from './ProfilePopover';
import ProfilePic from '../../assets/profile.jpg';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth})`,
    backgroundColor: theme.palette.grey[100],
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 21,
  },
  hide: {
    display: 'none',
  },
  grow: {
    flexGrow: 1,
  },
  capitalize: {
    textTransform: 'capitalize',
    color: theme.palette.grey[900],
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    overflow: 'scroll',
  },

  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(0, 1),
    backgroundColor: theme.palette.grey[50],
    ...theme.mixins.toolbar,
  },
  logoDivStyle: {
    width: '120px',
    overflow: 'hidden',
    padding: '5px',
  },
  logoStyle: {
    width: '100%',
    objectFit: 'cover',
  },
  title: {
    fontWeight: 600,
    color: theme.palette.primary.main,
  },

  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    height: '2.5rem',
    backgroundColor: fade(theme.palette.primary.main, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.primary.main, 0.1),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '90%',
    maxWidth: '50%',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    [theme.breakpoints.up('sm')]: {
      width: '250px',
    },

    [theme.breakpoints.up('md')]: {
      width: '500px',
    },

    [theme.breakpoints.up('xl')]: {
      width: '730px',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    right: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: theme.palette.grey[900],
    width: '90%',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(2)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
  sectionDesktop: {
    display: 'flex',
  },
  profileImage: {
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    objectFit: 'cover',
    margin: theme.spacing(0, 2),
  },

  userName: {
    color: theme.palette.primary.main,
    fontWeight: 600,
    marginBottom: '-8px',
    width: '120px',
  },
  userEmail: {
    color: theme.palette.primary.main,
  },
  icons: {
    width: '120px',
    margin: theme.spacing(0, 2),
  },
  userSection: {
    flex: 1,
    display: 'flex',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: '10px',
    cursor: 'pointer',
    backgroundColor: '#F5F5FE ',
    '&:hover': {
      backgroundColor: fade(theme.palette.primary.main, 0.1),
    },
  },
  iconButtonStyle: {
    backgroundColor: theme.palette.grey[300],
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
}));

function Header(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(true);
  // const [userImage, setUserImage] = useState("")
  //   const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  //   const dispatch = useDispatch();
  //   const history = useHistory();

  const handlePopOver = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(!open);
  };

  const formatEmail = (email = '') => {
    const result = email.substring(0, email.indexOf('@'));
    return `${result}...`;
  };

  //   const handleProfileRoute = () => {
  //     handleClose();
  //     history.push("/");
  //   };

  //   const handleRouteChange = (url) => {
  //       history.push(`/${url}`);
  //   };

  return (
    <div className={classes.root}>
      <NavDrawer openDrawer={openDrawer} />
      <section className={classes.content}>
        <div className={classes.grow}>
          <AppBar color="transparent" position="static">
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="open drawer"
                onClick={() => setOpenDrawer(!openDrawer)}
              >
                <RiMenu3Fill />
              </IconButton>
              <Typography
                color="textPrimary"
                className={classes.title}
                variant="body1"
              >
                Welcome Admin
              </Typography>{' '}
              <div className={classes.grow} />
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  className={classes.grow}
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </div>
              <div className={classes.grow} />
              <div className={classes.icons}>
                {' '}
                <IconButton
                  aria-label="show 4 new mails"
                  color="default"
                  className={classes.iconButtonStyle}
                >
                  <Badge badgeContent={4} color="primary">
                    <AiOutlineWechat size="28px" />
                  </Badge>
                </IconButton>{' '}
                &nbsp;
                <IconButton
                  aria-label="show 17 new notifications"
                  color="default"
                  className={classes.iconButtonStyle}
                >
                  <Badge badgeContent={7} color="secondary">
                    <NotificationsActiveIcon />
                  </Badge>
                </IconButton>{' '}
              </div>
              <section
                className={classes.userSection}
                onClick={(e) => handlePopOver(e)}
              >
                <div className={classes.profileImageDiv}>
                  <img
                    src={ProfilePic}
                    alt="profile"
                    className={classes.profileImage}
                  />
                </div>
                <div className={classes.profileImageInfo}>
                  <Typography
                    variant="body1"
                    color="primary"
                    className={clsx(classes.capitalize, classes.userName)}
                  >
                    Eniola Robins
                  </Typography>
                  <Typography
                    className={classes.userEmail}
                    color="primary"
                    variant="caption"
                    noWrap
                  >
                    {formatEmail('eniolarobins@gmail.com')}
                  </Typography>
                </div>
              </section>
              <ProfilePopper anchorEl={anchorEl} open={open} />
            </Toolbar>
          </AppBar>
        </div>
        {props.children}
      </section>
    </div>
  );
}

export default Header;
