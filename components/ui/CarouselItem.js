import React from "react";
import { Text, Pressable, Image, View, StyleSheet } from "react-native";

const CarouselItem = ({ item, index, style, textStyle }) => {
  return (
    <View style={[styles.container, style]}>
      <Image
        style={styles.image}
        source={{
          uri: item.image,
        }}
      />
      <View style={styles.textContainer}>
        <Text style={[styles.title, textStyle]}>{item.title}</Text>
        <Text style={[styles.text, textStyle]}>{item.description.length < 60
                ? `${item.description}`
                : `${item.description.substring(0, 57)}...`}</Text>
      </View>
      <Pressable style={{ justifyContent: "center", alignItems: "center" }}>
        <View style={styles.button}>
          <Text style={{ color: "white", fontWeight: "bold" }}>Buy now</Text>
        </View>
      </Pressable>
    </View>
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
  },
  textContainer: {
    padding: 12,
  },
  title: {
    fontSize: 28,
    textAlign: "center",
  },
  text: {
    fontSize: 14,
    textAlign: "center",
  },
});

export default CarouselItem;
