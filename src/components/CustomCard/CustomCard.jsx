import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import NumberFormat from 'react-number-format';

const useStyles = makeStyles((theme) => ({
  dashboardCard: {
    minWidth: '250px',

    display: 'block',
    backgroundColor: (props) =>
      props.cardBackground ? props.cardBackground : theme.palette.primary.main,
    color: theme.palette.grey[50],
    border: 'none',
  },
  dashboardCardBox: {
    marginBottom: theme.spacing(1),
  },
  logoStyle: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },

  title: {
    fontWeight: 600,
  },
  iconBox: {
    display: 'flex',
    height: '80px',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  iconStyle: {
    width: '55px',
    height: '55px',
  },
}));

function CustomCard(props) {
  const { title, count, icon } = props;
  const classes = useStyles(props);

  return (
    <Card className={classes.dashboardCard} variant="outlined">
      <CardContent>
        <Box className={classes.dashboardCardBox}>
          <Typography variant="body1" component="span">
            {title}
          </Typography>
        </Box>
        <Box className={classes.iconBox}>
          <NumberFormat
            value={count}
            displayType={'text'}
            thousandSeparator={true}
            renderText={(value) => (
              <Typography
                className={classes.title}
                variant="h4"
                align="center"
                component="h2"
              >
                {value}
              </Typography>
            )}
          />
          {icon && <img className={classes.iconStyle} src={icon} alt={title} />}
        </Box>
      </CardContent>
    </Card>
  );
}

export default CustomCard;
