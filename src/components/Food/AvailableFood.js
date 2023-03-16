import React, { Fragment, useState, useContext } from 'react';
import FoodItem from './FoodItem/FoodItem';
import classes from './AvailableFood.module.css';
import Card from './../UI/Card';
import AddFoodManually from './AddFoodManually';
import FoodItemFilter from './FoodItemFilter';

const DUMMY_FOOD = [
  {
    id: 'm1',
    name: 'Chicken Legend',
    expiryDate: new Date(2023, 4, 28).getFullYear(),
  },
  {
    id: 'm2',
    name: 'Chilli Corne Carne',
    expiryDate: new Date(2024, 5, 27).getFullYear(),
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    expiryDate: new Date(2025, 8, 7).getFullYear(),
  },
];

const AvailableFood = (props) => {
  const [addFood, setAddFood] = useState(false);
  const [filteredYear, setFilteredYear] = useState('2023');
  const [foodLists, setAddToFoodList] = useState(DUMMY_FOOD);

  const addFoodItemManually = (enteredName, enteredDate) => {
    setAddToFoodList((previousList) => {
      return [
        {
          id: Math.random(),
          name: enteredName,
          expiryDate: enteredDate,
        },
        ...previousList,
      ];
    });
  };

  const openAddFoodForm = () => {
    setAddFood(true);
  };

  const closeAddFoodForm = () => {
    setAddFood(false);
  };

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredList = foodLists.filter(
    (useDate) => useDate.expiryDate.toString() === filteredYear
  );

  const foodList = filteredList.map((food) => (
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
        <button className={classes.buttonPress} onClick={openAddFoodForm}>
          Add a Product Manually
        </button>
        {addFood && (
          <AddFoodManually
            id={props.id}
            onAddFoodName={addFoodItemManually}
            onClose={closeAddFoodForm}
          />
        )}
        <Card>
          <FoodItemFilter
            selected={filteredYear}
            onChangeFilter={filterChangeHandler}
          />
          {foodList.length === 0 ? (
            <p className={classes.paragraph}>
              No Food product found for the selected Year
            </p>
          ) : (
            <ul>{foodList}</ul>
          )}
        </Card>
      </section>
    </Fragment>
  );
};

export default AvailableFood;
