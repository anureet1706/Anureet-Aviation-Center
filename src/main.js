import React from "react";
import { Switch, Route } from "react-router";
import { ROUTE } from "./routes";
import Login from "./login";
import Dashboard from "./dashboard";

const Main = () => {
    return <Switch>
        <Route exact={true} path={ROUTE.INDEX} component={Login} />
        <Route exact={true} path={ROUTE.DASHBOARD} component={Dashboard} />
    </Switch>;
};

export default Main;
