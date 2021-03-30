import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Money from "../../assets/money.svg";
import MasterCardLogo from "../../assets/MastercardLogo.svg.png";
import VisaLogo from "../../assets/VisaLogo.jpg";
import WehaulLogo from "../../assets/WeHaul_Brand_Logo.svg";

import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { GiWallet } from "react-icons/gi";
import { CgArrowsExchangeAlt } from "react-icons/cg";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "10px 0 60px",
  },
  currentBalance: {
    background: "#40D192",
    color: "#FFFFFF",
    paddingTop: "20px",
    "&:hover": {
      backgroundColor: "#113E82",
    },
  },
  transactionsAccount: {
    paddingTop: "20px",
    border: "1px solid #40D192",
    borderRadius: "8px",
  },
  arrowsIcon: {
    fontSize: "96px",
    borderRadius: "50%",
    border: "6px solid #40D192",
    color: "#40D192",
  },
  transactionsText: {
    color: "#113E82",
    paddingLeft: "20px",
    fontWeight: "600",
  },
  instantDeposit: {
    paddingLeft: "30px",
    border: "1px solid #40D192",
    borderRadius: "8px",
  },
  depositText: {
    padding: "10px 0",
    color: "#113E82",
    fontWeight: "bold",
  },
  divider: {
    width: "90%",
    background: "#B2F1D5",
    marginBottom: "10px",
  },

  textField: {
    background: "#F2FFF9",
    border: "1px solid #40D192",
    borderRadius: "4px",
    width: "250px",
  },
  depositBtn: {
    textTransform: "initial",
    color: "#FFFFFF",
    background: "#113E82",
    padding: "4px 48px",
    marginLeft: "48px",
    fontSize: "18px",
    fontWeight: "500",
  },
  accountDetails: {
    border: "1px solid #40D192",
    borderRadius: "8px",
  },
  divider2: {
    width: "100%",
    background: "#B2F1D5",
    marginBottom: "10px",
  },
  paymentProcess: {
    fontSize: "14px",
    color: "#113E82",
    marginTop: "-3px",
  },
}));

const WalletPaymentOptions = () => {
  const classes = useStyles();

  return (
    <>
      <Container>
        <CssBaseline />
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.currentBalance}>
                <div
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <div>
                    <GiWallet style={{ fontSize: "96px" }} />
                  </div>
                  <div style={{ fontWeight: "600" }}>
                    <Typography variant="h6" gutterBottom>
                      Current Balance
                    </Typography>
                    <Typography variant="h3" gutterBottom>
                      N2,922,800,30
                    </Typography>
                  </div>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className={classes.transactionsAccount}>
                <div style={{ display: "flex", paddingLeft: "50px" }}>
                  <div>
                    <CgArrowsExchangeAlt className={classes.arrowsIcon} />
                  </div>
                  <div className={classes.transactionsText}>
                    <Typography variant="h6" gutterBottom>
                      Transactions
                    </Typography>
                    <Typography variant="h3" gutterBottom>
                      42
                    </Typography>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid item xs={12} sm={6}>
              <div className={classes.instantDeposit}>
                <div>
                  <Typography
                    variant="h6"
                    gutterBottom
                    className={classes.depositText}
                  >
                    Instant Deposit
                  </Typography>
                  <Divider className={classes.divider} />
                </div>
                <div>
                  <div
                    style={{
                      display: "flex",
                      padding: "30px 0 20px",
                      objectFit: "cover",
                    }}
                  >
                    <img
                      src={MasterCardLogo}
                      alt="master card"
                      width="100px"
                      height="70px"
                    />
                    <img
                      src={VisaLogo}
                      alt="visa card"
                      width="100px"
                      height="60px"
                      style={{ paddingLeft: "20px" }}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      padding: "15px 0 30px",
                    }}
                  >
                    <TextField
                      variant="outlined"
                      size="small"
                      className={classes.textField}
                    />
                    <Button variant="outlined" className={classes.depositBtn}>
                      Deposit
                    </Button>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className={classes.accountDetails}>
                <div>
                  <div 
                    style={{ 
                      display: "flex",
                      paddingLeft:"20px",
                      paddingTop:"10px",
                     }}
                    >
                    <div>
                      <img
                        src={WehaulLogo}
                        alt="wehaul logo"
                        width="100px"
                        height="40px"
                      />
                    </div>
                    <div>
                      <Typography
                        variant="h6"
                        gutterBottom
                        className={classes.depositText}
                        style={{ paddingLeft: "40px" }}
                      >
                        Deposit Account
                      </Typography>
                    </div>
                  </div>
                  <Divider className={classes.divider2} />
                  <div>
                    <Typography
                      variant="subtitle2"
                      gutterBottom
                      className={classes.depositText}
                      style={{paddingLeft:"25px"}}
                    >
                      Bank Name: GTBank
                      <br />
                      Account Name: WeHaul Company
                      <br />
                      Account Number: 3492313304
                    </Typography>
                    <ul className={classes.paymentProcess}>
                      <li>
                        Make deposit to the this account from any branch near
                        you.
                      </li>
                      <li>
                        Send an email and attach a scanned copy of your receipt
                        or the receipt/transaction number along your user id to
                        payment@wehaul.com.
                      </li>
                      <li>
                        Or Send the receipt/transaction number along with your
                        user id to 08100001111.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
};

export default WalletPaymentOptions;
