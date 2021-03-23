import React, { Component } from "react";
import { connect } from "react-redux";
import { setSnackbar } from "../redux/actions/uiActions";

export const AuthenticateAdmin = (ProtectedComponent) => {
  class ProtectedRoute extends Component {
    componentDidMount() {
      if (!this.props.userData.isAuthenticated) {
        window.location.href = "/";
      }
    }

    componentDidUpdate(nextProps) {
      if (!nextProps.userData.isAuthenticated) {
        window.location.href = "/";
        this.props.setSnackbar(
          "Authentication Token expired, Login in again",
          "info"
        );
      }
    }
    render() {
      return <ProtectedComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return {
      userData: state.userData,
    };
  }
  const mapDispatchToProps = {
    setSnackbar: setSnackbar,
  };
  return connect(mapStateToProps, mapDispatchToProps)(ProtectedRoute);
};
