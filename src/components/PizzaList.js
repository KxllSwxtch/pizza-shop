import React from 'react';
import Grid from '@material-ui/core/Grid/Grid';
import withAlert from '@Hocs/withAlert';
import { useSelector } from 'react-redux';
import PizzaListItem from './PIzzaListItem';

const PizzaList = React.memo(function PizzaList({ openAlert }) {
  const pizzaList = useSelector((state) => state.shop.pizzaList);
  const searchValue = useSelector((state) => state.shop.searchValue);
  const filteredPizzaList = pizzaList.filter((item) =>
    item.name.toLowerCase().match(searchValue, 'gmi'),
  );

  return (
    <Grid
      container
      spacing={5}
      alignItems="center"
      component="ul"
      justify="center"
      style={{ marginTop: 40, marginBottom: 40 }}
    >
      {filteredPizzaList.map((data) => (
        <Grid item key={data.id}>
          <PizzaListItem data={data} openAlert={openAlert} />
        </Grid>
      ))}
    </Grid>
  );
});

export default withAlert(PizzaList);
