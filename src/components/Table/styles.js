import { fade, makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "20px 4px",
    display: "flex",
    alignItems: "center",
    width: "auto",
  },
  grid: {
    marginTop: theme.spacing(4),
    width: "100%",
  },
  paper: {
    padding: "20px 4px",
    display: "flex",
    alignItems: "center",
    width: "auto",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  searchContent: {
    // marginLeft: theme.spacing(1),
    display: "flex",
    border: `1px solid ${theme.palette.primary.main}`,
    width: 400,
    height: "30px",
    marginLeft: "35px",
    borderRadius: "3px",
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
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    height: 25,
    fontWeight: "bold",
    width: 40,
    margin: 4,
    color: theme.palette.primary.main,
    borderRadius: "3px",
    border: `1px solid ${theme.palette.primary.main}`,
    marginLeft: "35px",
  },
  export: {
    marginLeft: "12px",
    textTransform: "capitalise",
    fontWeight: "bold",
    color: theme.palette.primary.main,
    border: `1px solid ${theme.palette.primary.main}`,
    backgroundColor: theme.palette.grey[100],
  },
  tableButton: {
    marginLeft: "12px",
    textTransform: "capitalise",
    fontWeight: "bold",
    color: "#fff",
    border: `1px solid ${theme.palette.green.main}`,
    backgroundColor: theme.palette.green.main,
  },
  textLabel: {
    marginLeft: "25px",
    fontWeight: "bold",
    color: theme.palette.primary.main,
  },
  addRoutes: {
    marginRight: "30px",
    textTransform: "capitalise",
  },
  spacer: {
    flex: 2,
  },
  appBar: {
    backgroundColor: theme.palette.grey[100],
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
  grow: {
    flexGrow: 1,
  },
  capitalize: {
    textTransform: "capitalize",
    color: theme.palette.grey[900],
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    overflow: "scroll",
  },

  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(0, 1),
    backgroundColor: theme.palette.grey[50],
    ...theme.mixins.toolbar,
  },
  logoDivStyle: {
    width: "120px",
    overflow: "hidden",
    padding: "5px",
  },
  logoStyle: {
    width: "100%",
    objectFit: "cover",
  },
  title: {
    fontWeight: 600,
    color: theme.palette.primary.main,
  },

  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.primary.main, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.primary.main, 0.1),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "90%",
    maxWidth: "50%",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    [theme.breakpoints.up("sm")]: {
      width: "250px",
    },

    [theme.breakpoints.up("md")]: {
      width: "450px",
    },

    [theme.breakpoints.up("xl")]: {
      width: "730px",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    right: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: theme.palette.grey[900],
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "flex",
  },
  profileImage: {
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    objectFit: "cover",
    margin: theme.spacing(0, 2),
  },

  userName: {
    color: theme.palette.primary.main,
    fontWeight: 600,
    marginBottom: "-8px",
  },
  userEmail: {
    color: theme.palette.primary.main,
  },
  icons: {
    width: "120px",
    margin: theme.spacing(0, 2),
  },
  userSection: {
    flex: 1,
    width: "200px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
  iconButtonStyle: {
    backgroundColor: theme.palette.grey[100],
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  table: {
    minWidth: 700,
  },
  dashboardCard: {
    minWidth: "220px",
    display: "block",
    color: theme.palette.grey[50],
  },
  dashboardCardBox: {
    marginBottom: theme.spacing(1),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    // backgroundColor: theme.palette.purple.main,
  },
  helpLink: {
    textDecoration: "none",
    // color: theme.palette.blue.main,
  },
}));

export default useStyles;
