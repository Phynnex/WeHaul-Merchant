/* eslint-disable no-unused-vars */
import React from "react";
import {
  makeStyles,
  useTheme,
  fade,
  withStyles,
} from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import CustomCard from "../../components/CustomCard/CustomCard";
import totalTrip from "../../assets/TotalIcon.svg";
import canceledIcon from "../../assets/CancelIcon.svg";
import checkedIcon from "../../assets/CheckedIcon.svg";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import AddIcon from "@material-ui/icons/Add";
import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { GoTrashcan } from "react-icons/go";
import avatarSvg from "../../assets/enterprise_avatar.svg";
import CustomersNav from "./CustomersNav";
import AddRoutes from "../../components/AddRoutesDialog/AddRoutesDialog";
import CustomerProfile from "./CustomerProfileModal";

import completeIcon from "../../assets/CompleteIcon.svg";
import ActiveIcon from "../../assets/ActiveIcon.svg";

const useStyles = makeStyles((theme) => ({
  manipulationBtns: {
    display: "flex",
  },
  editButton: {
    padding: "2px 6px",
    borderRadius: 4,
    backgroundColor: "#9AFFD3",
  },
  banned: {
    padding: "2px 6px",
    borderRadius: 4,
    backgroundColor: "#FFDFDB",
  },
  deleButton: {
    padding: "2px 6px",
    borderRadius: 4,
    backgroundColor: "#EAF2FC",
  },
}));

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: fade(theme.palette.primary.main, 0.15),
    color: "#113E82",
    fontSize: 20,
    fontWeight: "bold",
  },
  body: {
    fontSize: 16,
    color: "#444444",
    fontWeight: "400",
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, phone_number, email, drop_off_address, action) {
  return { name, phone_number, email, drop_off_address, action };
}

const rows = [
  {
    name: "Quzeem Agbaje",
    phone_number: "+23470245672345",
    email: "quzeemagbaje@gmail.com",
    drop_off_address: "Ikeja City Mall, Obafemi Awolowo Way, Ikeja",
  },
  {
    name: "Quzeem Agbaje",
    phone_number: "+23470245672345",
    email: "quzeemagbaje@gmail.com",
    drop_off_address: "Ikeja City Mall, Obafemi Awolowo Way, Ikeja",
  },
  {
    name: "Quzeem Agbaje",
    phone_number: "+23470245672345",
    email: "quzeemagbaje@gmail.com",
    drop_off_address: "Ikeja City Mall, Obafemi Awolowo Way, Ikeja",
  },
  {
    name: "Quzeem Agbaje",
    phone_number: "+23470245672345",
    email: "quzeemagbaje@gmail.com",
    drop_off_address: "Ikeja City Mall, Obafemi Awolowo Way, Ikeja",
  },
  {
    name: "Quzeem Agbaje",
    phone_number: "+23470245672345",
    email: "quzeemagbaje@gmail.com",
    drop_off_address: "Ikeja City Mall, Obafemi Awolowo Way, Ikeja",
  },
];

export default function MerchantCustomer() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <>
      <br />
      <br />
      <br />
      <div className={classes.grid}>
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
              count={22}
              icon={totalTrip}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <CustomCard
              cardBackground="#40D192"
              title="Completed Trips"
              count={48}
              icon={completeIcon}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <CustomCard title="Active Trips" count={28} icon={ActiveIcon} />
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
        <br />
        <br />
        <CustomersNav />
        <br />
        <br />
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="left">Name</StyledTableCell>
                <StyledTableCell align="left"></StyledTableCell>
                <StyledTableCell align="left">Phone number</StyledTableCell>
                <StyledTableCell align="left">Email</StyledTableCell>
                <StyledTableCell align="left" width="260px">
                  Drop off Address
                </StyledTableCell>
                <StyledTableCell align="left">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    <img
                      src={avatarSvg}
                      alt="Customer"
                      width="50px"
                      height="50px"
                    />
                  </StyledTableCell>
                  <StyledTableCell>{row.name}</StyledTableCell>
                  <StyledTableCell align="left">
                    {row.phone_number}
                  </StyledTableCell>
                  <StyledTableCell align="left">{row.email}</StyledTableCell>
                  <StyledTableCell align="left">
                    {row.drop_off_address}
                  </StyledTableCell>
                  <StyledTableCell
                    className={classes.manipulationBtns}
                    align="left"
                  >
                    <IconButton
                      className={classes.editButton}
                      variant="contained"
                      color="primary"
                      onClick={handleClickOpen}
                    >
                      <FaEye size="20" color="#113E82" />
                    </IconButton>{" "}
                    <AddRoutes open={open} handleClose={handleClose}>
                      <CustomerProfile />
                    </AddRoutes>
                    &nbsp;&nbsp;
                    <IconButton className={classes.deleButton}>
                      <GoTrashcan size="20" color="#113E82" />
                    </IconButton>
                    &nbsp;&nbsp;
                    <IconButton className={classes.banned}>
                      <MdDoNotDisturbAlt size="20" color="#F3402B" />
                    </IconButton>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}

