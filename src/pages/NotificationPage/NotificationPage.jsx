import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { FiCheck } from "react-icons/fi";
import { AiOutlineExclamation } from "react-icons/ai";
import { IoInformationOutline } from "react-icons/io5";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import ReusableTopNav from "../../components/TopNavWithHomeLabel";

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.typography.button,
    backgroundColor: "#F6FAFF",
    border: "1px solid #40D192",
    marginTop: "20px",
    width: "100%",
    textTransform: "initial",
    color: "#113E82",
    fontSize: "18px",
    padding: "8px 0 8px 22px",
  },
  paperStyle: {
    display: "flex",
    marginTop: "20px",
    boxShadow: "0px 18px 36px #0000000D",
  },
  successIcon: {
    borderRadius: "50%",
    background: "#40D192",
    color: "white",
    fontSize: "48px",
    margin: "24px",
  },
  infoIcon: {
    borderRadius: "50%",
    background: "#113E82",
    color: "white",
    fontSize: "48px",
    margin: "24px",
  },
  recommendIcon: {
    borderRadius: "50%",
    background: "#FFBB00",
    color: "white",
    margin: "24px",
    fontSize: "48px",
  },
  warningIcon: {
    borderRadius: "50%",
    background: "red",
    color: "white",
    fontSize: "48px",
    margin: "24px",
  },
  subtitle: {
    color: "#707070",
    fontSize: "18px",
    fontWeight: "bold",
  },
  text: {
    color: "#AEAEAE",
    fontSize: "16px",
  },
}));

export default function TripsPage() {
  const classes = useStyles();

  const notificationDetails = [
    {
      icon: <FiCheck className={classes.successIcon} />,
      subtitle: "Success",
      text:
        "But I must explain to you how all this mistaken idea of denouncing pleasure ….",
    },
    {
      icon: <IoInformationOutline className={classes.infoIcon} />,
      subtitle: "Info",
      text:
        "But I must explain to you how all this mistaken idea of denouncing pleasure ….",
    },
    {
      icon: <HiOutlineEmojiHappy className={classes.recommendIcon} />,
      subtitle: "Recomendation",
      text:
        "But I must explain to you how all this mistaken idea of denouncing pleasure ….",
    },
    {
      icon: <AiOutlineExclamation className={classes.warningIcon} />,
      subtitle: "Warning",
      text:
        "But I must explain to you how all this mistaken idea of denouncing pleasure ….",
    },
  ];

  return (
    <>
      <ReusableTopNav label="Notification" />
      <div className={classes.root}>{"You have 20 new notifications"}</div>
      {notificationDetails.map((item) => {
        return (
          <Paper elevation={3} className={classes.paperStyle}>
            <div style={{ display: "flex" }}>{item.icon}</div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "24px",
              }}
            >
              <Typography
                variant="subtitle2"
                gutterBottom
                className={classes.subtitle}
              >
                {item.subtitle}
              </Typography>
              <Typography variant="body2" gutterBottom className={classes.text}>
                {item.text}
              </Typography>
            </div>
          </Paper>
        );
      })}
    </>
  );
}
