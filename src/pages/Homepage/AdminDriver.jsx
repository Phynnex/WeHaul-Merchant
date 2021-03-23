import React from 'react';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import CustomCard from "../../components/CustomCard/CustomCard";
import totalTrip from "../../assets/TotalIcon.svg";
import canceledIcon from "../../assets/CancelIcon.svg";
import busyIcon from "../../assets/BusyIcon.svg";
import checkedIcon from "../../assets/CheckedIcon.svg";
import CustomizedTables from '../../components/Table/Tables';
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
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
  logoStyle: {
    width: "100%",
    objectFit: "cover",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    // backgroundColor: theme.palette.purple.main,
  },
  helpLink: {
    textDecoration: "none",
    // color: theme.palette.blue.main,
  },
}));

export default function AdminDriver(){
    const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
return (
    <div className={classes.root}>
        <Grid
        container
        spacing={matches ? 3 : 1}
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12} sm={6} md={3}>
          <CustomCard
            cardBackground="#FFBB00"
            title="Total Drivers"
            count={22}
            icon={totalTrip}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CustomCard
            cardBackground="#40D192"
            title="Available Drivers"
            count={48}
            icon={checkedIcon}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CustomCard title="Busy Drivers" count={28} icon={busyIcon} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CustomCard
            cardBackground="#F3402B"
            title="Banned Drivers"
            count={8}
            icon={canceledIcon}
          />
        </Grid>
      </Grid>
      <br />
      <Grid>
        <CustomizedTables />
      </Grid>
    </div>
)
}
