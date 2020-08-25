import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";


import Home from "./components/Home";
import NotFound from "./components/NotFound";
import User from "./components/User";

export default function Routes() {
  return (
    <Switch>
        <Route exact path="/login">
            <Login />
        </Route>
      <Route exact path="/">
        <Home />
      </Route>
      {/* Finally, catch all unmatched routes */}
      <Route>
        <NotFound />
      </Route>
        <Route exact path="/user">
            <User/>
        </Route>
    </Switch>
  );
}
