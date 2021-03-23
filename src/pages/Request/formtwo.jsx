import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import PersonIcon from "@material-ui/icons/Person";
import Chip from "@material-ui/core/Chip";
import QueryBuilderSharpIcon from "@material-ui/icons/QueryBuilderSharp";
import BookSharpIcon from "@material-ui/icons/BookSharp";
import GpsFixedIcon from "@material-ui/icons/GpsFixed";
import SendIcon from "@material-ui/icons/Send";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import DateRangeRoundedIcon from "@material-ui/icons/DateRangeRounded";
import LocationOnRoundedIcon from "@material-ui/icons/LocationOnRounded";
import ReceiptIcon from "@material-ui/icons/Receipt";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import EmailIcon from "@material-ui/icons/Email";
import ContactMailRoundedIcon from "@material-ui/icons/ContactMailRounded";

const useStyles = makeStyles((theme) => ({
  userContainerBox: {
    padding: theme.spacing(1),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  userInfoDiv: {
    width: "70%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  userInfoInnerDiv: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  userIcon: {
    display: "inline",
    fontSize: "20px",
    color: theme.palette.grey[400],
    marginRight: theme.spacing(1),
  },
  paper: {
    marginBottom: theme.spacing(3),
  },
  icon: {
    display: "inline",
    fontSize: "130px",
    color: theme.palette.grey[400],
    marginRight: theme.spacing(1),
  },
  formPaperStyle: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(3),
  },
  submitBtnBox: {
    height: "100%",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  submitButton: {
    width: "180px",
    background: theme.palette.primary.main,
    color: theme.palette.grey[50],
    marginBottom: theme.spacing(3),
    transition: "background 0.5s ease-in",
    "&:hover": {
      background: theme.palette.success.main,
    },
  },
  chip: {
    borderRadius: "0px",
    padding: theme.spacing(1, 2),
    color: theme.palette.grey[50],
    background: theme.palette.success.main,
  },
  centerTextBox: {
    display: "flex",
    alignItems: "flex-start",
  },
  centerTextIconBox: {
    display: "flex",
    alignItems: "flex-start",
    marginBottom: theme.spacing(1),
  },
}));

function InputWithIcon() {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.formPaperStyle}>
        <Box className={classes.userContainerBox}>
          <div className={classes.userInfoDiv}>
            <PersonIcon className={classes.icon} />
            <div className={classes.userInfoInnerDiv}>
              <div className={classes.centerTextIconBox}>
                <BookSharpIcon className={classes.userIcon} /> &nbsp;{" "}
                <Typography
                  component="span"
                  variant="body2"
                  color="textSecondary"
                >
                  ID: MielisoijjkjjsErjonsipzg{" "}
                </Typography>
              </div>
              <div className={classes.centerTextIconBox}>
                <QueryBuilderSharpIcon className={classes.userIcon} />
                &nbsp;{" "}
                <Typography
                  component="span"
                  variant="body2"
                  color="textSecondary"
                >
                  Jun 3, 2020{" "}
                </Typography>
              </div>{" "}
            </div>
          </div>
          <div classaname={classes.userStatusDiv}>
            <Typography variant="body2" gutterBottom>
              Status
            </Typography>
            <Chip className={classes.chip} label="Active" />
          </div>
        </Box>
      </Paper>
      <br />
      <Paper className={classes.paper}>
        <Box p={3}>
          <Typography variant="h6" gutterBottom className={classes.formTitle}>
            Request Information
          </Typography>
        </Box>
        <Divider />
        <Box p={3}>
          <Grid container spacing={2}>
            {/* Start of Grid items */}
            <Grid item xs={12} sm={4}>
              <Box mb={2}>
                <Typography className={classes.coloredTet}>
                  Pickup Point (Origin)
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Box className={classes.centerTextBox} mb={2}>
                <GpsFixedIcon className={classes.requestIcon} /> &nbsp;
                <Typography component="span" className={classes.coloredTet}>
                  Pickup Point (Origin)
                </Typography>
              </Box>
            </Grid>
            {/* End of Grid Items      */}
            {/* Start of Grid items */}
            <Grid item xs={12} sm={4}>
              <Box mb={2}>
                <Typography className={classes.coloredTet}>
                  Destination
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Box className={classes.centerTextBox} mb={2}>
                <SendIcon className={classes.requestIcon} /> &nbsp;
                <Typography component="span" className={classes.coloredTet}>
                  APO Resettlement Area, Abuja, Nigeria
                </Typography>
              </Box>
            </Grid>
            {/* End of Grid Items      */}
            {/* Start of Grid items */}
            <Grid item xs={12} sm={4}>
              <Box mb={2}>
                <Typography className={classes.coloredTet}>
                  Vehicle Type
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Box className={classes.centerTextBox} mb={2}>
                <LocalShippingIcon className={classes.requestIcon} /> &nbsp;
                <Typography component="span" className={classes.coloredTet}>
                  Lorry
                </Typography>
              </Box>
            </Grid>
            {/* End of Grid Items      */}
            {/* Start of Grid items */}
            <Grid item xs={12} sm={4}>
              <Box mb={2}>
                <Typography className={classes.coloredTet}>
                  Pickup route
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Box className={classes.centerTextBox} mb={2}>
                <DateRangeRoundedIcon className={classes.requestIcon} /> &nbsp;
                <Typography component="span" className={classes.coloredTet}>
                  Jun 8, 2020
                </Typography>
              </Box>
            </Grid>
            {/* End of Grid Items      */}
            {/* Start of Grid items */}
            <Grid item xs={12} sm={4}>
              <Box mb={2}>
                <Typography className={classes.coloredTet}>
                  Destination
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Box className={classes.centerTextBox} mb={2}>
                <LocationOnRoundedIcon className={classes.requestIcon} /> &nbsp;
                <Typography component="span" className={classes.coloredTet}>
                  Lagos Island 01
                </Typography>
              </Box>
            </Grid>
            {/* End of Grid Items      */}
            {/* Start of Grid items */}
            <Grid item xs={12} sm={4}>
              <Box mb={2}>
                <Typography className={classes.coloredTet}>
                  Customer's Name
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Box className={classes.centerTextBox} mb={2}>
                <PersonIcon className={classes.requestIcon} /> &nbsp;
                <Typography component="span" className={classes.coloredTet}>
                  Chukwudiebere
                </Typography>
              </Box>
            </Grid>
            {/* End of Grid Items      */}

            {/* Start of Grid items */}
            <Grid item xs={12} sm={4}>
              <Box mb={2}>
                <Typography className={classes.coloredTet}>
                  Request Description
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Box className={classes.centerTextBox} mb={2}>
                <ReceiptIcon className={classes.requestIcon} /> &nbsp;
                <Typography component="span" className={classes.coloredTet}>
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and preaiseing pan was...
                </Typography>
              </Box>
            </Grid>
            {/* End of Grid Items      */}
            {/* Start of Grid items */}
            <Grid item xs={12} sm={4}>
              <Box mb={2}>
                <Typography className={classes.coloredTet}>
                  Pickup Date
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Box className={classes.centerTextBox} mb={2}>
                <DateRangeRoundedIcon className={classes.requestIcon} /> &nbsp;
                <Typography component="span" className={classes.coloredTet}>
                  26-02-2021
                </Typography>
              </Box>
            </Grid>
            {/* End of Grid Items      */}

            {/* Start of Grid items */}
            <Grid item xs={12} sm={4}>
              <Box mb={2}>
                <Typography className={classes.coloredTet}>
                  Driver's Fee
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Box className={classes.centerTextBox} mb={2}>
                <LocalAtmIcon className={classes.requestIcon} /> &nbsp;
                <Typography component="span" className={classes.coloredTet}>
                  N26000
                </Typography>
              </Box>
            </Grid>
            {/* End of Grid Items      */}
            {/* Start of Grid items */}
            <Grid item xs={12} sm={4}>
              <Box mb={2}>
                <Typography className={classes.coloredTet}>
                  Wehaul Commision
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Box className={classes.centerTextBox} mb={2}>
                <LocalAtmIcon className={classes.requestIcon} /> &nbsp;
                <Typography component="span" className={classes.coloredTet}>
                  N5200
                </Typography>
              </Box>
            </Grid>
            {/* End of Grid Items      */}
          </Grid>
        </Box>
      </Paper>
      {/*  End of Request Information section   */}

      {/* Beginging of Driver Request section */}
      <Paper className={classes.paper}>
        <Box p={3}>
          <Typography variant="h6" gutterBottom className={classes.formTitle}>
            Driver Requests
          </Typography>
        </Box>
        <Divider />
        <Box p={3}>
          <Grid container spacing={2}>
            <Grid container item xs={12} sm={4}>
              <Grid item xs={12} sm={12}>
                {" "}
                <Box mb={2}>
                  <Typography className={classes.coloredTet}>
                    Driver ID
                  </Typography>
                </Box>{" "}
              </Grid>
              <Grid item xs={12} sm={12}>
                {" "}
                <Box mb={2}>
                  <Typography className={classes.coloredTet}>
                    Driver Name
                  </Typography>
                </Box>{" "}
              </Grid>
              <Grid item xs={12} sm={12}>
                {" "}
                <Box mb={2}>
                  <Typography className={classes.coloredTet}>
                    Phone Number
                  </Typography>
                </Box>{" "}
              </Grid>
              <Grid item xs={12} sm={12}>
                {" "}
                <Box mb={2}>
                  <Typography className={classes.coloredTet}>Email</Typography>
                </Box>{" "}
              </Grid>
            </Grid>

            <Grid container item xs={12} sm={4}>
              <Grid item xs={12} sm={12}>
                {" "}
                <Box className={classes.centerTextBox} mb={2}>
                  <ContactMailRoundedIcon className={classes.requestIcon} />{" "}
                  &nbsp;
                  <Typography component="span" className={classes.coloredTet}>
                    JBCIEIY9TY2_M6V-KSHBTA
                  </Typography>
                </Box>{" "}
              </Grid>
              <Grid item xs={12} sm={12}>
                {" "}
                <Box className={classes.centerTextBox} mb={2}>
                  <PersonIcon className={classes.requestIcon} /> &nbsp;
                  <Typography component="span" className={classes.coloredTet}>
                    Driver User
                  </Typography>
                </Box>{" "}
              </Grid>
              <Grid item xs={12} sm={12}>
                {" "}
                <Box className={classes.centerTextBox} mb={2}>
                  <PhoneAndroidIcon className={classes.requestIcon} /> &nbsp;
                  <Typography component="span" className={classes.coloredTet}>
                    080323244221
                  </Typography>
                </Box>{" "}
              </Grid>
              <Grid item xs={12} sm={12}>
                {" "}
                <Box className={classes.centerTextBox} mb={2}>
                  <EmailIcon className={classes.requestIcon} /> &nbsp;
                  <Typography component="span" className={classes.coloredTet}>
                    driver@Wehaul.ng
                  </Typography>
                </Box>{" "}
              </Grid>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box className={classes.submitBtnBox} mt={2} mb={2}>
                <Button
                  type="submit"
                  size="large"
                  className={classes.submitButton}
                  variant="contained"
                >
                  Confirm
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </div>
  );
}

export default InputWithIcon;
