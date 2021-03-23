/* eslint-disable no-unused-vars */
import React from 'react';
import {
  makeStyles,
  useTheme,
  fade,
  withStyles,
} from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import CustomCard from '../../components/CustomCard/CustomCard';
import totalTrip from '../../assets/TotalIcon.svg';
import canceledIcon from '../../assets/CancelIcon.svg';
import checkedIcon from '../../assets/CheckedIcon.svg';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import AddIcon from '@material-ui/icons/Add';
import { MdDoNotDisturbAlt } from 'react-icons/md';
import { FaEye } from 'react-icons/fa';
import { GoTrashcan } from 'react-icons/go';
import avatarSvg from '../../assets/enterprise_avatar.svg';
import CustomersNav from './CustomersNav';

const useStyles = makeStyles((theme) => ({
  editButton: {
    padding: theme.spacing(0),
    borderRadius: 3,
    height: '35px',
    width: '35px',
    backgroundColor: theme.palette.yellow.dark,
  },
  banned: {
    padding: theme.spacing(0),

    borderRadius: 3,
    height: '35px',
    width: '35px',
    backgroundColor: theme.palette.yellow.light,
  },
  deleButton: {
    padding: theme.spacing(0),
    backgroundColor: '#C5C1C1',
    borderRadius: 3,
    height: '35px',
    width: '35px',
  },
}));

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: fade(theme.palette.primary.main, 0.15),
    color: theme.palette.primary.main,
    fontSize: 18,
    fontWeight: 'medium',
  },
  body: {
    fontSize: 16,
    color: theme.palette.primary.main,
    fontWeight: '400',
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, phone_number, email, wallet, trip_request, action) {
  return { name, phone_number, email, wallet, trip_request, action };
}

const rows = [
  {
    name: 'Quzeem Agbaje',
    phone_number: '34556656576',
    email: 'quzeemagbaje@gmail.com',
    wallet: 23,
    trip_request: 8,

    // <VisibilityIcon /> <DeleteIcon /> <BlockIcon />
  },
  {
    image: <AccountCircleIcon />,
    name: 'Quzeem Agbaje',
    phone_number: '34556656576',
    email: 'quzeemagbaje@gmail.com',
    wallet: 23,
    trip_request: 8,
  },
  {
    name: 'Quzeem Agbaje',
    phone_number: '34556656576',
    email: 'quzeemagbaje@gmail.com',
    wallet: 23,
    trip_request: 8,
  },
];

export default function AdminCustomer() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <>
      <br />
      <br />
      <br />
      <div className={classes.grid}>
        <Grid
          container
          spacing={matches ? 2 : 1}
          justify="left"
          // alignItems="left"
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
              title="Banned Customers"
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
                <StyledTableCell align="left">Wallet</StyledTableCell>
                <StyledTableCell align="left">Trip Requested</StyledTableCell>
                <StyledTableCell align="left">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    <img src={avatarSvg} alt="Customer" />
                  </StyledTableCell>
                  <StyledTableCell>{row.name}</StyledTableCell>
                  <StyledTableCell align="left">
                    {row.phone_number}
                  </StyledTableCell>
                  <StyledTableCell align="left">{row.email}</StyledTableCell>
                  <StyledTableCell align="left">{row.wallet}</StyledTableCell>

                  <StyledTableCell align="left">
                    {row.trip_request}
                  </StyledTableCell>
                  <StyledTableCell
                    className={classes.manipulationBtns}
                    align="left"
                  >
                    <IconButton
                      className={classes.editButton}
                      variant="contained"
                      color="primary"
                    >
                      <FaEye size="20" color="#000000" />
                    </IconButton>
                    &nbsp;&nbsp;
                    <IconButton className={classes.deleButton}>
                      <GoTrashcan size="20" color="#828282" />
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
