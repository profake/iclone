import React from "react";
import { Text, Pressable, Image, View, StyleSheet } from "react-native";

const CarouselItemTypeTwo = ({ item, index }) => {

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: "https://picsum.photos/200",
        }}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
      <Pressable style={{ justifyContent: "center", alignItems: "center" }}>
        <View style={styles.button}>
          <Text style={{ color: "black", fontWeight: "bold" }}>Buy now</Text>
        </View>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    width: 100,
    height: 40,
    padding: 4,
    alignItems: "center",
    justifyContent: "center",
    position: 'absolute',
    bottom: 20,
  },
  container: {
    backgroundColor: "white",
    borderRadius: 5,
    height: 240,
    paddingVertical: 5,
  },
  image: {
    height: "100%",
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    position: 'absolute', 
    top: 20,
    padding: 12,
  },
  title: {
    color: 'white',
    fontSize: 26,
    textAlign: "center",
  },
  text: {
    color: 'white',
    fontSize: 14,
    textAlign: "center",
  },
});

export default CarouselItemTypeTwo;
