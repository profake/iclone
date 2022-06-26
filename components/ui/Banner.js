import React from "react";
import { Pressable, View, Text } from "react-native";
import { Image } from "react-native";

export const Banner = ({
  backgroundImage,
  topText,
  middleText,
  bottomText,
  imageUri1,
  imageUri2,
}) => {
  return (
    <Pressable style={{ marginHorizontal: 16, marginVertical: 4 }}>
      <View
        style={{
          backgroundColor: "#fcf4f1",
          width: "100%",
          padding: 16,
          flexDirection: "row",
          height: 150,
        }}
      >
        <View style={{ flex: 2, justifyContent: "center" }}>
          <Text style={{ textAlign: "center", fontSize: 14 }}>{topText}</Text>
          <Text
            style={{
              zIndex: 1,
              textAlign: "center",
              fontSize: 36,
              position: "absolute",
              left: 40,
              paddingVertical: 30,
              fontWeight: "bold",
            }}
          >
            {middleText}
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: 14,
              paddingTop: 40,
              paddingLeft: 20,
            }}
          >
            {bottomText}
          </Text>
        </View>
        <View style={{ flex: 1, alignItems: "center", flexDirection: "row" }}>
          <Image
            style={{ height: 40, width: 40 }}
            source={{ uri: imageUri1 }}
          />
          <Image
            style={{ height: 40, width: 40 }}
            source={{ uri: imageUri2 }}
          />
        </View>
      </View>
    </Pressable>
  );
};
