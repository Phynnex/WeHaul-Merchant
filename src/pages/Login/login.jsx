import React from "react";
import {
  Box,
  Container,
  CssBaseline,
  Typography,
  Button,
  InputAdornment,
  IconButton,
  FormControl,
  InputLabel,
  OutlinedInput,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";
import LoginImg from "../../assets/loginimg.png";
import GoogleLogo from "../../assets/google.png";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    padding: theme.spacing(3),
    margin: theme.spacing(2),
    alignContent: "center",
  },
}));
const handleSubmit = async (e) => {
  e.preventDefault();
};

export default function LoginPage() {
  const classes = useStyles();
  // const theme = useTheme();
  //   const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const [values, setValues] = React.useState({
    email: "",
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Container
      style={{
        height: "100vh",
        width: "100vw",
        marginLeft: "0",
        padding: "10px",
      }}
    >
      <CssBaseline />
      <Typography
        component="div"
        style={{
          height: "100vh",
          display: "flex",
          width: "100vw",
        }}
      >
        <Box className={classes.imgBox}>
          <img src={LoginImg} alt="" />
        </Box>
        <form
          style={{
            height: "100vh",
            width: "100vw",
            marginLeft: "70px",
          }}
          noValidate
          autoComplete="off"
          className={`${classes.root} ${classes.form}`}
          onSubmit={handleSubmit}
        >
          <h1
            style={{
              fontSize: "37px",
              fontWeight: "light",
              marginLeft: "5rem",
              marginBottom: "3rem",
              color: "#113E82",
              opacity: "1",
            }}
          >
            Sign in
          </h1>
          <div>
            <FormControl
            //   className={clsx(classes.margin, classes.textField)}
              variant="outlined"
              style={{ width: "60%", marginLeft: "5rem", marginBottom: "3rem" }}
            >
              <InputLabel
                placeholder="Email"
                htmlFor="outlined-adornment-password"
              >
                Email
              </InputLabel>
              <OutlinedInput
                type="email"
                Label="Email"
                value={values.email}
                onChange={handleChange("password")}
                startAdornment={
                  <InputAdornment position="start">
                    <IconButton>
                      <EmailIcon />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>

            <FormControl
            //   className={clsx(classes.margin, classes.textField)}
              variant="outlined"
              style={{ width: "60%", marginLeft: "5rem", marginBottom: "3rem" }}
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                startAdornment={
                  <InputAdornment position="start">
                    <IconButton>
                      <LockIcon />
                    </IconButton>
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={100}
              />
            </FormControl>
            <Button
              className={classes.buttonSubmit}
              variant="contained"
              style={{
                width: "60%",
                marginLeft: "5rem",
                marginBottom: "2rem",
                padding: "1rem",
              }}
              color="primary"
              size="large"
              type="submit"
            >
              Sign in
            </Button>
            <div
              style={{
                width: "60%",
                marginLeft: "5rem",
                marginBottom: "1rem",
                padding: "1rem",
              }}
            >
              <span>
                <a href="./forgotpassword">Forgot password?</a>
              </span>
            </div>
            <Button
              className={classes.buttonSubmit}
              variant="contained"
              color="#0000000A"
              style={{
                width: "60%",
                marginLeft: "5rem",
                marginBottom: "5rem",
                padding: ".5rem",
              }}
              size="large"
              type="submit"
            >
              <div style={{marginRight: "4rem"}}>
                <img src={GoogleLogo} alt="" width="36px" />
              </div>
              Sign in with google
            </Button>
            <div>
              <span
                style={{
                  width: "60%",
                  marginLeft: "5rem",
                  marginBottom: "3rem",
                }}
              >
                Don't have an account yet?{" "}
                <a
                  href="./signup"
                  style={{ color: "#66daa7", fontWeight: "bold" }}
                >
                  Sign Up{" "}
                </a>
              </span>
            </div>
          </div>
        </form>
      </Typography>
    </Container>
  );
}
