import { useContext, useState, React } from "react";
import Carousel from "react-native-snap-carousel";
import { IconButton } from "react-native-paper";
import { Dimensions } from "react-native";
import { FlatList, View, Button } from "react-native";
import { AppContext } from "./../store/app-context";
import { getRandomInteger } from "./../util/random-number";

let carouselRef;

export default function CarouselContainer({ style, renderItem, start, end }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const appCtx = useContext(AppContext);

  return (
    <View
      style={{
        paddingTop: 12,
      }}
    >
      <FlatList
        data={appCtx.allItems.slice(start, end)}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}                    
        showsHorizontalScrollIndicator={false}
      />
      <View
        style={{
          justifyContent: "flex-end",
          flexDirection: "row",
          bottom: 20,
          right: 24,
        }}
      >
      </View>
    </View>
  );
}
