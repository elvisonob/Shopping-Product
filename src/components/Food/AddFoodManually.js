import React, { useState } from 'react';

const AddFoodManually = (props) => {
  const [addFoodName, setAddFoodName] = useState('');
  const [addDate, setAddDate] = useState('');
  const [addNumber, setAddNumber] = useState('');

  const addFoodHandler = (e) => {
    setAddFoodName(e.target.value);
  };

  const addDateHandler = (e) => {
    setAddDate(e.target.value);
  };

  const onAddNumberHandler = (e) => {
    setAddNumber(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(addFoodName, addDate);
    const enteredNumber = addNumber;
    const enteredAmountNumber = +enteredNumber;
    props.onAddFoodName(addFoodName, addDate, enteredAmountNumber);
    setAddFoodName('');
    setAddDate('');
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
            value={addFoodName}
          />
        </div>
        <div className="form-control">
          <label htmlFor="name">Date</label>
          <input
            type="text"
            id="name"
            value={addDate}
            onChange={addDateHandler}
          />
          <div>
            <label htmlFor="number">Number</label>
            <input
              type="number"
              id="number"
              value={addNumber}
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
