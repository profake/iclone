import CarouselContainer from "../components/CarouselContainer";
import PopularCategories from "../components/ui/PopularCategories";
import { Banner } from "../components/ui/Banner";
import { ScrollView, Text, View } from "react-native";
import SpecialCategory from "../components/ui/SpecialCategory";
import CarouselItem from "../components/ui/CarouselItem";
import NewsLetter from "../components//ui/NewsLetter.js";
import Motto from "../components/ui/Motto";
import { Footer } from "../components/ui/Footer";
import { Social } from "../components/ui/Social";
import HorizontalLine from "../components/ui/HorizontalLine";
import { fetchProducts } from "../api/http";
import { useContext, useState, useEffect } from "react";
import { AppContext } from "../store/app-context";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import { getRandomInteger } from "../util/random-number";

export default function HomeScreen({ navigation }) {
  const appCtx = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getAllProducts() {
      const products = await fetchProducts(20);
      appCtx.populateAllItems(products);
      setIsLoading(false);
    }
    getAllProducts();
  }, []);

  return (
    <>
      {isLoading ? (
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <LoadingSpinner />
        </View>
      ) : (
        <ScrollView style={{ backgroundColor: "white" }}>
          <CarouselContainer renderItem={CarouselItem} start={0} end={5} />
          <PopularCategories />
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
            categoryName="Special Items"
            start={7}
            end={13}
          />    
          <SpecialCategory
            isHorizontalList={true}
            categoryName="High Quality Spices"
            start={13}
            end={18}
          />
          <CarouselContainer
            renderItem={CarouselItem}
            start={6}
            end={9}
          />
          <SpecialCategory
            isHorizontalList={false}
            categoryName="Automobile Accessories"
            start={10}
            end={14}
          />
          <CarouselContainer
            renderItem={CarouselItem}
            start={14}
            end={17}
          />
          <CarouselItem
            item={appCtx.allItems[getRandomInteger(0, 19)]}
            textStyle={{ color: "white" }}
            style={{
              backgroundColor: "#ba4444",
              height: 400,
              marginVertical: 10,
            }}
          />
          <CarouselItem
            item={appCtx.allItems[getRandomInteger(0, 19)]}
            textStyle={{ color: "white" }}
            style={{
              backgroundColor: "#ba4444",
              height: 500,
              marginVertical: 10,
            }}
          />
          <NewsLetter />
          <CarouselContainer renderItem={CarouselItem} start={2} end={7} />
          <Motto />
          <SpecialCategory
            isHorizontalList={true}
            categoryName="Clearance Sale"
            start={17}
            end={20}
          />
          <HorizontalLine />
          <CarouselItem
            item={appCtx.allItems[getRandomInteger(0, 19)]}
            textStyle={{ color: "white" }}
            style={{
              backgroundColor: "#ba4444",
              height: 500,
              marginVertical: 10,
            }}
          />
          <CarouselItem
            item={appCtx.allItems[getRandomInteger(0, 19)]}
            textStyle={{ color: "white" }}
            style={{
              backgroundColor: "#ba4444",
              height: 500,
              marginVertical: 10,
            }}
          />
          <CarouselItem
            item={appCtx.allItems[getRandomInteger(0, 19)]}
            textStyle={{ color: "white" }}
            style={{
              backgroundColor: "#ba4444",
              height: 500,
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
