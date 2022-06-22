import React from "react";
import { Text, Pressable, Image, View, StyleSheet } from "react-native";

const CarouselItem = ({ item, index, style, textStyle, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        {
          borderRadius: 6,
          margin: 8,
          paddingBottom: 10,
          height: 400,
          justifyContent: 'center',
          alignItems: 'center',
        },
        style,
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
        <Text style={[styles.title, textStyle]}>{item.title}</Text>
        <Text style={[styles.text, textStyle]}>
          {item.description.length < 60
            ? `${item.description}`
            : `${item.description.substring(0, 57)}...`}
        </Text>
      </View>
      <Text
        style={[{ margin: 12, padding: 6, fontSize: 18, fontWeight: "bold" }, textStyle]}
      >
        ${item.price}
      </Text>
    </Pressable>
  );
};
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

export default CarouselItem;
