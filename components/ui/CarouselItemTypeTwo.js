import React from "react";
import { Text, Pressable, Image, View, StyleSheet } from "react-native";

const CarouselItemTypeTwo = ({ item, index}) => {

  return (
    <Pressable
      style={[
        {
          borderRadius: 6,
          margin: 8,
          paddingBottom: 10,
          height: 400,
        },
        
      ]}
    >
      <View style={{ flex: 4, alignItems: "center", paddingTop: 10 }}>
        <Image
          style={{
            margin: 12,
            width: undefined,
            height: "90%",
            aspectRatio: 1,
            resizeMode: "contain",
          }}
          source={{
            uri: item.image,
          }}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={[styles.title]}>{item.title}</Text>
      </View>
      <Text
        style={{ margin: 12, padding: 6, fontSize: 18, fontWeight: "bold" }}
      >
        ${item.price}
      </Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#010101",
    width: 100,
    height: 40,
    padding: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    backgroundColor: "white",
    height: 500,
    padding: 5,
    marginHorizontal: 16,
  },
  image: {
    height: "50%",
    resizeMode: "contain",
  },
  textContainer: {
    padding: 12,
    width: 400,
  },
  title: {
    fontSize: 22,
    textAlign: "center",
    flexWrap: 'wrap'
  },
  text: {
    fontSize: 14,
    textAlign: "center",
     flexWrap: 'wrap'
  },
});

export default CarouselItemTypeTwo;
