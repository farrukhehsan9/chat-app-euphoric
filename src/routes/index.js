import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//Screens
import { Dashboard } from '../screens';

const Routers = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Dashboard} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
};

export default Routers;
