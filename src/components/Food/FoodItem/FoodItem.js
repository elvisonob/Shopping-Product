import classes from './FoodItem.module.css';
import FoodItemForm from './FoodItemForm';
const FoodItem = (props) => {
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.expiryDate}>{props.expiryDate}</div>
      </div>
      <div>
        <FoodItemForm id={props.id} />
      </div>
    </li>
  );
};

export default FoodItem;
