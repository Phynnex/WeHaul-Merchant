import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import LineChart from "../../components/LineChart";
import GirlPic from "../../assets/girl.jpg";
import MetaDecorator from "../../components/MetaDecorator/MetaDecorator";
import CustomCard from "../../components/CustomCard/CustomCard";
import TimeLineActivities from "../../components/TimeLineActivities/TimeLineActivities";
import totalTrip from "../../assets/TotalIcon.svg";
import canceledIcon from "../../assets/CancelIcon.svg";
import checkedIcon from "../../assets/CheckedIcon.svg";
import tripIcon from "../../assets/Trip_Icon.svg";
import ticket from "../../assets/supportticket.svg";
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
}));

function Homepage() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const decorator = {
    title: "Wehaul - Admin Dashboard",
    description: "Admin dashboard",
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
            count={110}
            icon={totalTrip}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CustomCard
            cardBackground="#40D192"
            title="Completed Trips"
            count={48}
            icon={checkedIcon}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CustomCard title="Active Trips" count={28} icon={tripIcon} />
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
          <Paper className={classes.charts}>
            <LineChart />
          </Paper>
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
          <Paper>
            <Box className={classes.transactionBox}>
              <div>
                <Typography
                  className={classes.transactionValueText}
                  color="primary"
                  variant="h3"
                  component="h4"
                >
                  18
                </Typography>
                <Typography component="h4" color="primary" variant="body2">
                  Transactions
                </Typography>
              </div>
              <div>
                <Typography
                  className={classes.percentageText}
                  color="primary"
                  variant="h2"
                >
                  16.75%
                </Typography>
              </div>
            </Box>
          </Paper>
          <br />

          <Paper className={classes.ticketPaper}>
            <Box p={2} mb={2} className={classes.supportTicketContent}>
              <img
                style={{
                  marginLeft: "15px",
                  marginTop: "-4px",
                  height: "20px",
                }}
                src={ticket}
                alt="support ticket"
              />
              {/* <HiOutlineTicket size="28" style={{ color: "#113E82" }} /> &nbsp; */}
              <Typography
                className={classes.supportTicketStyle}
                component="span"
                color="primary"
                variant="body1"
              >
                Support Tickets
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
                    <img
                      src={GirlPic}
                      className={classes.clientImage}
                      alt="Client"
                    />

                    <div className={classes.supportUserDetail}>
                      <Typography
                        className={classes.supportTitle}
                        variant="body1"
                        color="primary"
                      >
                        The Client Compliant
                      </Typography>
                      <div style={{ overflow: "hidden" }}>
                        <Typography
                          color="textSecondary"
                          variant="caption"
                          className={classes.supportText}
                          noWrap
                        >
                          Lorem ipsum dolor sit...
                        </Typography>
                      </div>
                    </div>
                  </div>

                  <div className={classes.statusDiv}>
                    <div className={classes.float}>
                      <div className={classes.supportStatus}>Pending</div>
                      <Typography align="left" variant="body2">
                        5 days ago
                      </Typography>
                    </div>
                  </div>
                </Box>
              );
            })}
          </Paper>
        </Grid>
      </Grid>

      {/* End of Trips Section */}
    </div>
  );
}

export default Homepage;
