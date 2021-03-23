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
import DeleteIcon from "@material-ui/icons/Delete";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import useStyles from "../../components/Table/styles";

import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import AddIcon from "@material-ui/icons/Add";
import VisibilityIcon from "@material-ui/icons/Visibility";
import BlockIcon from "@material-ui/icons/Block";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: fade(theme.palette.primary.main, 0.15),
    color: theme.palette.primary.main,
    fontSize: 18,
    fontWeight: "medium",
  },
  body: {
    fontSize: 16,
    color: theme.palette.primary.main,
    fontWeight: "bold",
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, phone_number, email, wallet, trip_request, action) {
  return { name, phone_number, email, wallet, trip_request, action };
}

const rows = [
  {
    image: <AccountCircleIcon />,
    name: "Quzeem Agbaje",
    phone_number: "34556656576",
    email: "quzeemagbaje@gmail.com",
    wallet: 23000,
    trip_request: 8,
    action: (
      <div>
        {" "}
        <VisibilityIcon /> <DeleteIcon /> <BlockIcon />{" "}
      </div>
    ),
  },
  {
    image: <AccountCircleIcon />,
    name: "Quzeem Agbaje",
    phone_number: "34556656576",
    email: "quzeemagbaje@gmail.com",
    wallet: 23000,
    trip_request: 8,
    action: (
      <div>
        {" "}
        <VisibilityIcon /> <DeleteIcon /> <BlockIcon />{" "}
      </div>
    ),
  },
  {
    image: <AccountCircleIcon />,
    name: "Quzeem Agbaje",
    phone_number: "34556656576",
    email: "quzeemagbaje@gmail.com",
    wallet: 23000,
    trip_request: 8,
    action: (
      <div>
        {" "}
        <VisibilityIcon /> <DeleteIcon /> <BlockIcon />{" "}
      </div>
    ),
  },
];

export default function Enterprise() {
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
    <div className={classes.grid}>
      <Grid
        container
        spacing={matches ? 2 : 1}
        justify="left"
        // alignItems="center"
      >
        <Grid item xs={12} sm={6} md={3}>
          <CustomCard
            cardBackground="#FFBB00"
            title="Total Users"
            count={22}
            icon={totalTrip}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CustomCard
            cardBackground="#40D192"
            title="Total Transaction"
            count={48}
            icon={checkedIcon}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CustomCard
            cardBackground="#F3402B"
            title="Banned Enterprise"
            count={8}
            icon={canceledIcon}
          />
        </Grid>
      </Grid>
      <br />
      <br />
      <Paper component="form" className={classes.paper}>
        <IconButton className={classes.iconButton} aria-label="menu">
          <HomeRoundedIcon />
        </IconButton>
        <Divider className={classes.divider} orientation="vertical" />
        <Typography className={classes.textLabel}>Enterprise</Typography>
        <Box className={classes.routeCount}>22</Box>

        <Box className={classes.searchContent}>
          <InputBase
            className={classes.input}
            placeholder="Search Google Maps"
            inputProps={{ "aria-label": "search google maps" }}
          />

          <IconButton
            type="submit"
            className={classes.iconButton}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
        </Box>
        <Button
          className={classes.export}
          variant="contained"
          color="primary"
          size="small"
          onClick={handleClickOpen}
        >
          Export
        </Button>
        <div className={classes.spacer} />
        <Button
          className={classes.addRoutes}
          variant="contained"
          color="primary"
          size="small"
          startIcon={<AddIcon />}
          onClick={handleClickOpen}
        >
          Add Enterprise
        </Button>
        {/* <AddRoutes open={open} handleClose={handleClose} /> */}
      </Paper>
      <br />
      <br />
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Name</StyledTableCell>
              <StyledTableCell align="center">Phone number</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Wallet</StyledTableCell>
              <StyledTableCell align="center">Trip Requested</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  <td>{row.image}</td>
                  <td>{row.name}</td>
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.phone_number}
                </StyledTableCell>
                <StyledTableCell align="center">{row.email}</StyledTableCell>
                <StyledTableCell align="center">{row.wallet}</StyledTableCell>

                <StyledTableCell align="center">
                  {row.trip_request}
                </StyledTableCell>
                <StyledTableCell align="center">{row.action}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
