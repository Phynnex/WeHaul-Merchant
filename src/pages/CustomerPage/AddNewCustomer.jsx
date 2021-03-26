import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Box, Typography } from '@material-ui/core';

import { AiOutlineUserAdd } from "react-icons/ai";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // borderRadiusTopLeft: 10,
  },
  PaperForm: {
    borderRadius: "30px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  FormContent: {
    padding: theme.spacing(2, 6),
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.grey[50],
  },
  formHeader: {
    padding: theme.spacing(1, 8),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "#F2F7FF",
  },
  userIcon: {
    fontSize: "80px",
    color: "#40D192",
  },
  divider: {
    backgroundColor: "#8AADDC",
    height: "2px",
  },
  titleText: {
    color: theme.palette.primary.main,
    fontWeight: "600",
    fontSize: "24px",
    width: "150px",
  },
  labelText: {
    color: theme.palette.primary.main,
    fontWeight: "300",
    marginTop: "0.4rem",
  },
  inputStyles: {
    backgroundColor: "#F0F0F0",
    marginBottom: "0.3rem",
    borderColor: "#8AADDC",
    height: "30px",
  },

  submitBtn: {
    width: "100%",
    height: "3.5rem",
    fontWeight: "600",
    fontSize: "1.2rem",
    marginTop: "1rem",
    textTransform: "capitalize",
    backgroundColor: "#40D192",
    color: "#FFFFFF",
    transition: "all 1s",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
  },
}));

export default function AddNewCustomerForm() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.PaperForm}>
        <div className={classes.formHeader}>
          <Typography className={classes.titleText} variant="h4">
            Add New Customer
          </Typography>
          <AiOutlineUserAdd className={classes.userIcon} />
        </div>
        <Divider className={classes.divider} />
        <div className={classes.FormContent}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography className={classes.labelText}>Full Name</Typography>
              <TextField
                type="text"
                className={classes.inputStyles}
                error={false}
                id="outlined-error-helper-text"
                helperText=""
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Typography className={classes.labelText}>
                Email Address
              </Typography>
              <TextField
                className={classes.inputStyles}
                type="email"
                error={false}
                id="outlined-error-helper-text"
                helperText=""
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Typography className={classes.labelText}>
                Phone Number
              </Typography>
              <TextField
                className={classes.inputStyles}
                type="number"
                error={false}
                id="outlined-error-helper-text"
                helperText=""
                variant="outlined"
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <Typography className={classes.labelText}>
                Drop Off Address
              </Typography>
              <TextField
                className={classes.inputStyles}
                type="number"
                error={false}
                id="outlined-error-helper-text"
                helperText=""
                variant="outlined"
                fullWidth
              />
            </Grid>
          </Grid>
          <Box mt={2}>
            <Button className={classes.submitBtn} variant="contained">
              Add Customer
            </Button>
          </Box>
        </div>
      </Paper>
    </div>
  );
}
