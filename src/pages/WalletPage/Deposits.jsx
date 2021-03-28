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
import axios from "axios";
import Paper from "@material-ui/core/Paper";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

// import { usersApiEndPoint } from "../../utils/api";
// import Preloader from "../../components/Preloader/Preloader";
// import MetaDecorator from "../../components/MetaDecorator/MetaDecorator";
// import { setSnackbar } from "../../redux/actions/uiActions";
const headCells = [
  {
    id: "S/N",
    label: "S/N",
  },

  {
    id: "Amount",
    label: "Amount",
  },
  {
    id: "Date",
    label: "Date",
  },
  {
    id: "Transaction Type",
    label: "Transaction Type",
  },
  {
    id: "Source",
    label: "Source",
  },
  {
    id: "Payment Reference",
    label: "Payment Reference",
  },
];

const tableCells = [
  {
    SerialNumber: "1",
    Amount: "25,000",
    Date: "12-02-2021",
    TransactionType: "Trip request payment",
    Source: "Wallet",
    ReferencePayment: "jM7JomW9zfoBsCG",
  },
  {
    SerialNumber: "2",
    Amount: "25,000",
    Date: "12-02-2021",
    TransactionType: "Trip request payment",
    Source: "Wallet",
    ReferencePayment: "jM7JomW9zfoBsCG",
  },
  {
    SerialNumber: "3",
    Amount: "25,000",
    Date: "12-02-2021",
    TransactionType: "Trip request payment",
    Source: "Wallet",
    ReferencePayment: "jM7JomW9zfoBsCG",
  },
  {
    SerialNumber: "4",
    Amount: "25,000",
    Date: "12-02-2021",
    TransactionType: "Trip request payment",
    Source: "Wallet",
    ReferencePayment: "jM7JomW9zfoBsCG",
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
  userImageStyle: {
    borderRadius: "50%",
    width: "35px",
    height: "35px",
    objectFit: "cover",
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
  tableTitle: {
    color: "#113E82",
    fontWeight: "600",
    marginBottom: "20px",
    marginLeft: "20px",
  },
}));

export default function AllRequests() {
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
      <Typography variant="h6" gutterBottom className={classes.tableTitle}>
        Recent Transactions
      </Typography>
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
              {tableCells.map((item) => {
                return (
                  <TableRow
                    className={classes.textColor}
                    hover
                    tabIndex={-1}
                    // key={index}
                  >
                    <TableCell className={classes.textColor} align="left">
                      {item.SerialNumber}
                    </TableCell>
                    <TableCell className={classes.textColor} align="left">
                      {item.Amount}
                    </TableCell>
                    <TableCell className={classes.textColor} align="left">
                      {/* userImageStyle */}
                      {/* {row.lastname} */}
                      {item.Date}
                    </TableCell>
                    <TableCell className={classes.textColor} align="left">
                      {/* {row.phone ? row.phone : "Not Provided"} */}
                      {item.TransactionType}
                    </TableCell>
                    <TableCell className={classes.textColor} align="left">
                      {/* {row.phone ? row.phone : "Not Provided"} */}
                      {item.Source}
                    </TableCell>
                    <TableCell className={classes.textColor} align="left">
                      {/* {row.phone ? row.phone : "Not Provided"} */}
                      {item.ReferencePayment}
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
