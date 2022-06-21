import { createContext, useState } from "react";
import { fetchProducts } from "../api/http";

export const AppContext = createContext({
  initialItems: [],
  populateInitialItems: () => {},
});

function AppContextProvider({ children }) {
  const [initialItems, setInitialItems] = useState([]);

  async function populateInit() {
    console.log('called')
    data = await fetchProducts();
    setInitialItems(data);
    console.log("setting --> " + data);
  };

  const value = {
    initialItems: initialItems,
    populateInitialItems: populateInit,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppContextProvider;
