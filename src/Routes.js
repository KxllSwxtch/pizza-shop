import { Switch, Route } from 'react-router-dom';
import { Home, Pizza, Cart, AuthCallback } from '@Pages';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/pizza/:id" component={Pizza} />
      <Route path="/cart" component={Cart} />
      <Route path="/auth0_callback" component={AuthCallback} />
    </Switch>
  );
}

export default Routes;
