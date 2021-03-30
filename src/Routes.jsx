import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Homepage from './pages/Homepage/Homepage';
import RoutesPage from './pages/RoutesPage/RoutesPage';
import Customers from "./pages/CustomerPage/Customers";
import Request from './pages/Request/Request';
import LiveTracking from "./pages/LiveTracking/LiveTracking";
import TripsPage from './pages/TripsPage/TripsPage';
import ChatPage from './pages/ChatPage/ChatPage';
import NotificationPage from "./pages/NotificationPage/NotificationPage";
import AddNewTrip from "./pages/Request/AddNewTrip";
import SettingsPage from "./pages/SettingsPage/SettingsPage";
import WalletPage from "./pages/WalletPage/WalletPage";

// import AddNewDriverForm from './pages/DriversPage/AddNewDriver';
// import login from './pages/Login/login';
// import SignupPage from './pages/SignupPage/Signup';
// import UpdateDriverPage from './pages/DriversPage/UpdateDriverPage/UpdateDriverPage';
// import RequestSearchPage from './pages/RequestSearchPage/RequestSearchPage';
import TripDetails from "./pages/TripsPage/TripDetails";

function Routes() {
  return (
    <Router>
      <Header>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/request" component={Request} />
          <Route path="/live-tracking" component={LiveTracking} />
          <Route exact path="/settings" component={SettingsPage} />
          <Route exact path="/chat" component={ChatPage} />
          <Route exact path="/trips" component={TripsPage} />
          <Route exact path="/notification" component={NotificationPage} />
          <Route exact path="/customers" component={Customers} />
          <Route exact path="/wallet" component={WalletPage} />
          <Route exact path="/add-new-trip" component={AddNewTrip} />
          

          {/* <Route path="/signup" component={SignupPage} /> */}
          {/* <Route exact path="/add-new-driver" component={AddNewDriverForm} /> */}
         
          {/* <Route
            exact
            path="/drivers/update-details/:driverName/:driverId"
            component={UpdateDriverPage}
          />
          <Route path="/login" component={login} /> */}
          {/* <Route path="/search" component={RequestSearchPage} /> */}
          <Route path="/trip-details" component={TripDetails} />
        </Switch>
      </Header>
    </Router>
  );
}

export default Routes;
