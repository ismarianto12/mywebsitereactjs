import React, { useState } from "react";
import Detailpage from "detailpage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Prompt
} from "react-router-dom";

export function route() {
  return (
    <Switch>
      <Route path="/detail/12">
        <Detailpage />
      </Route>
    </Switch>
  );
}
