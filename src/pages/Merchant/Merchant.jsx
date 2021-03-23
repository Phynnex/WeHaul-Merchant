import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { withStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import MerchantNav from './MerchantNav';
import CustomCard from '../../components/CustomCard/CustomCard';
import totalTrip from '../../assets/TotalIcon.svg';
import canceledIcon from '../../assets/CancelIcon.svg';
import checkedIcon from '../../assets/CheckedIcon.svg';
import enterpriseAvatar from '../../assets/enterprise_avatar.svg';
import { Divider } from '@material-ui/core';
import { MdDoNotDisturbAlt } from 'react-icons/md';
import { FaEye } from 'react-icons/fa';
import { GoTrashcan } from 'react-icons/go';
import AddRoutes from '../../components/AddRoutesDialog/AddRoutesDialog';
import MerchantDetailView from './MerchantDetailView';

const StyledTableCell = withStyles((theme) => ({
  head: {
    color: theme.palette.primary.main,
  },
  body: {
    fontSize: 14,
    marginBottom: 16,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: '#FBFCFF',
    },
  },
}))(TableRow);

function createData(name, description, id) {
  return { name, description, id };
}

const rows = [
  createData(
    'Lagos Island o1',
    'Lagos Island 01 Covers Obanlade, CMS, Ajah and the area aroundEpe axis',
    1,
  ),
  createData(
    'Lagos MainLand',
    'Lagos Island 01 Covers Obanlade, CMS, Ajah and the area around Epe axis',
    2,
  ),
  createData(
    'Lagos Island o2',
    'Lagos Island 01 Covers Obanlade, CMS, Ajah and the area aroun Epe axis',
    3,
  ),
];

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 700,
  },
  availableText: {
    margin: theme.spacing(5, 2, 0, 9),
    color: theme.palette.primary.main,
    fontWeight: '600',
  },
  nameField: {
    paddingLeft: 40,
    paddingBottom: 20,
    paddingTop: 20,
    color: theme.palette.primary.main,
    fontWeight: '600',
  },
  actionLabel: {
    paddingBottom: 20,
    paddingTop: 20,
    color: theme.palette.primary.main,
    fontWeight: '600',
  },
  descriptionField: {
    fontWeight: '600',
    color: theme.palette.primary.main,
  },
  descriptionContent: {
    fontWeight: '200',
    fontSize: '12px',
    alignItems: 'flex-start',
    color: theme.palette.primary.main,
    paddingBottom: 20,
    paddingTop: 20,
    padding: theme.spacing(0, 2),
  },
  deleButton: {
    padding: theme.spacing(0),
    backgroundColor: '#F2F2F2',
    borderRadius: 3,
    height: '35px',
    width: '35px',
  },
  editButton: {
    padding: theme.spacing(0),
    borderRadius: 3,
    height: '35px',
    width: '35px',
    backgroundColor: theme.palette.yellow.dark,
  },
  rowBigger: {
    padding: theme.spacing(0, 9),
  },
  banned: {
    padding: theme.spacing(0),

    borderRadius: 3,
    height: '35px',
    width: '35px',
    backgroundColor: theme.palette.yellow.light,
  },
  paddingRow: {
    padding: theme.spacing(0, 9),
  },
  avater: {
    height: 60,
    width: 60,
  },
}));

export default function MerchantPage() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <>
      <br />
      <br />
      <br />

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
      </Grid>
      <br />
      <br />
      <MerchantNav />
      <Divider />
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized">
          <TableHead>
            <TableRow className={classes.rowBigger}>
              <StyledTableCell className={classes.nameField}>
                Name
              </StyledTableCell>
              <StyledTableCell></StyledTableCell>
              <StyledTableCell className={classes.nameField} align="left">
                Phone Number
              </StyledTableCell>
              <StyledTableCell
                className={classes.descriptionField}
                align="left"
              >
                Email
              </StyledTableCell>
              <StyledTableCell
                className={classes.descriptionField}
                align="left"
              >
                Wallet
              </StyledTableCell>
              <StyledTableCell
                className={classes.descriptionField}
                align="left"
              >
                Tip Request
              </StyledTableCell>
              <StyledTableCell align="left" className={classes.actionLabel}>
                Action
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow className={classes.paddingRow} key={row.name}>
                <StyledTableCell
                  className={classes.nameField}
                  component="th"
                  scope="row"
                >
                  <img
                    className={classes.avater}
                    s
                    src={enterpriseAvatar}
                    alt="enterpriseAvatar"
                  />
                </StyledTableCell>
                <StyledTableCell
                  className={classes.descriptionContent}
                  align="left"
                >
                  Kozim Adgage
                </StyledTableCell>
                <StyledTableCell
                  className={classes.descriptionContent}
                  align="left"
                >
                  +234 9028232471
                </StyledTableCell>
                <StyledTableCell
                  className={classes.descriptionContent}
                  align="left"
                >
                  kozimadgaje@gmail.com
                </StyledTableCell>
                <StyledTableCell
                  className={classes.descriptionContent}
                  align="left"
                >
                  N23,000
                </StyledTableCell>
                <StyledTableCell
                  className={classes.descriptionContent}
                  align="left"
                >
                  08
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
      <AddRoutes open={open} handleClose={handleClose}>
        <MerchantDetailView />
      </AddRoutes>
    </>
  );
}
