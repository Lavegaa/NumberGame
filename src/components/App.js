import React from "react";
import { Switch, Route } from "react-router-dom";
import { MainPage, NumberGamePage, NotFoundPage } from "pages";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route path='/numberGame' component={NumberGamePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
};

export default App;
