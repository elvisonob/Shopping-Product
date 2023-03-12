import React from 'react';
import classes from './FoodSummary.module.css';

const FoodSummary = () => {
  return (
    <section className={classes.summary}>
      <h1>Delicious Food, Available To You</h1>
      <p>
        Kindly view our list of Available Food products, and however, you can
        also directly add a meal of your choice manually
      </p>
      <p>
        All available Food products are prepared with high-quality ingredients
      </p>
    </section>
  );
};

export default FoodSummary;
