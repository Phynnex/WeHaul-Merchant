import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import LineChart from "../../components/LineChart";
import MetaDecorator from "../../components/MetaDecorator/MetaDecorator";
import CustomCard from "../../components/CustomCard/CustomCard";
import TimeLineActivities from "../../components/TimeLineActivities/TimeLineActivities";
import totalTrip from "../../assets/TotalIcon.svg";
import canceledIcon from "../../assets/CancelIcon.svg";
import completeIcon from "../../assets/CompleteIcon.svg";
import ActiveIcon from "../../assets/ActiveIcon.svg";
import Button from "@material-ui/core/Button";
import RequestIcon from "../../assets/RequestIcon.svg";
import Money from "../../assets/money.svg";
import { GiWallet } from "react-icons/gi";


import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";


const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(10),
    width: "100%",
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
  supportTicketStyle: {
    fontWeight: 600,
    color: theme.palette.primary.main,
    marginLeft: 8,
  },
  transactionBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    padding: theme.spacing(3, 2),
    transition: "all 1s",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      "& > div": {
        "& > h4": {
          color: theme.palette.grey[100],
        },
        "& $percentageText": {
          color: theme.palette.green.light,
        },
      },
    },
  },
  transactionValueText: {
    fontWeight: 600,
    color: theme.palette.primary.main,
  },
  percentageText: {
    marginTop: theme.spacing(2),
    fontWeight: 700,
    color: theme.palette.green.main,
  },
  clientImage: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    marginRight: theme.spacing(1),
  },
  supportBoxStyle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    // padding: theme.spacing(2),
    overflow: "hidden",
    borderBottom: `1px solid ${theme.palette.grey[200]}`,
  },
  supportTicketContent: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    // padding: theme.spacing(2),
  },
  supportStatus: {
    color: theme.palette.grey[100],
    backgroundColor: theme.palette.yellow.main,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100px",
    padding: "4px 4px",
    borderRadius: "4px",
    overflow: "hidden",
  },
  supportUser: {
    display: "flex",
    // justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),
    width: "60%",
    overflow: "hidden",
  },
  supportUserDetail: {
    overflow: "hidden",
  },
  statusDiv: {
    width: "40%",
    overflow: "hidden",
    paddingRight: theme.spacing(2),
  },
  float: {
    float: "right",
  },
  tripsActivityBox: {
    padding: theme.spacing(3, 2, 0, 3),
  },
  tripsActivityText: {
    fontWeight: 600,
  },
  supportTitle: {
    fontWeight: 600,
  },
  supportText: {
    textOverflow: "hidden",
    overflow: "hidden",
    width: "100%",
    whiteSpace: "nowrap",
  },
  ticketPaper: {
    overflow: "hidden",
  },
  charts: {
    padding: theme.spacing(6, 2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  cardStyles: {
    display: "flex",
    justifyContent: "center",
    minWidth: 275,
    "&:hover": {
      backgroundColor: "#40D192",
      color: "#FFFFFF",
    },
  },
  requestIcon: {
    fontSize: "10px !important",
    "&:hover": {
      color: "#FBFCFF !important",
    },
  },
  requestCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  btnRequest: {
    textTransform: "initial",
    fontSize: "18px",
    color: "#707070",
    marginTop: "-10px",
    "&:hover": {
      color: "#FFFFFF",
    },
  },
  cardStyles2: {
    minWidth: 275,
    marginTop: "20px",
  },
  btnFundWallet: {
    textTransform: "initial",
    fontSize: "22px",
    fontWeight: "300",
    background: "#113E82",
    color: "#FFFFFF",
    padding: "4px 0",
    width: "100%",
    marginTop: "20px",
    "&:hover": {
      backgroundColor: "#40D192",
    },
  },
}));

function Homepage() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const decorator = {
    title: "Wehaul - Merchant Dashboard",
    description: "Merchant dashboard",
  };

  return (
    <div className={classes.root}>
      <MetaDecorator decorator={decorator} />

      <Grid
        className={classes.UIT}
        container
        spacing={matches ? 3 : 1}
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12} sm={6} md={3}>
          <CustomCard
            cardBackground="#FFBB00"
            title="Total Trips"
            count={22}
            icon={totalTrip}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CustomCard
            cardBackground="#40D192"
            title="Completed Trips"
            count={48}
            icon={completeIcon}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CustomCard title="Active Trips" count={28} icon={ActiveIcon} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CustomCard
            cardBackground="#F3402B"
            title="Cancelled Trips"
            count={8}
            icon={canceledIcon}
          />
        </Grid>
      </Grid>
      <br />

      {/* Begining of charts */}
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.charts}>
            <LineChart />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Card className={classes.cardStyles}>
            <div className={classes.requestCard}>
              <CardContent>
                <img
                  src={RequestIcon}
                  alt="request icon"
                  className={classes.requestIcon}
                />
              </CardContent>
              <CardActions>
                <Button size="small" className={classes.btnRequest}>
                  Request a Vehicle
                </Button>
              </CardActions>
            </div>
          </Card>
          <Card className={classes.cardStyles2}>
            <CardContent
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "20px 40px 0",
              }}
            >
              <div>
                <Typography>Wallet Balance</Typography>
                <Typography
                  style={{
                    fontSize: "48px",
                    color: "#113E82",
                    fontWeight: "bold",
                  }}
                >
                  N28,000
                </Typography>
              </div>
              <div>
                <img src={Money} alt="money" />
              </div>
            </CardContent>
          </Card>
          <Button
            variant="outlined"
            startIcon={<GiWallet style={{fontSize:"30px", marginRight:"40px"}}  />}
            className={classes.btnFundWallet}
          >
            Fund Wallet
          </Button>
        </Grid>
      </Grid>

      {/* Ending of Charts */}

      {/* Begining of Trips Section */}
      <br />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Paper>
            <Box className={classes.tripsActivityBox}>
              <Typography
                className={classes.tripsActivityText}
                color="primary"
                variant="h5"
              >
                Trips Activity
              </Typography>
            </Box>
            <TimeLineActivities />
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Paper className={classes.ticketPaper}>
            <Box p={2} mb={2} className={classes.supportTicketContent}>
              {/* <HiOutlineTicket size="28" style={{ color: "#113E82" }} /> &nbsp; */}
              <Typography
                className={classes.supportTicketStyle}
                component="span"
                color="primary"
                variant="body1"
              >
                Pending Trips
              </Typography>
            </Box>
            <Divider />

            {[...new Array(5)].map((item, index) => {
              return (
                <Box
                  key={index}
                  className={classes.supportBoxStyle}
                  p={2}
                  mb={1}
                >
                  <div className={classes.supportUser}>
                    <div className={classes.supportUserDetail}>
                      <Typography
                        className={classes.supportTitle}
                        variant="body1"
                        color="primary"
                      >
                        Request title goes in here
                      </Typography>
                      <div style={{ overflow: "hidden" }}>
                        <Typography
                          color="textSecondary"
                          variant="caption"
                          className={classes.supportText}
                          noWrap
                        >
                          08.02.2021
                        </Typography>
                      </div>
                    </div>
                  </div>

                  <div className={classes.statusDiv}>
                    <div className={classes.float}>
                      <div className={classes.supportStatus}>Pending</div>
                    </div>
                  </div>
                </Box>
              );
            })}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "40px",
                marginBottom: "40px",
              }}
            >
              <Button
                variant="outlined"
                style={{
                  textTransform: "initial",
                  padding: "4px 120px",
                  fontSize: "18px",
                  color: "#40D192",
                  border: "1px solid #40D192",
                }}
              >
                Load More
              </Button>
            </div>
          </Paper>
        </Grid>
      </Grid>

      {/* End of Trips Section */}
    </div>
  );
}

export default Homepage;
