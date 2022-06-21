import { createContext, useState } from "react";

export const AppContext = createContext({
  carouselItems: [],
  populateCarouselItems: (data) => {},
});

function AppContextProvider({ children }) {
  const [carouselItems, setCarouselItems] = useState([]);

  function populateCarouselItems(data) {
    console.log(data);
    setCarouselItems(data);
  }

  const value = {
    carouselItems: carouselItems,
    populateCarouselItems: populateCarouselItems,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppContextProvider;
