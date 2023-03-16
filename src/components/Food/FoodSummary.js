import React from 'react';
import classes from './FoodSummary.module.css';

const FoodSummary = () => {
  return (
    <section className={classes.summary}>
      <h1>Tasty Food Product, Available To You</h1>
      <p>
        Kindly view our list of Available Food products with their use by dates
        in YEAR
      </p>
      <p>
        You can add your own Food product manually with a use by date year
        between 2023 - 2025, and we guarantee to have it available
      </p>
    </section>
  );
};

export default FoodSummary;
