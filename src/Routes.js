import { Switch, Route } from "react-router-dom";
import { Home, Pizza } from "@Pages";

function Routes() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/pizza/:id' component={Pizza} />
    </Switch>
  );
}

export default Routes;
