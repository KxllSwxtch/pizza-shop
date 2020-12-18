import Grid from '@material-ui/core/Grid/Grid';
import withAlert from '@Hocs/withAlert';
import { useSelector } from 'react-redux';
import PizzaListItem from './PIzzaListItem';

function PizzaList({ openAlert }) {
  const pizzaList = useSelector((state) => state.shop.pizzaList) || [];

  return (
    <Grid
      container
      spacing={5}
      alignItems="center"
      component="ul"
      justify="center"
      style={{ marginTop: 40, marginBottom: 40 }}
    >
      {pizzaList.map((data) => (
        <Grid item key={data.id}>
          <PizzaListItem data={data} openAlert={openAlert} />
        </Grid>
      ))}
    </Grid>
  );
}

export default withAlert(PizzaList);
