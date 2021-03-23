import React from 'react';
import { MuiThemeProvider } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
// import jwtDecode from "jwt-decode";
import Routes from "./Routes";
import theme from "./utils/theme";
import CustomizedSnackbars from "./components/Snackbar/Snackbar";
// import store from "./redux/store";
// import {
//   setUser,
//   logOutUser,
//   setAuthorizationHeader,
// } from "./redux/actions/userActions";

function App() {
  // if (localStorage.WEHAUL_ADMIN_TOKEN) {
  //   setAuthorizationHeader(localStorage.WEHAUL_AUTH_TOKEN);
  //   try {
  //     const decodedToken = jwtDecode(localStorage.WEHAUL_AUTH_TOKEN);

  //     if (decodedToken !== undefined) {
  //       store.dispatch(setUser(decodedToken));

  //       if (decodedToken.exp < new Date().getTime() / 1000) {
  //         store.dispatch(logOutUser());
  //       }
  //     }
  //   } catch (error) {
  //     store.dispatch(logOutUser());
  //     console.log(error);
  //   }
  // }

  return(
    <>
      <CustomizedSnackbars />
      <CssBaseline />
      <MuiThemeProvider theme={theme}>
        <Routes />
      </MuiThemeProvider>
    </>
  );
}

export default App;

