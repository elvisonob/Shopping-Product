import React from 'react';

const AddFoodManually = () => {
  return (
    <form>
      <div className="control-group">
        <div className="form-control">
          <label htmlFor="name">Food Name</label>
          <input type="text" id="name" />
        </div>
        <div className="form-control">
          <label htmlFor="name">Date</label>
          <input type="text" id="name" />
        </div>
      </div>
      <div className="form-actions">
        <button>Add Food Product</button>
      </div>
    </form>
  );
};

export default AddFoodManually;
