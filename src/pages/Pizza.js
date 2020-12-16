import { Container, makeStyles, Typography } from "@material-ui/core";
import Image from "material-ui-image";
import { useSelector } from "react-redux";

const useStyles = makeStyles(() => ({
  root: {
    marginTop: 40,
  },
  name: {
    fontWeight: "bolder",
  },
}));

function Pizza() {
  const pizza = useSelector((state) => state.shop.pizza);
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Image
        disableSpinner
        aspectRatio={16 / 9}
        src={pizza.imageURL}
        style={{ width: 300, height: 300 }}
        imageStyle={{ width: 300, height: 300 }}
      />
      <Typography className={classes.name} variant="h3">
        {pizza.name}
      </Typography>
    </Container>
  );
}

export default Pizza;
