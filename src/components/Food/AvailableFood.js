import React from 'react';
import classes from './AvailableFood.module.css';

const date = new Date();

const DUMMY_FOOD = [
  {
    id: 'm1',
    name: 'Chicken Legend',
    description: 'Finest chicken burger',
    expiryDate: date,
  },
  {
    id: 'm2',
    name: 'Chilli Corne Carne',
    description: 'An awesome Dish!',
    expiryDate: date,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    expiryDate: date,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    expiryDate: date,
  },
];

const AvailableFood = () => {
  const foodList = DUMMY_FOOD.map((food) => {
    return (
      <ul>
        <li>{food.name}</li>
        <li>{food.description}</li>
        <li>{food.expiryDate}</li>
      </ul>
    );
  });
  return <section>{foodList}</section>;
};

export default AvailableFood;
