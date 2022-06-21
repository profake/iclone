import { useState, React } from "react";
import Carousel from "react-native-snap-carousel";
import { IconButton } from "react-native-paper";
import { Dimensions } from 'react-native';
import { View, Button } from "react-native";

let carouselRef;

export default function CarouselContainer({ style, carouselItems, renderItem }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <View style={{ flex: 1, width: '100%', paddingTop: 12, flexDirection: "column", justifyContent: "center" }}>
      <Carousel
        ref={(reference) => (carouselRef = reference)}
        layout={"default"}
        data={carouselItems}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={Dimensions.get('window').width}
        itemHeight={400}
        renderItem={renderItem}
        loop={true}
        enableSnap={true}
        onSnapToItem={(index) => setActiveIndex(index)}
      />
      <View
        style={{
          justifyContent: "flex-end",
          flexDirection: "row",
          bottom: 20,
          right: 24
        }}
      >
        <IconButton
          style={{backgroundColor: 'white', elevation: 4}}
          icon="arrow-left"
          size={24}
          onPress={() => {
            carouselRef.snapToItem(activeIndex - 1);
          }}
        />
        <IconButton
          style={{backgroundColor: 'white', elevation: 4}}
          icon="arrow-right"
          size={24}
          onPress={() => {
            carouselRef.snapToItem(activeIndex + 1);
          }}
        />
      </View>
    </View>
  );
}