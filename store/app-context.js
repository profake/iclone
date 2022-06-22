import { createContext, useState } from "react";

export const AppContext = createContext({
  allItems: [],
  populateAllItems: (data) => {},
});

function AppContextProvider({ children }) {
  const [allItems, setAllItems] = useState([]);

  function populateAllItems(data) {
    console.log(data);
    setAllItems(data);
  }


  const value = {
    allItems: allItems,
    populateAllItems: populateAllItems,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppContextProvider;
