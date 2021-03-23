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
import Grid from '@material-ui/core/Grid';
import CustomPageNav from '../../components/CustomPageNav';
import CustomCard from '../../components/CustomCard/CustomCard';
import totalTrip from '../../assets/TotalIcon.svg';
import canceledIcon from '../../assets/CancelIcon.svg';
import checkedIcon from '../../assets/CheckedIcon.svg';
import tripIcon from '../../assets/Trip_Icon.svg';
import { Divider, Typography } from '@material-ui/core';
import { FiEdit } from 'react-icons/fi';
import { GoTrashcan } from 'react-icons/go';

const StyledTableCell = withStyles((theme) => ({
  head: {
    color: theme.palette.primary.main,
  },
  body: {
    fontSize: 14,
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
    paddingLeft: 70,
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
  },
  deleButton: {
    padding: theme.spacing(0),
    backgroundColor: '#F2F2F2',
    borderRadius: 3,
    // padding: -10,
    height: '35px',
    width: '35px',
  },
  editButton: {
    margin: theme.spacing(3),
    padding: theme.spacing(0),
    borderRadius: 3,
    height: '35px',
    width: '35px',
    backgroundColor: theme.palette.primary.main,
  },
  actionLabel: {
    paddingLeft: 300,
  },
  paddingRow: {
    padding: theme.spacing(9),
  },
  rowBigger: {
    padding: theme.spacing(0, 9),
  },
}));

export default function RoutesPage() {
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
        <Grid item xs={12} sm={6} md={3}>
          <CustomCard title="Busy Drivers" count={28} icon={tripIcon} />
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
      <br />
      <CustomPageNav />
      <Typography className={classes.availableText} variant="h4" component="h2">
        Available Routes
      </Typography>
      <Divider />
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized">
          <TableHead>
            <TableRow className={classes.rowBigger}>
              <StyledTableCell className={classes.nameField}>
                Name
              </StyledTableCell>
              <StyledTableCell
                className={classes.descriptionField}
                align="left"
              >
                Description
              </StyledTableCell>
              <StyledTableCell align="right" className={classes.actionLabel}>
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
                  {row.name}
                </StyledTableCell>
                <StyledTableCell
                  className={classes.descriptionContent}
                  align="left"
                >
                  {row.description}
                </StyledTableCell>
                <StyledTableCell
                  className={classes.manipulationBtns}
                  align="right"
                >
                  <IconButton
                    className={classes.editButton}
                    variant="contained"
                    color="primary"
                  >
                    <FiEdit size="20" color="#ffffff" />
                  </IconButton>
                  &nbsp;&nbsp;
                  <IconButton className={classes.deleButton}>
                    <GoTrashcan size="20" color="#828282" />
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
