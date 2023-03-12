import React, { useState } from 'react';
import Header from './components/Layout/Header';
import Food from './components/Food/Food';
import AddedItemCart from './components/AddedItemCart/AddedItemCart';
import ItemProvider from './store/ItemProvider';

const App = () => {
  const [addedItemShown, setAddedItemShown] = useState(false);

  const showItemsHandler = () => {
    setAddedItemShown(true);
  };

  const hideItemsHandler = () => {
    setAddedItemShown(false);
  };

  return (
    <ItemProvider>
      {addedItemShown && <AddedItemCart onClose={hideItemsHandler} />}
      <Header onShowAddedItem={showItemsHandler} />
      <main>
        <Food />
      </main>
    </ItemProvider>
  );
};

export default App;
