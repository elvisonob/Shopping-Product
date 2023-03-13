import { useContext } from 'react';
import classes from './FoodItem.module.css';
import FoodItemForm from './FoodItemForm';
import ItemContext from '../../../store/item-context';

const FoodItem = (props) => {
  const itemCtx = useContext(ItemContext);
  const addItemHandler = (amount) => {
    itemCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      expiryDate: props.expiryDate,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.expiryDate}>{props.expiryDate}</div>
      </div>
      <div>
        <FoodItemForm id={props.id} onAddToCart={addItemHandler} />
      </div>
    </li>
  );
};

export default FoodItem;
