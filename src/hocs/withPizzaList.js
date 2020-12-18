import React from 'react';
import { useSelector } from 'react-redux';

function withPizzaList(WrappedComponent) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return (props) => {
    const pizzaList = useSelector((state) => state.shop.pizzaList);
    const [currentPizzaList, setPizzaList] = React.useState(pizzaList);

    const handleSearch = (searchValue) => {
      const filteredPizzaList = currentPizzaList.filter((item) =>
        item.name.includes(searchValue),
      );
      console.log(searchValue, filteredPizzaList);
      setPizzaList(filteredPizzaList);
    };

    return (
      <WrappedComponent
        pizzaList={currentPizzaList}
        handleSearch={handleSearch}
        {...props}
      />
    );
  };
}

export default withPizzaList;
