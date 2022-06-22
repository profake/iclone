import React, { useState, useEffect, useContext } from "react";
import { Image, Text, View, ScrollView } from "react-native";
import { AppContext } from './../../store/app-context';

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
          uri: item.image,
        }}
      />
      <Text style={{ padding: 6, fontSize: 14, textAlign: "center" }}>
        {item.category}
      </Text>
    </View>
  );
}

export default function PopularCategories() {
  const appCtx = useContext(AppContext);

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
        {appCtx.allItems.slice(6, 12).map((item) => (
          <RenderListItem item={item} />
        ))}
      </View>
    </View>
  );
}
