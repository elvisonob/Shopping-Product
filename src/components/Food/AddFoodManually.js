import React, { useState } from 'react';
import classes from './AddFoodManually.module.css';

const AddFoodManually = (props) => {
  const [enteredFoodName, setEnteredFoodName] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const addFoodHandler = (e) => {
    setEnteredFoodName(e.target.value);
  };

  const addDateHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  let formIsValid = false;

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (!enteredFoodName.trim() !== '') {
      formIsValid = true;
    } else {
      return;
    }

    props.onAddFoodName(enteredFoodName, new Date(enteredDate).getFullYear());
    setEnteredFoodName('');
    setEnteredDate('');
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <div className={classes['control-group']}>
        <div className={classes.labelName}>
          <label className={classes.labelText} htmlFor="name">
            Food Name{' '}
          </label>
          <input
            className={classes.input}
            type="text"
            id="name"
            onChange={addFoodHandler}
            value={enteredFoodName}
          />
        </div>
        <div>
          <label className={classes.labelText} htmlFor="name">
            Date{' '}
          </label>
          <input
            className={classes.input}
            type="date"
            min="2023-05-05"
            max="2025-12-31"
            value={enteredDate}
            onChange={addDateHandler}
          />
        </div>
        <div className={classes.formActions}>
          <button className={classes.buttonPress}>Add Food Product</button>
          <button
            type="button"
            className={classes.buttonPress}
            onClick={props.onClose}
          >
            close
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddFoodManually;
