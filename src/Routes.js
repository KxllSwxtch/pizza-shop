import { Switch, Route } from 'react-router-dom';
import { Home, Pizza, Cart } from '@Pages';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/pizza/:id" component={Pizza} />
      <Route path="/cart" component={Cart} />
    </Switch>
  );
}

export default Routes;
