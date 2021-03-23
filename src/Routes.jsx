import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Homepage from './pages/Homepage/Homepage';
import RoutesPage from './pages/RoutesPage/RoutesPage';
import AdminCustomer from './pages/CustomerPage/AdminCustomer';
import Request from './pages/Request/Request';
import LiveTracking from './pages/LiveTracking/LiveTracking';
import FinancePage from './pages/FinancePage/FinancePage';
import VehiclePage from './pages/Vehicles/Vehicles';
import TripsPage from './pages/TripsPage/TripsPage';
import ChatPage from './pages/ChatPage/ChatPage';
import AddNewEnterpriseForm from './pages/AddNewEnterpriseForm/AddNewEnterpriseForm';
import SettingsPage from './pages/SettingsPage/SettingsPage';
import EnterprisePage from './pages/EnterprisePage/EnterprisePage';
import MerchantPage from './pages/Merchant/Merchant';
import DriversPage from './pages/DriversPage/DriversPage';
import AddNewDriverForm from './pages/DriversPage/AddNewDriver';
import DriverProfileModal from './pages/DriversPage/DriverProfileModal';
import login from './pages/Login/login';
import SignupPage from './pages/SignupPage/Signup';
import UpdateDriverPage from './pages/DriversPage/UpdateDriverPage/UpdateDriverPage';

import RequestSearchPage from './pages/RequestSearchPage/RequestSearchPage';
function Routes() {
  return (
    <Router>
      <Header>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/driver" component={DriversPage} />
          <Route exact path="/customers" component={AdminCustomer} />
          <Route path="/merchant" component={MerchantPage} />
          <Route path="/enterprise" component={EnterprisePage} />
          <Route path="/request" component={Request} />
          <Route path="/live-tracking" component={LiveTracking} />
          <Route exact path="/settings" component={SettingsPage} />
          <Route exact path="/chat" component={ChatPage} />
          <Route exact path="/trips" component={TripsPage} />
          <Route exact path="/vehicles" component={VehiclePage} />
          <Route exact path="/routes" component={RoutesPage} />
          <Route exact path="/finance" component={FinancePage} />
          <Route path="/signup" component={SignupPage} />
          <Route
            exact
            path="/add-new-enterprise"
            component={AddNewEnterpriseForm}
          />
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
        </Switch>
      </Header>
    </Router>
  );
}

export default Routes;
