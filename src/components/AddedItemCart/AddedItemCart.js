import classes from './AddedItemCart.module.css';

const AddedItemCart = (props) => {
  const cartItems = (
    <ul className={classes['cart-items']}>
      {[{ id: 'c1', name: 'Sushi', amount: 2, expiryDate: 'Dec 2023' }].map(
        (item) => (
          <li>{item.name}</li>
        )
      )}
    </ul>
  );
  return (
    <div>
      {cartItems}
      <div className={classes.action}>
        <button className={classes['button--alt']}>Close</button>
      </div>
    </div>
  );
};

export default AddedItemCart;
