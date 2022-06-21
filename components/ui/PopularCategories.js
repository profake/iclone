import React from "react";
import { Image, Text, View, ScrollView } from "react-native";

function RenderListItem({ item }) {
  return (
    <View
      style={{
        padding: 10,
        justifyContent: "center",
        width: '33%',
        alignItems: "center",
      }}
    >
      <Image
        style={{
          borderRadius: 50,
          height: 90,
          width: 90,
        }}
        source={{
          uri: "https://picsum.photos/200",
        }}
      />
      <Text style={{ padding: 6, fontSize: 14, textAlign: "center" }}>
        {item.name}
      </Text>
    </View>
  );
}

export default function PopularCategories({ items }) {
  return (
    <View style={{ paddingBottom: 40 }}>
      <Text style={{ fontWeight: "bold", fontSize: 22, padding: 18 }}>
        Popular Categories
      </Text>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "flex-start",
        }}
      >
        {items.map((item) => (
          <RenderListItem item={item} />
        ))}
      </View>
    </View>
  );
}
