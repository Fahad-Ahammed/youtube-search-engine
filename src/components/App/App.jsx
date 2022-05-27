import React from "react";
import HomePage from "../Home/HomePage";
import { Route, Switch } from "react-router-dom";
import LoginPage from "../LoginPage/LoginPage";
import ProtectedRoute from "../ProtectedRoute/protectedRoutes";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <ProtectedRoute exact path="/search" component={HomePage} />
      </Switch>
    </>
  );
}

export default App;
