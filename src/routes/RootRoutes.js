import React from "react";
import { HashRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import LoginScreen from "../pages/LoginPage";

const AuthRoutes = () => (
  <Switch>
    <Route path="/login">
      <LoginScreen />
    </Route>
    <Redirect from="/" to="/login" />
  </Switch>
);

const ProtectedRoutes = () => (
  <div>
    pp
  </div>
);

class RootRoutes extends React.Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token");
    this.state = {
      isLoading: true,
      isLoggedIn: token,
    };
  }

  componentDidMount() {}

  render() {
    return <Router><AuthRoutes/></Router>;
  }
}

// export default RootRoutes;
export default RootRoutes;
