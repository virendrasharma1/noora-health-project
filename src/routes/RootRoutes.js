import React from "react";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import LoginScreen from "../pages/LoginPage";
import AddSalePage from "../pages/AddSalePage";
import SalesListPage from "../pages/SalesListPage";

const AuthRoutes = () => (
    <Switch>
        <Route path="/login">
            <LoginScreen/>
        </Route>
        <Redirect from="/" to="/login"/>
    </Switch>
);

const ProtectedRoutes = () => (
    <div>
        <Route path="/transaction">
            <AddSalePage/>
        </Route>
        <Route path="/transactions">
            <SalesListPage/>
        </Route>
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

    componentDidMount() {
    }

    render() {
        return <Router><ProtectedRoutes/></Router>;
    }
}

// export default RootRoutes;
export default RootRoutes;
