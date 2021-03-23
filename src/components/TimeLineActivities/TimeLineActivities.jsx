/* eslint-disable no-unused-vars */
import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  timeLineRoot: {
    padding: theme.spacing(2),
  },
  timeLineOveride: {
    overflow: "hidden",
  },

  timeLineItemOveride: {
    overflow: "hidden",
    width: "200%",
    transform: "translateX(-50%)",
  },
  HeaderText: {
    marginTop: "-6px",
    color: theme.palette.primary.main,
    fontWeight: "700",
  },
  subText: {
    fontWeight: "550",
    // color: theme.palette.grey[400],
  },
  smailText: {
    color: theme.palette.grey[400],
  },
}));
export default function TimeLineActivities() {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div className={classes.timeLineRoot}>
      <Timeline
        classes={{
          root: classes.timeLineOveride,
        }}
        className={classes.timeLineRoot}
      >
        {[...new Array(5)].map((item, index) => (
          <TimelineItem
            classes={{
              root: classes.timeLineItemOveride,
            }}
            key={index}
          >
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography
                className={classes.HeaderText}
                variant="body1"
                component="h1"
              >
                Dec 8, 2021
              </Typography>
              <Typography color="textSecondary" className={classes.subText}>
                Richard Igbiriki updated the trip
              </Typography>
              <Typography color="textSecondary" className={classes.subText}>
                status to: completed
              </Typography>
              <Typography color="textSecondary">
                Trip: Movement of goods from Egbeda to mile 2
              </Typography>
              <Typography color="textSecondary">Egbeda to mile 2</Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}
