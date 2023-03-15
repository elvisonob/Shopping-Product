import React, { Fragment, useState, useContext } from 'react';
import FoodItem from './FoodItem/FoodItem';
import classes from './AvailableFood.module.css';
import Card from './../UI/Card';
import AddFoodManually from './AddFoodManually';
import ItemContext from '../../store/item-context';
import FoodItemFilter from './FoodItemFilter';

// const item1UseByDate = new Date(2023, 11, 4);
// const monthAndYear1 = `${item1UseByDate.toLocaleString('en-US', {
//   day: '2-digit',
// })}-${item1UseByDate.toLocaleString('en-US', {
//   month: 'short',
// })}-${item1UseByDate.getFullYear()}`;
// const item2UseByDate = new Date(2024, 9, 6);
// const monthAndYear2 = `${item2UseByDate.toLocaleString('en-US', {
//   day: '2-digit',
// })}-${item2UseByDate.toLocaleString('en-US', {
//   month: 'short',
// })}-${item2UseByDate.getFullYear()}`;
// const item3UseByDate = new Date(2025, 8, 7);
// const monthAndYear3 = `${item3UseByDate.toLocaleString('en-US', {
//   day: '2-digit',
// })}-${item3UseByDate.toLocaleString('en-US', {
//   month: 'short',
// })}-${item3UseByDate.getFullYear()}`;

const DUMMY_FOOD = [
  {
    id: 'm1',
    name: 'Chicken Legend',
    description: 'Finest chicken burger',
    expiryDate: new Date(2023, 4, 28).toDateString(),
  },
  {
    id: 'm2',
    name: 'Chilli Corne Carne',
    description: 'An awesome Dish!',
    expiryDate: new Date(2024, 5, 27).toDateString(),
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    expiryDate: new Date(2025, 8, 7).toDateString(),
  },
];

const AvailableFood = (props) => {
  const itemCtx = useContext(ItemContext);
  const [addFood, setAddFood] = useState(false);
  const [filteredYear, setFilteredYear] = useState('2023');
  const [foodLists, setAddToFoodList] = useState(DUMMY_FOOD);

  // const addItemManuallyHandler = (name, expiryDate, amount) => {
  //   itemCtx.addItem({
  //     id: props.id,
  //     name: name,
  //     amount: amount,
  //     expiryDate: expiryDate,
  //   });
  // };

  const addFoodItemManually = (enteredName, enteredDate) => {
    setAddToFoodList((previousList) => {
      return [
        {
          id: Math.random(),
          name: enteredName,
          description: Math.random(),
          expiryDate: enteredDate,
        },
        ...previousList,
      ];
    });

    // setAddToFoodArray((previousState) => {
    //   return {
    //     ...previousState,
    //     name: enteredFoodName,
    //     expiryDate: enteredDate.toDateString(),
    //   };
    // });
  };

  const openAddFoodForm = () => {
    setAddFood(true);
  };

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const foodList = foodLists.map((food) => (
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
        {addFood && (
          <AddFoodManually id={props.id} onAddFoodName={addFoodItemManually} />
        )}
        <Card>
          <FoodItemFilter
            selected={filteredYear}
            onChangeFilter={filterChangeHandler}
          />
          <ul>{foodList}</ul>
        </Card>
      </section>
    </Fragment>
  );
};

export default AvailableFood;
