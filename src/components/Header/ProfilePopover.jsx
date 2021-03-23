import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import InboxRoundedIcon from '@material-ui/icons/InboxRounded';
import NotificationsNoneRoundedIcon from '@material-ui/icons/NotificationsNoneRounded';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import { HiOutlineLogout } from 'react-icons/hi';
import ProfilePic from '../../assets/profile.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
  },
  typography: {
    padding: theme.spacing(2),
  },
  capitalize: {
    textTransform: 'capitalize',
  },
  userSection: {
    flex: 1,
    width: '240px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: theme.spacing(0, 5),
    padding: theme.spacing(1, 0, 0, 0),
  },
  profileImageDiv: {
    position: 'relative',
  },
  profileImage: {
    borderRadius: '50%',
    width: '80px',
    height: '80px',
    objectFit: 'cover',
    margin: theme.spacing(1, 2),
  },
  profileCircle: {
    position: 'absolute',
    right: '29px',
    bottom: '14px',
    width: '17px',
    height: '17px',
    borderRadius: '50%',
    border: '2px solid #fff',
    backgroundColor: theme.palette.green.main,
    zindex: 10,
  },
  userName: {
    marginTop: '7px',
    color: theme.palette.primary.main,
    fontWeight: 600,
    marginBottom: '-4px',
  },
  userEmail: {
    color: theme.palette.primary.main,
    marginBottom: '2px',
  },
  profileButtonDiv: {
    height: '50px',
  },
  profileButton: {
    marginTop: '2px',
    color: theme.palette.grey[50],
    backgroundColor: theme.palette.green.main,
    textTransform: 'capitalize',
    fontSize: '12px',
    boxShadow: 'none',
    width: '100px',
    transition: 'all 1s',
    '&:hover': {
      backgroundColor: theme.palette.green.main,
      transform: 'scale(0.9)',
      fontSize: '11px',
      boxShadow: 'none',
    },
  },
  fadedStyle: {
    backgroundColor: '#FBFCFF',
  },
  listIcons: {
    color: theme.palette.primary.main,
  },
}));

const routes = [
  {
    icon: <InboxRoundedIcon />,
    label: 'Inbox',
    link: '/inbox',
  },
  {
    icon: <NotificationsNoneRoundedIcon />,
    label: 'Notification',
    link: '/notification',
  },
  {
    icon: <SettingsOutlinedIcon />,
    label: 'Settings',
    link: '/settings',
  },
  {
    icon: <HiOutlineLogout size="28" />,
    label: 'Logout',
    link: '/logout',
  },
];
export default function ProfilePopper({ open, anchorEl }) {
  const classes = useStyles();

  return (
    <Popper open={open} anchorEl={anchorEl} placement="bottom-end" transition>
      {({ TransitionProps }) => (
        <Fade {...TransitionProps} timeout={350}>
          <Paper>
            <section className={classes.userSection}>
              <div className={classes.profileImageDiv}>
                <img
                  src={ProfilePic}
                  alt="profile"
                  className={classes.profileImage}
                />
                <div className={classes.profileCircle} />
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
                  eniolarobins@gmail.com
                </Typography>
                <div className={classes.profileButtonDiv}>
                  <Button
                    className={classes.profileButton}
                    variant="contained"
                    size="small"
                  >
                    View Profile
                  </Button>
                </div>
              </div>
            </section>
            <Divider />
            <List
              component="nav"
              aria-labelledby="nav-list-subheader"

              //   className={classes.root}
            >
              {routes.map((item, index) => (
                <ListItem
                  className={(index + 1) % 2 === 1 ? classes.fadedStyle : ''}
                  button
                  key={item.link}
                >
                  <ListItemIcon className={classes.listIcons}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    className={classes.listIcons}
                    primary={item.label}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Fade>
      )}
    </Popper>
  );
}
