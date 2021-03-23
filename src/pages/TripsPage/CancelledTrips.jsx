import React, { useState, useEffect, useCallback } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
// import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import axios from "axios";
import Paper from "@material-ui/core/Paper";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FaEye } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
// import { usersApiEndPoint } from "../../utils/api";
// import Preloader from "../../components/Preloader/Preloader";
// import MetaDecorator from "../../components/MetaDecorator/MetaDecorator";
// import { setSnackbar } from "../../redux/actions/uiActions";
const headCells = [
  {
    id: "ID",
    label: "ID",
  },
  {
    id: "User",
    label: "User",
  },
  {
    id: "Origin",
    label: "Origin",
  },
  {
    id: "Destination",
    label: "Destination",
  },
  {
    id: "Processed by",
    label: "Processed by",
  },
  {
    id: "Status",
    label: "Status",
  },
  { id: "Vehicle Type", label: "Vehicle Type" },
  { id: "Pickup Date", label: "Pickup Date" },
  { id: "Amount", label: "Amount" },
  {
    id: "Action",
    label: "Action",
  },
];

function EnhancedTableHead() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            className={classes.tableHeaderText}
            key={headCell.id}
            align="left"
            padding="default"
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(0),
    width: "100%",
  },
  capitalize: {
    textTransform: "capitalize",
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  title: {
    fontWeight: 400,
    flex: "1 1 100%",
    textAlign: "center",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  formRoot: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    maxWidth: 400,
    margin: "10px auto",
  },

  table: {
    minWidth: 750,
  },
  categoryStyle: {
    textTransform: "capitalize",
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
  userImageStyle: {
    borderRadius: "50%",
    width: "35px",
    height: "35px",
    objectFit: "cover",
  },
  statusCancelledTrips: {
    padding: theme.spacing(1, 1),
    width: "100px",
    display: "flex",
    justifyContent: "center",
    borderRadius: "5%",
    background: theme.palette.secondary.main,
    color: "white",
  },
  textColor: {
    color: theme.palette.primary.main,
    fontFamily: "Montserrat",
    fontWeight: "500",
  },
  tableHeaderText: {
    color: theme.palette.primary.main,
    fontFamily: "Montserrat",
    fontWeight: "bold",
  },
  sendButton: {
    padding: theme.spacing(2, 1),
    backgroundColor: theme.palette.primary.main,
    borderRadius: 3,
    // padding: -10,
    height: 16,
    width: "40px",
  },
  editButton: {
    padding: theme.spacing(2, 1),
    borderRadius: 3,
    height: 16,
    width: "40px",
    backgroundColor: theme.palette.yellow.main,
  },
  actionContainer: {
    display: "flex",
    flexDirection: "column",
  },
}));

export default function CancelledTrips() {
  const classes = useStyles();
  const theme = useTheme();
  //   const [loading, setLoading] = useState(true);
  //   const [data, setData] = useState({});
  const [allUsers, setAllUsers] = useState([]);
  //   const [savingsId, setSavingsId] = useState("");
  const [isFetching, setIsFetching] = useState(false);
  //   const [pageNumber, setPageNumber] = useState(0);
  const history = useHistory();
  const dispatch = useDispatch();

  const limit = 100;

  //   const handleSearchProduct = () => {
  //   if(!savingsId) return dispatch(setSnackbar("Search Value cannot be empty", "error"));

  //     history.push(`search-users/q/${savingsId}`)
  //     // axios
  //     //   .post(`${ordersApiEndPoint}/search`, { productId: productId })
  //     //   .then((res) => {
  //     //     setSearchOrders(res.data.orders);
  //     //     setIsSearchOrderAvailable(true);
  //     //   })
  //     //   .catch((err) => console.log("errr", err));
  //   };
  //   const getMembers = useCallback(() => {
  //     setIsFetching(true);
  //     axios
  //       .get(`${usersApiEndPoint}/?pageNumber=${pageNumber}&limit=${limit}`)
  //       .then((res) => {
  //         setData(res.data.data);
  //         setAllUsers(res.data.data.data);
  //         setLoading(false);
  //         setIsFetching(false);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }, [pageNumber]);

  //   useEffect(() => {
  //     getMembers();
  //   }, [pageNumber, getMembers]);

  //   const handleChangePage = (event, newPage) => {
  //     setPageNumber(newPage);
  //     setIsFetching(true);
  //     getMembers();
  //   };

  //   return loading ? (
  //     <Preloader />
  //   ) : allUsers.length < 1 ? (

  //     <div className={classes.root}>
  //       <Container>

  //         <Box m={6}>
  //           <Typography variant="h4">
  //             Sorry there are currently no users registered...
  //           </Typography>
  //         </Box>
  //       </Container>
  //     </div>
  //   ) :

  return (
    <div className={classes.root}>
      <TableContainer>
        {isFetching ? (
          <Typography variant="body2"> Fetching</Typography>
        ) : (
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            aria-label="enhanced table"
            size="medium"
          >
            <EnhancedTableHead classes={classes} />
            <TableBody>
              {[...new Array(4)].map((dev, index) => {
                return (
                  <TableRow
                    className={classes.textColor}
                    hover
                    tabIndex={-1}
                    key={index}
                  >
                    <TableCell className={classes.textColor} align="left">
                      bgoGuWJtrjiSTR8LjwoA
                    </TableCell>
                    <TableCell className={classes.textColor}>
                      {/* {row.image && (
                          <img
                            src={row.image}
                            alt="user"
                            className={classes.userImageStyle}
                          />
                        )} */}
                      {/* {!row.image && ( */}
                      Eniola Roland
                      {/* )} */}
                    </TableCell>
                    <TableCell className={classes.textColor} align="left">
                      Ajah Market Lagos Lekki, Nigeria
                    </TableCell>
                    <TableCell className={classes.textColor} align="left">
                      {/* userImageStyle */}
                      {/* {row.lastname} */}
                      Ikeja City Mall, Obafemi Awolowo Way, Ikeja Nigeria
                    </TableCell>
                    <TableCell className={classes.textColor} align="left">
                      {/* userImageStyle */}
                      {/* {row.lastname} */}
                      Eniola Roland
                    </TableCell>

                    <TableCell className={classes.textColor}>
                      <Box className={classes.statusCancelledTrips}>
                        <Typography variant="caption">Cancelled</Typography>
                      </Box>
                    </TableCell>
                    <TableCell className={classes.textColor}>
                      {/* {row.phone ? row.phone : "Not Provided"} */}
                      Lorry
                    </TableCell>
                    <TableCell className={classes.textColor}>
                      {/* {row.phone ? row.phone : "Not Provided"} */}
                      Aug 1, 2021
                    </TableCell>
                    <TableCell className={classes.textColor}>
                      {/* {row.phone ? row.phone : "Not Provided"} */}
                      41836.00
                    </TableCell>
                    <TableCell align="left">
                      <Box className={classes.actionContainer}>
                        <IconButton
                          className={classes.editButton}
                          variant="contained"
                          color="primary"
                        >
                          <FaEye size="32" color="#FFFFFF" />
                        </IconButton>
                        &nbsp;&nbsp;
                        <IconButton className={classes.sendButton}>
                          <FaTelegramPlane size="30" color="#FFFFFF" />
                        </IconButton>
                      </Box>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        )}
      </TableContainer>
      {/* <TablePagination
            rowsPerPageOptions={[]}
            component="div"
            count={data.totalCount}
            rowsPerPage={data.rowsPerPage}
            page={pageNumber}
            onChangePage={handleChangePage}
          /> */}
    </div>
  );
}
