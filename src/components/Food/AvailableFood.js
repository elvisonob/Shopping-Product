import React, { Fragment, useState, useContext } from 'react';
import FoodItem from './FoodItem/FoodItem';
import classes from './AvailableFood.module.css';
import Card from './../UI/Card';
import AddFoodManually from './AddFoodManually';
import ItemContext from '../../store/item-context';

// const item1UseByDate = new Date(2023, 11);
// const monthAndYear1 = `${item1UseByDate.getMonth()}/${item1UseByDate.getFullYear()}`;
// const item2UseByDate = new Date(2023, 9);
// const monthAndYear2 = `${item2UseByDate.getMonth()}/${item2UseByDate.getFullYear()}`;
// const item3UseByDate = new Date(2023, 8);
// const monthAndYear3 = `${item3UseByDate.getMonth()}/${item3UseByDate.getFullYear()}`;

const DUMMY_FOOD = [
  {
    id: 'm1',
    name: 'Chicken Legend',
    description: 'Finest chicken burger',
    expiryDate: `Use by Nov 2023`,
  },
  {
    id: 'm2',
    name: 'Chilli Corne Carne',
    description: 'An awesome Dish!',
    expiryDate: `Use by Sep 2023`,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    expiryDate: `Use by Dec 2023`,
  },
];

const AvailableFood = (props) => {
  const itemCtx = useContext(ItemContext);
  const [addFood, setAddFood] = useState(false);

  const addItemManuallyHandler = (name, expiryDate, amount) => {
    itemCtx.addItem({
      id: props.id,
      name: name,
      amount: amount,
      expiryDate: expiryDate,
    });
  };

  const openAddFoodForm = () => {
    setAddFood(true);
  };
  const foodList = DUMMY_FOOD.map((food) => (
    <FoodItem
      key={food.id}
      id={food.id}
      name={food.name}
      description={food.description}
      expiryDate={food.expiryDate}
    />
  ));
  return (
    <Fragment>
      <section className={classes.meals}>
        <button className={classes.button} onClick={openAddFoodForm}>
          Add a Product Manually
        </button>
        {addFood && <AddFoodManually onAddFoodName={addItemManuallyHandler} />}
        <Card>
          <ul>{foodList}</ul>
        </Card>
      </section>
    </Fragment>
  );
};

export default AvailableFood;
