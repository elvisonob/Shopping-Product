import ItemContext from './item-context';

const addItemHandler = (item) => {};
const removeItemFromHandler = (id) => {};

const ItemProvider = (props) => {
  const itemContext = {
    items: [],
    totalAmount: 0,
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
