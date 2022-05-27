import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router";

function ProtectedRoute({ auth, component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (auth) return <Component {...props} />;
        return (
          <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
        );
      }}
    />
  );
}
const mapStateToProps = (state) => {
  return {
    auth: state.searchReducer.login,
  };
};

export default connect(mapStateToProps)(ProtectedRoute);
