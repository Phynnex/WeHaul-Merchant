import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Box, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // borderRadiusTopLeft: 10,
  },
  PaperForm: {
    borderRadius: '30px',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    // borderRadius: 20,
    color: theme.palette.text.secondary,
  },
  FormContent: {
    padding: theme.spacing(2, 8),
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.grey[50],
  },
  formHeader: {
    padding: theme.spacing(2, 8),
    display: 'flex',
    height: '8rem',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: '#F2F7FF',
  },
  divider: {
    backgroundColor: '#D9D9D9',
    height: '2px',
  },
  titleText: {
    color: theme.palette.primary.main,
    fontWeight: '600',
  },
  labelText: {
    color: theme.palette.primary.main,
    fontWeight: '300',
    marginBottom: '0.6rem',
  },
  inputStyles: {
    backgroundColor: '#F0F0F0',
    marginBottom: '0.6rem',
    borderColor: theme.palette.primary.main,
  },

  submitBtn: {
    width: '100%',
    height: '3.5rem',
    fontWeight: '600',
    fontSize: '1.5rem',
    marginBottom: '.8rem',
    textTransform: 'capitalize',
  },
}));

export default function AddNewMerchantForm() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.PaperForm}>
        <div className={classes.formHeader}>
          <Typography className={classes.titleText} variant="h4">
            Add New Merchant
          </Typography>
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
            <Grid item xs={12} sm={6}>
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

            <Grid item xs={12} sm={6}>
              <Typography className={classes.labelText}>Gender</Typography>
              <TextField
                className={classes.inputStyles}
                id="outlined-select-currency-native"
                select
                helperText=""
                SelectProps={{
                  native: true,
                }}
                variant="outlined"
                fullWidth
              >
                <option value="" selected disabled>
                  Choose Gender
                </option>
                {[
                  { label: 'Female', value: 'female' },
                  { label: 'Male', value: 'male' },
                ].map((option, ind) => (
                  <option key={ind} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
          </Grid>
          <Box mt={2}>
            <Button
              className={classes.submitBtn}
              variant="contained"
              color="primary"
            >
              Add Merchant
            </Button>
          </Box>
        </div>
      </Paper>
    </div>
  );
}
