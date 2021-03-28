import React from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
// import { useHistory } from "react-router-dom";
import WalletContent from "./WalletContent";
import WalletPaymentOptions from "./WalletPaymentOptions";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import Button from "@material-ui/core/Button";
import { GiWallet } from "react-icons/gi";

//
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  dashboardCard: {
    minWidth: "220px",
    display: "block",
    color: theme.palette.grey[50],
  },
  cancelledColor: {
    background: "red",
  },
  successColor: {
    background: "green",
  },
  navRoot: {
    padding: "10px 4px",
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
    fontWeight: "600",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
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

const Request = () => {
  // let history = useHistory();
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  // const [open, setOpen] = React.useState(false);

  // const handleClick = () => {
  //   history.push("/add-new-trip");
  // };

  return (
    <>
      <br />
      <br />
      <br />
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={12} sm={12} md={12}>
          <Paper component="form" className={classes.navRoot}>
            <IconButton className={classes.iconButton} aria-label="menu">
              <HomeRoundedIcon />
            </IconButton>
            <Divider className={classes.divider} orientation="vertical" />
            <Typography className={classes.textLabel}>Wallet</Typography>

            <div className={classes.spacer} />
            <Button
              className={classes.addCustomer}
              variant="contained"
              size="large"
              startIcon={<GiWallet />}
              // onClick={handleClick}
            >
              Withdraw Fund
            </Button>
          </Paper>
        </Grid>
      </Grid>
      <br />
      <Paper>
        <br />
        <WalletPaymentOptions />
        <br />
        <WalletContent />
      </Paper>
    </>
  );
};
export default Request;
