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
import AddNewDriverForm from './pages/DriversPage/AddNewDriver';
import DriverProfileModal from './pages/DriversPage/DriverProfileModal';
import login from './pages/Login/login';
import SignupPage from './pages/SignupPage/Signup';
import UpdateDriverPage from './pages/DriversPage/UpdateDriverPage/UpdateDriverPage';

import RequestSearchPage from './pages/RequestSearchPage/RequestSearchPage';
import RequestForm from "./pages/Request/FormTwo";

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
          <Route path="/signup" component={SignupPage} />
          <Route exact path="/add-new-trip" component={AddNewTrip} />
          <Route exact path="/add-new-driver" component={AddNewDriverForm} />
          <Route
            exact
            path="/drivers/driver-details"
            component={DriverProfileModal}
          />
          <Route
            exact
            path="/drivers/update-details/:driverName/:driverId"
            component={UpdateDriverPage}
          />
          <Route path="/login" component={login} />
          <Route path="/search" component={RequestSearchPage} />
          <Route path="/new-request" component={RequestForm} />
        </Switch>
      </Header>
    </Router>
  );
}

export default Routes;
