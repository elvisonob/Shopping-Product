import classes from './HeaderItemButton.module.css';
import React, { useContext, useEffect, useState } from 'react';
import addItemContext from '../../store/item-context';

const HeaderItemButton = (props) => {
  const [btnIsFeatured, setBtnIsFeatured] = useState(false);
  const itemCtx = useContext(addItemContext);

  const { items } = itemCtx;

  const numberOfAddedItems = items.reduce((currNum, item) => {
    return currNum + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnIsFeatured ? classes.bump : ''}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsFeatured(true);
    const timing = setTimeout(() => {
      setBtnIsFeatured(false);
    }, 300);

    return () => {
      clearTimeout(timing);
    };
  }, [items]);
  return (
    <button className={btnClasses} onClick={props.onShow}>
      <span>Your Added Items</span>
      <span className={classes.badge}>{numberOfAddedItems}</span>
    </button>
  );
};

export default HeaderItemButton;
