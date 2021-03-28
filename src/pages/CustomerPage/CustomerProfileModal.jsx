import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Box, Typography } from "@material-ui/core";
import { HiCog } from "react-icons/hi";
import { FiArrowLeftCircle } from "react-icons/fi";
import driverPassport from "../../assets/profile.jpg";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    borderRadius: "16px",
  },
  FormContent: {
    padding: theme.spacing(2, 3),
  },
  formHeader: {
    padding: theme.spacing(2, 5),
    display: "flex",
    height: "7rem",
    alignItems: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "#113E82",
  },
  divider: {
    backgroundColor: "#BEBEC7",
    height: "1px",
  },
  textDriverName: {
    fontWeight: "700",
    marginTop: "1rem",
    marginBottom: ".5rem",
  },
  textDriverEmail: {
    fontWeight: "400",
  },
  imageContainer: {
    marginTop: "5rem",
  },
  textContainer: {
    textAlign: "center",
    marginTop: "5rem",
    color: "#113E82",
  },
  textPhoneNumber: {
    border: "1px solid #40D192",
    borderRadius: "8px",
    padding: "0",
  },
  tripInfoContainer: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#E2E5EB",
    height: "5rem",
    width: "26rem",
    textAlign: "center",
    borderRadius: "12px",
    border: `1px solid ${theme.palette.grey[500]}`,
    marginTop: "1.5rem",
    color: "#717171",
  },
  dividerVertical: {
    width: "2px",
    height: 80,
    backgroundColor: "#BFC0C3",
  },
  settingsSection: {
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(3, 3),
    width: "100%",
    marginBottom: -25,
    backgroundColor: "#113E82",
  },
  cogIcon: {
    cursor: "pointer",
    transition: "linear 1s ease-in-out",
    "&:hover": {
      transform: `scale(1.1)`,
    },
  },
  submitBtn: {
    width: "100%",
    height: "3.5rem",
    fontWeight: "600",
    fontSize: "1.5rem",
    textTransform: "capitalize",
  },
}));

export default function DriverProfileModal() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.PaperForm}>
        <div className={classes.settingsSection}>
          <FiArrowLeftCircle size="30" color="#40D192" />
          <HiCog
            className={classes.cogIcon}
            style={{ fill: "#FFFFFF" }}
            size="30"
          />
        </div>
        <div className={classes.formHeader}>
          <div className={classes.imageContainer}>
            <img
              style={{
                height: "150px",
                width: "150px",
                borderRadius: "50%",
                border: "2px solid #40D192",
              }}
              src={driverPassport}
              alt="Customer Passport"
            />
          </div>
        </div>
        <Divider className={classes.divider} />
        <div className={classes.textContainer}>
          <Typography className={classes.textDriverName} variant="h5">
            Temiloluwa Fosudo
          </Typography>
          <Typography className={classes.textDriverEmail} variant="body1">
            teefose@gmail.com
          </Typography>
          <Typography className={classes.textPhoneNumber} variant="h6">
            +234 902 823 2471
          </Typography>
        </div>
        <div className={classes.FormContent}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Box className={classes.tripInfoContainer}>
                <div className={classes.tripRequest}>
                  <Typography variant="body1">Trips Requested</Typography>
                  <Typography variant="h4">18</Typography>
                </div>
                <Divider
                  className={classes.dividerVertical}
                  orientation="vertical"
                />
                <div className={classes.completedRequest}>
                  <Typography variant="body1">Completed Trips</Typography>
                  <Typography variant="h4">23</Typography>
                </div>
              </Box>
            </Grid>
          </Grid>
          <Box mt={2}>
            <br />
            <Link to="/drivers/update-details/:driverName/:driverId">
              <Button
                className={classes.submitBtn}
                variant="contained"
                color="primary"
              >
                Profile Details
              </Button>
            </Link>
          </Box>
          <br />
        </div>
      </Paper>
    </div>
  );
}
