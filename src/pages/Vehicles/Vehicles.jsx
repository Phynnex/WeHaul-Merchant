import React, { useState } from 'react';
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
import Box from '@material-ui/core/Box';
import CustomCard from '../../components/CustomCard/CustomCard';
import totalTrip from '../../assets/TotalIcon.svg';
import canceledIcon from '../../assets/CancelIcon.svg';
import checkedIcon from '../../assets/CheckedIcon.svg';
import tripIcon from '../../assets/Trip_Icon.svg';
import { Divider, Typography } from '@material-ui/core';
import { FaEye } from 'react-icons/fa';
import { GoTrashcan } from 'react-icons/go';
import { FaShuttleVan } from 'react-icons/fa';
import VehoicleNav from './VehicleNav';

const headCells = [
  {
    id: 'Name',
    label: 'Name',
  },
  {
    id: 'Price/KM',
    label: 'Price/KM',
  },
  {
    id: 'Max Factor/KM',
    label: 'Max Factor/KM ',
  },
  {
    id: 'Commission Rate',
    label: 'Commission Rate',
  },
  {
    id: 'Description',
    label: 'Description',
  },

  {
    id: 'Action',
    label: 'Action',
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
  availableText: {
    margin: theme.spacing(5, 2, 0, 9),
    color: theme.palette.primary.main,
    fontWeight: '600',
  },
  nameField: {
    paddingLeft: 70,
    paddingBottom: 30,
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
    padding: theme.spacing(-2),
    backgroundColor: '#F2F2F2',
    borderRadius: 3,
    // padding: -10,
    height: 16,
    width: '35px',
  },
  editButton: {
    borderRadius: 3,
    height: 16,
    width: '35px',
    backgroundColor: theme.palette.primary.main,
  },
  actionLabel: {
    paddingLeft: 300,
  },
  capitalize: {
    textTransform: 'capitalize',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  title: {
    fontWeight: 400,
    flex: '1 1 100%',
    textAlign: 'center',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  formRoot: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    maxWidth: 400,
    margin: '10px auto',
  },

  table: {
    minWidth: 750,
  },
  categoryStyle: {
    textTransform: 'capitalize',
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  userImageStyle: {
    borderRadius: '50%',
    width: '35px',
    height: '35px',
    objectFit: 'cover',
  },
  statusBtn: {
    padding: theme.spacing(1, 4),
    borderRadius: '5%',
    background: theme.palette.green.main,
    color: 'white',
  },
  textColor: {
    color: theme.palette.primary.main,
    fontFamily: 'Montserrat',
    fontWeight: '500',
  },
  tableHeaderText: {
    color: theme.palette.primary.main,
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
  },
  deleButton: {
    padding: theme.spacing(-2),
    backgroundColor: '#F2F2F2',
    borderRadius: 3,
    // padding: -10,
    height: 16,
    width: '40px',
  },
  editButton: {
    borderRadius: 3,
    height: 16,
    width: '40px',
    backgroundColor: '#F2F2F2',
  },
  actionContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  IconContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  IconContainerText: {
    marginLeft: 15,
  },
}));

export default function VehiclePage() {
  const [isFetching, setIsFetching] = useState(false);
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
      <VehoicleNav />
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
                {[...new Array(5)].map((index) => {
                  return (
                    <TableRow
                      className={classes.textColor}
                      hover
                      tabIndex={-1}
                      key={index}
                    >
                      <TableCell className={classes.textColor} align="left">
                        <Box className={classes.IconContainer}>
                          <FaShuttleVan size="50" />
                          <Typography className={classes.IconContainerText}>
                            Van
                          </Typography>
                        </Box>
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
                        100 KM
                        {/* )} */}
                      </TableCell>
                      <TableCell className={classes.textColor} align="left">
                        1.5 KM
                      </TableCell>
                      <TableCell className={classes.textColor} align="left">
                        {/* userImageStyle */}
                        {/* {row.lastname} */}
                        26%
                      </TableCell>
                      <TableCell className={classes.textColor} align="left">
                        <Typography>This is a lorry</Typography>
                      </TableCell>

                      <TableCell className={classes.textColor}>
                        {/* {row.phone ? row.phone : "Not Provided"} */}
                        Lorry
                      </TableCell>
                      <TableCell align="left">
                        <Box className={classes.actionContainer}>
                          <IconButton className={classes.deleButton}>
                            <GoTrashcan size="30" color="#828282" />
                          </IconButton>
                          &nbsp;&nbsp;
                          <IconButton
                            className={classes.editButton}
                            variant="contained"
                            color="primary"
                          >
                            <FaEye size="32" color="#000" />
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
    </>
  );
}
