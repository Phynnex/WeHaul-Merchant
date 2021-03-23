import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import PhoneIcon from "@material-ui/icons/Phone";
import SendIcon from "@material-ui/icons/Send";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import DomainOutlinedIcon from "@material-ui/icons/DomainOutlined";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  formPaperStyle: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(3),
  },
  submitButton: {
    width: "200px",
    background: theme.palette.primary.main,
    color: theme.palette.grey[50],
  },
  labelStyle: {
    paddingBottom: theme.spacing(1),
  },
}));

function InputWithIcon() {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.formPaperStyle}>
        <Typography variant="h6" gutterBottom className={classes.formTitle}>
          Personal Information{" "}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <InputLabel className={classes.labelStyle} htmlFor="fullName">
              Full Name
            </InputLabel>
            <TextField
              variant="outlined"
              fullWidth
              name="fullName"
              id="fullName"
              placeholder="Robin Jenkins"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel className={classes.labelStyle} htmlFor="phoneNumber">
              Phone Number
            </InputLabel>
            <TextField
              variant="outlined"
              fullWidth
              name="phoneNumber"
              id="phoneNumber"
              // label="TextField"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel className={classes.labelStyle} htmlFor="email">
              Email Address
            </InputLabel>
            <TextField
              variant="outlined"
              fullWidth
              name="email"
              id="email"
              // label="TextField"
              InputProps={{
                startAdornment: <InputAdornment position="start" />,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel className={classes.labelStyle} htmlFor="address">
              Address
            </InputLabel>
            <TextField
              variant="outlined"
              fullWidth
              name="address"
              id="address"
              // label="TextField"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SendIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
      </Paper>
      <br />
      <Paper className={classes.formPaperStyle}>
        <Typography variant="h6" gutterBottom className={classes.formTitle}>
          Account Details
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <InputLabel className={classes.labelStyle} htmlFor="accountName">
              Account Name
            </InputLabel>
            <TextField
              variant="outlined"
              fullWidth
              name="accountName"
              id="accountName"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel className={classes.labelStyle} htmlFor="accountNumber">
              Account Number
            </InputLabel>
            <TextField
              variant="outlined"
              fullWidth
              name="accountNumber"
              id="accountNumber"
              // label="TextField"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <InputLabel className={classes.labelStyle} htmlFor="email">
              Bank Name
            </InputLabel>
            <TextField
              variant="outlined"
              fullWidth
              name="email"
              id="email"
              // label="TextField"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    {" "}
                    <DomainOutlinedIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel className={classes.labelStyle} htmlFor="accountType">
              Account Type
            </InputLabel>
            <TextField
              variant="outlined"
              fullWidth
              name="accountType"
              id="accountType"
              // label="TextField"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountBalanceIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
        <Box mt={2} mb={2}>
          <Button
            type="submit"
            size="large"
            className={classes.submitButton}
            variant="contained"
          >
            Ok
          </Button>
        </Box>
      </Paper>
    </div>
  );
}

export default InputWithIcon;
