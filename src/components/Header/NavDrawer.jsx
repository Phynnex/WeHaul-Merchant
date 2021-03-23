import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
// import { logOutUser } from "../../redux/actions/userActions";
import logo from "../../assets/WeHaul_Brand_Logo.svg";
import navigation from "../../utils/navigation";
import { Divider } from "@material-ui/core";

const drawerWidth = 230;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    backgroundColor: "transparent",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  capitalize: {
    textTransform: "capitalize",
    color: theme.palette.grey[900],
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",

    [theme.breakpoints.up("xs")]: {
      width: theme.spacing(0),
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(0, 1),
    backgroundColor: "transparent",
    ...theme.mixins.toolbar,
  },
  logoDivStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100px",
    overflow: "hidden",
  },
  logoStyle: {
    width: "50%",
    objectFit: "cover",
  },
  active: {
    color: theme.palette.primary.main,
    // backgroundColor: theme.palette.grey[50],
  },

  listItemStyle: {
    // marginTop: "8px",
    paddingLeft: theme.spacing(1),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    fontSize: "12px",
    backgroundColor: "transparent",
    "&:hover": {
      backgroundColor: theme.palette.grey[200],
    },
  },
  listItemTextStyle: {
    fontSize: "14px",
    color: theme.palette.grey[100],
  },
  dividerLine: {
    backgroundColor: theme.palette.grey[700],
  },
  drawerInner: {
    backgroundColor: theme.palette.primary.main,
  },
  profileImage: {
    borderRadius: "50%",
    width: "30px",
    height: "30px",
    objectFit: "cover",
  },
  navItemDiv: {
    // padding: theme.spacing(1, 0, 0, 2),
    margin: theme.spacing(2, 0),
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    height: "48px",
    transition: theme.transitions.create("height", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  linkInnerDiv: {
    paddingLeft: theme.spacing(2),
    width: "95%",
    height: "100%",
    color: theme.palette.grey[100],
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    textDecorationStyle: "none",

    "&::hover": {
      textDecoration: "none",
      color: "#eee",
    },
  },

  linkStyle: {
    paddingLeft: theme.spacing(2),
    width: "100%",

    color: theme.palette.grey[100],
    display: "flex",
    alignItems: "center",
    height: "42px",
    textDecoration: "none",
  },
  linkStyleSpan: {
    fontWeight: 500,
  },

  content: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
}));

function NavDrawer(props) {
  const classes = useStyles();
  const { openDrawer } = props;
  const theme = useTheme();
  const [active, setActive] = useState("");
  // const dispatch = useDispatch();

  const isAuthenticated = useSelector(
    (state) => state.userData.isAuthenticated
  );

  const navActiveStyle = {
    color: theme.palette.primary.main,
    fontSize: "19px",
    backgroundColor: theme.palette.grey[100],
    marginLeft: "10px",
    borderTopLeftRadius: "7px",
    borderBottomLeftRadius: "7px",
    fontWeight: 600,
  };

  return (
    <div className={classes.root}>
      {!isAuthenticated ? (
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: openDrawer,
            [classes.drawerClose]: !openDrawer,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: openDrawer,
              [classes.drawerClose]: !openDrawer,
            }),
          }}
        >
          <div className={classes.drawerInner}>
            <div className={classes.toolbar}>
              <>
                {" "}
                <div className={classes.logoDivStyle}>
                  <img src={logo} alt="logo" className={classes.logoStyle} />{" "}
                  {/* <Typography> LOGO</Typography> */}
                </div>
              </>
            </div>
            <Divider className={classes.dividerLine} />
            <div className={classes.nav}>
              {navigation?.map((item, index) => {
                return (
                  <div className={classes.navItemDiv} key={index}>
                    <div
                      className={classes.linkInnerDiv}
                      style={active === item.link ? navActiveStyle : {}}
                    >
                      {item.icon}
                      <NavLink
                        to={item.link}
                        exact
                        className={classes.linkStyle}
                        style={
                          active === item.link
                            ? { color: theme.palette.primary.main }
                            : { color: theme.palette.grey[100] }
                        }
                        isActive={(match, location) => {
                          if (!match) {
                            return false;
                          }

                          return location && location.pathname === item.link
                            ? setActive(item.link)
                            : "";
                        }}
                      >
                        {/* <span style={{display:"block"}}> */}
                        {item.title}
                        {/* </span> */}
                      </NavLink>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Drawer>
      ) : null}
    </div>
  );
}

export default NavDrawer;
