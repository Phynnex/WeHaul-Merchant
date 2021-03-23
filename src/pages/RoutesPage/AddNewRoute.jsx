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

export default function CreateRouteForm() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.PaperForm}>
        <div className={classes.formHeader}>
          <Typography className={classes.titleText} variant="h4">
            Create Route
          </Typography>
        </div>
        <Divider className={classes.divider} />
        <div className={classes.FormContent}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography className={classes.labelText}>Enter Area</Typography>
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
                Describe Area
              </Typography>
              <TextField
                className={classes.inputStyles}
                type="email"
                multiline
                rows={4}
                error={false}
                id="outlined-error-helper-text"
                helperText=""
                variant="outlined"
                fullWidth
              />
            </Grid>
          </Grid>
          <Box mt={2}>
            <Button
              className={classes.submitBtn}
              variant="contained"
              color="primary"
            >
              Add Route
            </Button>
          </Box>
        </div>
      </Paper>
    </div>
  );
}
