/* eslint-disable no-unused-vars */
import React from "react";
import { fade, withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

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

function createData(
  name,
  phone_number,
  trips_completed,
  vehicle_type,
  status,
  action
) {
  return { name, phone_number, trips_completed, vehicle_type, status, action };
}

const rows = [
  {
    image: <AccountCircleIcon />,
    action_image1: <BlockIcon />,
    name: "Quzeem Agbaje",
    phone_number: "34556656576",
    trips_completed: 23,
    vehicle_type: "lorry",
    action: <VisibilityIcon />,
  },
  {
    image: <AccountCircleIcon />,
    action_image1: <BlockIcon />,
    name: "Quzeem Agbaje",
    phone_number: "34556656576",
    trips_completed: 23,
    vehicle_type: "lorry",
    action: <VisibilityIcon />,
  },
  {
    image: <AccountCircleIcon />,
    action_image1: <BlockIcon />,
    name: "Quzeem Agbaje",
    phone_number: "34556656576",
    trips_completed: 23,
    vehicle_type: "lorry",
    action: <VisibilityIcon />,
  },
];


export default function CustomizedTables() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
    <br />
      <Paper component="form" className={classes.root}>
        <IconButton className={classes.iconButton} aria-label="menu">
          <HomeRoundedIcon />
        </IconButton>
        <Divider className={classes.divider} orientation="vertical" />
        <Typography className={classes.textLabel}>Driver</Typography>
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
          Add New Driver
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
              <StyledTableCell align="center">Trips Completed</StyledTableCell>
              <StyledTableCell align="center">Vehicle Type</StyledTableCell>
              <StyledTableCell align="center">Status</StyledTableCell>
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
                <StyledTableCell align="center">
                  {row.trips_completed}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.vehicle_type}
                </StyledTableCell>

                <StyledTableCell align="center">
                  <td>
                    <Button
                      className={classes.tableButton}
                      variant="contained"
                      color="primary"
                      size="small"
                      onClick={handleClickOpen}
                    >
                      Active
                    </Button>
                  </td>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <td>{row.action}</td>
                  <td>{row.action_image1}</td>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
