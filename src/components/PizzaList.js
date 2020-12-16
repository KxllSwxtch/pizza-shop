import Grid from "@material-ui/core/Grid/Grid";
import { useSelector } from "react-redux";
import PizzaListItem from "./PIzzaListItem";

function PizzaList() {
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
          <PizzaListItem data={data} />
        </Grid>
      ))}
    </Grid>
  );
}

export default PizzaList;
