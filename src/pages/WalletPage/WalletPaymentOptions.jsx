import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Money from "../../assets/money.svg";
import { GiWallet } from "react-icons/gi";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    width: "auto",
    height: "auto",
    // "&:hover": {
    //   backgroundColor: "#40D192",
    //   color: "#FFFFFF",
    // },
  },
}));

const WalletPaymentOptions = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={6} className={classes.root}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            border: "1px solid green",
            margin: "10px",
          }}
        >
          <div style={{ display: "flex" }}>
            <GiWallet size="64" />
          </div>
          <div>
            <Typography>Current Balance</Typography>
            <Typography
              style={{
                fontSize: "48px",
                color: "#113E82",
                fontWeight: "bold",
              }}
            >
              N2,922,800,30
            </Typography>
          </div>
        </div>
      </Grid>
      <Grid item xs={6} className={classes.root}>
        <Card>
          <CardContent
          // style={{
          //   display: "flex",
          //   justifyContent: "space-between",
          //   padding: "20px 40px 0",
          // }}
          >
            <div>
              <img src={Money} alt="money" />
            </div>
            <div>
              <Typography>Wallet Balance</Typography>
              <Typography
              // style={{
              //   fontSize: "48px",
              //   color: "#113E82",
              //   fontWeight: "bold",
              // }}
              >
                N28,000
              </Typography>
            </div>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6} className={classes.root}>
        <Card>
          <CardContent
          // style={{
          //   display: "flex",
          //   justifyContent: "space-between",
          //   padding: "20px 40px 0",
          // }}
          >
            <div>
              <Typography>Wallet Balance</Typography>
              <Typography
              // style={{
              //   fontSize: "48px",
              //   color: "#113E82",
              //   fontWeight: "bold",
              // }}
              >
                N28,000
              </Typography>
            </div>
            <div>
              <img src={Money} alt="money" />
            </div>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6} className={classes.root}>
        <Card>
          <CardContent
          // style={{
          //   display: "flex",
          //   justifyContent: "space-between",
          //   padding: "20px 40px 0",
          // }}
          >
            <div>
              <Typography>Wallet Balance</Typography>
              <Typography
              // style={{
              //   fontSize: "48px",
              //   color: "#113E82",
              //   fontWeight: "bold",
              // }}
              >
                N28,000
              </Typography>
            </div>
            <div>
              <img src={Money} alt="money" />
            </div>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default WalletPaymentOptions;
