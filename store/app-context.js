import { createContext, useState } from "react";

export const AppContext = createContext({
  allItems: [],
  cartItems: [],
  populateAllItems: (data) => {},
  addToCart: (itemId) => {},
  reduceFromCart: (itemId) => {},
});

function AppContextProvider({ children }) {
  const [allItems, setAllItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  function populateAllItems(data) {
    setAllItems(data);
  }

  function addToCart(itemId) {
    let index = cartItems.findIndex((item) => item.id === itemId);
    if (index === -1) {
      // did not find the element, add it to items
      setCartItems((cartItems) => [...cartItems, { id: itemId, quantity: 1 }]);
      console.log(cartItems);
    } else {
      // found the element, update count
      const newArray = [...cartItems];
      newArray[index].quantity = newArray[index].quantity + 1;
      setCartItems(newArray);
    }
  }

  function reduceFromCart(itemId) {
    let index = cartItems.findIndex((item) => item.id === itemId);
    if (cartItems[index].quantity === 1) {
      // will now have 0 after removal, so remove the entire element
      setCartItems(cartItems.filter(item => item.id !== itemId))
    } else {
      // reduce quantity
      const newArray = [...cartItems];
      newArray[index].quantity = newArray[index].quantity - 1;
      setCartItems(newArray);
    }
  }

  const value = {
    allItems: allItems,
    cartItems: cartItems,
    populateAllItems: populateAllItems,
    addToCart: addToCart,
    reduceFromCart: reduceFromCart,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppContextProvider;
