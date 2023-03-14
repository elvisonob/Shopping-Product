import { useReducer } from 'react';
import ItemContext from './item-context';

const defaultItemAddedState = {
  items: [],
  totalAmount: 0,
};

const addedItemReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedTotalAmount = state.totalAmount + action.item.amount;

    const existingAddedItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingAddedItem = state.items[existingAddedItemIndex];
    let updatedItems;
    if (existingAddedItem) {
      const updatedItem = {
        ...existingAddedItem,
        amount: existingAddedItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingAddedItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === 'REMOVE') {
    const existingAddedItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingAddedItemIndex];

    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingAddedItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
    };
  }
  return defaultItemAddedState;
};

const ItemProvider = (props) => {
  const [itemState, dispatchItemFn] = useReducer(
    addedItemReducer,
    defaultItemAddedState
  );

  const addItemHandler = (item) => {
    dispatchItemFn({ type: 'ADD', item: item });
  };
  const removeItemFromHandler = (id) => {
    dispatchItemFn({ type: 'REMOVE', id: id });
  };
  const itemContext = {
    items: itemState.items,
    totalAmount: itemState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemFromHandler,
  };

  return (
    <ItemContext.Provider value={itemContext}>
      {props.children}
    </ItemContext.Provider>
  );
};

export default ItemProvider;
