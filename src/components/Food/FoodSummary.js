import classes from './FoodSummary.module.css';

const FoodSummary = () => {
  <section className={classes.summary}>
    <h1>Delicious Food, Available To You</h1>
    <p>
      Kindly view our list of our Available Food products, and however, you can
      also directly add a meal of your choice
      <button>
        <span>Add Food product</span>
      </button>
    </p>
    <p>
      All available Food products are prepared with high-quality ingredients
    </p>
  </section>;
};

export default FoodSummary;
