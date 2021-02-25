import React from "react";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import LoginScreen from "../pages/LoginPage";
import AddSalePage from "../pages/AddSalePage";
import SalesListPage from "../pages/SalesListPage";
import { checkLocalStorageData } from "../helpers";

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
        <Switch>
            <Route path="/transaction">
                <AddSalePage/>
            </Route>
            <Route path="/transactions">
                <SalesListPage/>
            </Route>
            <Redirect from="/" to="/transactions" />
        </Switch>
    </div>

);

class RootRoutes extends React.Component {
    constructor(props) {
        super(props);
        const token = checkLocalStorageData();
        this.state = {
            isLoading: true,
            isLoggedIn: token,
        };
    }

    componentDidMount() {
    }

    render() {
        const { isLoggedIn } = this.state;
        return <Router>{isLoggedIn ? <ProtectedRoutes /> : <AuthRoutes />}</Router>;
    }
}

// export default RootRoutes;
export default RootRoutes;
