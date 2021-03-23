import React from 'react';
import { Link } from 'react-router-dom';
import signup from '../../assets/signup.png';
import DividerWithText from '../../components/Divider';


import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

import { HiOutlineUserGroup } from 'react-icons/hi';
import { IoStorefrontOutline } from 'react-icons/io5';
import { BsBuilding } from 'react-icons/bs';
import { GrUserPolice } from 'react-icons/gr';

import { FaRegEnvelope } from 'react-icons/fa';
import { HiOutlineLockClosed } from 'react-icons/hi';
import { FiLock } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';



const userType = [
  {
    value: 'Sign up as Customer',
    image: <HiOutlineUserGroup />,
  },
  {
    value: 'Sign up as Merchant',
    image: <IoStorefrontOutline />,
  },
  {
    value: 'Sign up as Enterprise',
    image: <BsBuilding />,
  },
  {
    value: 'Sign up as Driver',
    image: <GrUserPolice />,
  },
];

const countries = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: '30px',
    padding: '10px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 'auto',
    marginBottom: '10px',
  },
  container: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      justifyContent:'center',
    },
  },
  signupImage: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  headerText: {
    margin: '18px 0',
    color: '#113E82',
    fontWeight: 'bold',
    textAlign: 'left',
  },
  select: {
    display: 'block !important',
    '& .MuiTextField-root': {
      width: '100%',
    },
  },
  margin: {
    margin: '32px 0',
  },
  textField: {
    display: 'block !important',
  },
  fieldSize: {
    width: '100%',
    height: '44px',
  },
  placeholder: { fontSize: '16px', paddingLeft: '8px' },
  icons: {
    fontSize: '25px',
    color: 'grey',
    marginRight: '10px',
  },
  label: {
    // marginLeft: '8px',
    textTransform: 'initial',
    fontSize: '18px',
    background: '#113E82',
    padding: '4px 100px',
    borderRadius: '4px',
    color: '#FBFCFF',
    width:'100%',
    '&:hover': {
      backgroundColor: '#40D192',
      color: '#FFF',
    },
  },
  btnGoogle: {
    fontSize: '18px',
    background: 'none',
    textTransform: 'initial',
    padding: '0px 25px',
    borderRadius: '4px',
    display: 'flex',
    justifyContent: 'space-between',
    color: 'grey',
    width: '100%',
  },
  footerText: {
    display: 'flex',
    justifyContent: 'center',
    color: '#949292',
    marginTop: '40px',
  },
  linkText: {
    color: '#949292',
    marginLeft: '8px',
    fontWeight: 'bold',
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const [user, setUser] = React.useState('');
  const [country, setCountry] = React.useState('EUR');
  const [values, setValues] = React.useState({
    name: '',
    password: '',
    Email: '',
    showPassword: false,
  });

  const handleChangeCountry = (event) => {
    setCountry(event.target.value);
  };

  const handleChange = (event) => {
    setUser(event.target.value);
  };

  const handleChange2 = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Paper component="form" className={classes.paper}>
        <Container className={classes.container}>
          <div className={classes.signupImage}>
            <img src={signup} alt="wehaul" width="90%" height="100%" />
          </div>
          <div align="center" style={{ width: '50%' }}>
            <div style={{ width: '70%' }}>
              <form className={classes.select} noValidate autoComplete="off">
                <Typography
                  className={classes.headerText}
                  variant="h5"
                  gutterBottom
                >
                  Sign Up
                </Typography>
                <div>
                  <TextField
                    id="outlined-select"
                    placeholder="Placeholder"
                    select
                    value={user}
                    onChange={handleChange}
                    variant="outlined"
                    size="small"
                  >
                    {userType.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.image} {option.value}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
                <div className={classes.root}>
                  <FormControl
                    className={clsx(classes.margin, classes.textField)}
                    variant="outlined"
                  >
                    <OutlinedInput
                      className={clsx(classes.fieldSize, classes.placeholder)}
                      id="outlined-adornment"
                      placeholder="Full Name"
                      value={values.name}
                      onChange={handleChange2('name')}
                      startAdornment={
                        <InputAdornment position="start">
                          <PersonOutlineIcon className={classes.icons} />
                        </InputAdornment>
                      }
                      labelWidth={0}
                    />
                  </FormControl>
                  <FormControl
                    className={clsx(classes.margin, classes.textField)}
                    variant="outlined"
                  >
                    <OutlinedInput
                      className={clsx(classes.fieldSize, classes.placeholder)}
                      id="outlined-adornment"
                      placeholder="Email"
                      value={values.email}
                      onChange={handleChange2('email')}
                      startAdornment={
                        <InputAdornment position="start">
                          <FaRegEnvelope className={classes.icons} />
                        </InputAdornment>
                      }
                      labelWidth={0}
                    />
                  </FormControl>
                  <div style={{ display: 'flex' }}>
                    <TextField
                      id="outlined-select-currency-native"
                      select
                      value={country}
                      onChange={handleChangeCountry}
                      SelectProps={{
                        native: true,
                      }}
                      variant="outlined"
                      style={{ width: '20%'         }}
                    >
                      {countries.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </TextField>
                    <TextField
                      id="outlined-number"
                      type="number"
                      placeholder="+234"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="outlined"
                      style={{ width: '80%'         }}
                    />
                  </div>
                  <FormControl
                    className={clsx(classes.margin, classes.textField)}
                    variant="outlined"
                  >
                    <OutlinedInput
                      className={clsx(classes.fieldSize, classes.placeholder)}
                      startAdornment={
                        <InputAdornment position="start">
                          <FiLock className={classes.icons} />
                        </InputAdornment>
                      }
                      id="outlined-adornment"
                      placeholder="Password"
                      type={values.showPassword ? 'text' : 'password'}
                      value={values.password}
                      onChange={handleChange2('password')}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {values.showPassword ? (
                              <Visibility className={classes.icons} />
                            ) : (
                              <VisibilityOff className={classes.icons} />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                      labelWidth={0}
                    />
                  </FormControl>
                  <FormControl
                    className={clsx(classes.margin, classes.textField)}
                    variant="outlined"
                  >
                    <OutlinedInput
                      className={clsx(classes.fieldSize, classes.placeholder)}
                      startAdornment={
                        <InputAdornment position="start">
                          <HiOutlineLockClosed className={classes.icons} />
                        </InputAdornment>
                      }
                      id="outlined-adornment"
                      placeholder="Re-enter Password"
                      type={values.showPassword ? 'text' : 'password'}
                      value={values.password}
                      onChange={handleChange2('password')}
                      labelWidth={0}
                    />
                  </FormControl>
                </div>
              </form>
              <div>
                <Button
                  classes={{
                    label: classes.label,
                  }}
                >
                  Sign up
                </Button>
                <DividerWithText>or</DividerWithText>
                <Button
                  variant="outlined"
                  startIcon={<FcGoogle size="25px" />}
                  classes={{
                    label: classes.btnGoogle,
                  }}
                >
                  Sign up with google
                </Button>
              </div>
              <div align="center" className={classes.footerText}>
                <Typography variant="body2" gutterBottom>
                  have an account yet?
                </Typography>
                <Link to="/" className={classes.linkText}>
                  Sign in
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Paper>
    </>
  );
}
