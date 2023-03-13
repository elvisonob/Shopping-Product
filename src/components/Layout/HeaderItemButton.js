import classes from './HeaderItemButton.module.css';
import React, { useContext } from 'react';
import addItemContext from '../../store/item-context';

const HeaderItemButton = (props) => {
  const itemCtx = useContext(addItemContext);

  const numberOfAddedItems = itemCtx.items.reduce((currNum, item) => {
    return currNum + item.amount;
  }, 0);
  return (
    <button className={classes.button} onClick={props.onShow}>
      <span>Your Added Items</span>
      <span className={classes.badge}>{numberOfAddedItems}</span>
    </button>
  );
};

export default HeaderItemButton;
