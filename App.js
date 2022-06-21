import MyAppbar from "./components/ui/MyAppbar";
import CarouselContainer from "./components/CarouselContainer";
import PopularCategories from "./components/ui/PopularCategories";
import { Banner } from "./components/ui/Banner";
import { ScrollView, Text } from "react-native";
import SpecialCategory from "./components/ui/SpecialCategory";
import CarouselItem from "./components/ui/CarouselItem";
import CarouselItemTypeTwo from "./components/ui/CarouselItemTypeTwo";
import NewsLetter from "./components//ui/NewsLetter.js";
import Motto from "./components/ui/Motto";
import { Footer } from "./components/ui/Footer";
import { Social } from "./components/ui/Social";
import HorizontalLine from "./components/ui/HorizontalLine";
import { fetchProducts } from "./api/http";
import { useContext, useState, useEffect } from "react";
import { AppContext } from "./store/app-context";

export default function App() {
  const carouselItems = [
    {
      title: "Lorem ipsum dolor sit amet",
      text: "dolor nulla faucibus erat, eu malesuada libero arcu et orci. Aenean quis arcu malesuada, auctor nunc ut, imperdiet nulla. Proin laoreet odio libero",
    },
    {
      title: "Item 2",
      text: "Text 2",
    },
    {
      title: "Item 3",
      text: "Text 3",
    },
    {
      title: "Item 4",
      text: "Text 4",
    },
    {
      title: "Item 5",
      text: "Text 5",
    },
  ];
  const popularCats = [
    { id: "i1", name: "Car accessories" },
    { id: "i2", name: "Leggings" },
    { id: "i3", name: "Massage pistol" },
    { id: "i4", name: "Exercise equipment" },
    { id: "i5", name: "Yoga mat" },
    { id: "i6", name: "Training elastics" },
  ];
  const specialItems = [
    {
      id: 1,
      name: "Wine - Taylors Reserve",
      description:
        "Synergized upward-trending frame, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ullamcorper",
      price: 42,
    },
    {
      id: 2,
      name: "Scallops - U - 10",
      description:
        "Upgradable cohesive analyzer  tristique congue vel non turpis. Proin ante eros, aliquam non elementum",
      price: 62,
    },
    {
      id: 3,
      name: "Oregano - Dry, Rubbed",
      description: "Balanced web-enabled support",
      price: 57,
    },
    {
      id: 4,
      name: "Mousse - Banana Chocolate",
      description: "Sharable disintermediate data-warehouse",
      price: 60,
    },
    {
      id: 5,
      name: "Wine - Fontanafredda Barolo",
      description: "Upgradable value-added support",
      price: 69,
    },
    {
      id: 6,
      name: "Pork - Bacon, Sliced",
      description: "Team-oriented holistic paradigm",
      price: 44,
    },
  ];
  const specialItems2 = [
    {
      id: 1,
      name: "Wine - Taylors Reserve",
      description:
        "Synergized upward-trending frame, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ullamcorper",
      price: 42,
    },
    {
      id: 2,
      name: "Scallops - U - 10",
      description:
        "Upgradable cohesive analyzer  tristique congue vel non turpis. Proin ante eros, aliquam non elementum",
      price: 62,
    },
    {
      id: 3,
      name: "Oregano - Dry, Rubbed",
      description: "Balanced web-enabled support",
      price: 57,
    },
    {
      id: 4,
      name: "Mousse - Banana Chocolate",
      description: "Sharable disintermediate data-warehouse",
      price: 60,
    },
    {
      id: 5,
      name: "Wine - Fontanafredda Barolo",
      description: "Upgradable value-added support",
      price: 69,
    },
    {
      id: 6,
      name: "Pork - Bacon, Sliced",
      description: "Team-oriented holistic paradigm",
      price: 44,
    },
  ];

  const appCtx = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    appCtx.populateInitialItems();
  }, []);

  return (
    <>
      {isLoading ? (
        <Text>"Hello World"</Text>
      ) : (
        <ScrollView
          style={{ backgroundColor: "white" }}
          stickyHeaderIndices={[0]}
        >
          <MyAppbar />
          <CarouselContainer
            carouselItems={appCtx.initialItems}
            renderItem={CarouselItem}
          />
          <PopularCategories items={popularCats} />
          <Banner
            topText="UP TO"
            middleText="50% discount"
            bottomText="SELECT PRODUCT"
            imageUri1="https://picsum.photos/400"
            imageUri2="https://picsum.photos/300"
          />
          <Banner
            topText="UP TO"
            middleText="50% discount"
            bottomText="SELECT PRODUCT"
            imageUri1="https://picsum.photos/500"
            imageUri2="https://picsum.photos/100"
          />
          <SpecialCategory
            isHorizontalList={true}
            categoryName="Special Drinks"
            items={specialItems}
          />
          <SpecialCategory
            isHorizontalList={true}
            categoryName="High Quality Spices"
            items={specialItems2}
          />
          <CarouselContainer
            carouselItems={carouselItems}
            renderItem={CarouselItemTypeTwo}
          />
          <SpecialCategory
            isHorizontalList={false}
            categoryName="Automobile Accessories"
            items={specialItems2}
          />
          <CarouselContainer
            carouselItems={carouselItems}
            renderItem={CarouselItemTypeTwo}
          />
          <CarouselItem
            item={carouselItems[2]}
            textStyle={{ color: "white" }}
            style={{
              backgroundColor: "#ba4444",
              height: 400,
              marginVertical: 10,
            }}
          />
          <CarouselItem
            item={carouselItems[0]}
            textStyle={{ color: "white" }}
            style={{
              backgroundColor: "#ba4444",
              height: 400,
              marginVertical: 10,
            }}
          />
          <NewsLetter />
          <CarouselContainer
            carouselItems={carouselItems}
            renderItem={CarouselItem}
          />
          <Motto />
          <SpecialCategory
            isHorizontalList={true}
            categoryName="Clearance Sale"
            items={specialItems2}
          />
          <HorizontalLine />
          <CarouselItem
            item={carouselItems[3]}
            textStyle={{ color: "white" }}
            style={{
              backgroundColor: "#ba4444",
              height: 400,
              marginVertical: 10,
            }}
          />
          <CarouselItem
            item={carouselItems[1]}
            textStyle={{ color: "white" }}
            style={{
              backgroundColor: "#ba4444",
              height: 400,
              marginVertical: 10,
            }}
          />
          <CarouselItem
            item={carouselItems[4]}
            textStyle={{ color: "white" }}
            style={{
              backgroundColor: "#ba4444",
              height: 400,
              marginVertical: 10,
            }}
          />
          <HorizontalLine />
          <NewsLetter />
          <HorizontalLine />
          <Footer />
          <HorizontalLine />
          <Social />
          <HorizontalLine />
          <Text style={{ padding: 12 }}>© 2022 iSports.dk</Text>
        </ScrollView>
      )}
    </>
  );
}
