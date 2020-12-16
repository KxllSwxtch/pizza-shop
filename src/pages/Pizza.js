import {
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Image from "material-ui-image";
import { useSelector } from "react-redux";

const useStyles = makeStyles(() => ({
  root: {
    marginTop: 40,
  },
  name: {
    fontWeight: "bolder",
    marginTop: 10,
  },
  image: {
    borderRadius: 3,
  },
  ingredientsTitle: {
    marginBottom: 10,
  },
  ingredient: {
    fontStyle: "italic",
  },
  button: {
    marginTop: 40,
  },
}));

function Pizza() {
  const pizza = useSelector((state) => state.shop.pizza);
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid container>
        <Grid item md={5}>
          <Image
            draggable={false}
            disableSpinner
            aspectRatio={16 / 9}
            src={pizza.imageURL}
            className={classes.image}
            style={{ width: 500, height: 500, paddingTop: 0 }}
          />
          <Typography className={classes.name} variant="h3">
            {pizza.name}
          </Typography>
        </Grid>

        <Grid item>
          <Typography className={classes.ingredientsTitle} variant="h4">
            Ingredients
          </Typography>
          <ul>
            {pizza.ingredients.map((ingredient) => (
              <Typography
                key={ingredient}
                variant="body1"
                className={classes.ingredient}
              >
                - {ingredient}
              </Typography>
            ))}
          </ul>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Add to cart
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Pizza;
