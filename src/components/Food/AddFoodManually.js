import React, { useState } from 'react';

const AddFoodManually = (props) => {
  const [enteredFoodName, setEnteredFoodName] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [enteredNumber, setEnteredNumber] = useState('');

  const addFoodHandler = (e) => {
    setEnteredFoodName(e.target.value);
  };

  const addDateHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  const onAddNumberHandler = (e) => {
    setEnteredNumber(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    console.log(enteredFoodName, enteredDate);
    const enteredAmountNumber = +enteredNumber;
    props.onAddFoodName(enteredFoodName, enteredDate, enteredAmountNumber);
    setEnteredFoodName('');
    setEnteredDate('');
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <div className="control-group">
        <div className="form-control">
          <label htmlFor="name">Food Name</label>
          <input
            type="text"
            id="name"
            onChange={addFoodHandler}
            value={enteredFoodName}
          />
        </div>
        <div className="form-control">
          <label htmlFor="name">Date</label>
          <input
            type="text"
            id="name"
            value={enteredDate}
            onChange={addDateHandler}
          />
          <div>
            <label htmlFor="number">Number</label>
            <input
              type="number"
              id="number"
              value={enteredNumber}
              onChange={onAddNumberHandler}
            />
          </div>
        </div>
      </div>
      <div className="form-actions">
        <button>Add Food Product</button>
      </div>
    </form>
  );
};

export default AddFoodManually;
