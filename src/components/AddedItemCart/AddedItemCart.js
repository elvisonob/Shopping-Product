import { useContext } from 'react';
import Modal from '../UI/Modal';
import AddedItem from './AddedItem';
import classes from './AddedItemCart.module.css';
import ItemContext from '../../store/item-context';

const AddedItemCart = (props) => {
  const itemCtx = useContext(ItemContext);

  const addedItemRemoveHandler = (id) => {
    itemCtx.removeItem(id);
  };
  const addedItemAddHandler = (item) => {
    itemCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {itemCtx.items.map((item) => (
        <AddedItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          expiryDate={`Use by ${item.expiryDate}`}
          onRemove={addedItemRemoveHandler.bind(null, item.id)}
          onAdd={addedItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {itemCtx.items.length === 0 ? (
        <p className={classes.paragraph}>Added Item Cart is Empty</p>
      ) : (
        cartItems
      )}
      <div className={classes.action}>
        <button className={classes.buttonPress} onClick={props.onClose}>
          Close
        </button>
      </div>
    </Modal>
  );
};

export default AddedItemCart;
