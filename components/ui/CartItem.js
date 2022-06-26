import React, { useContext } from "react";
import { View, Text, Image, Pressable } from "react-native";
import { AppContext } from "./../../store/app-context";
import { IconButton } from "react-native-paper";

export default function CartItem({ item, quantity }) {
  const appCtx = useContext(AppContext);

  return (
    <View
      style={{
        flexDirection: "row",
        alignSelf: "flex-start",
        margin: 12,
        padding: 8,
        borderBottomColor: "#8d8d8d",
        borderBottomWidth: 0.6,
      }}
    >
      <View style={{ flex: 4, justifyContent: "center" }}>
        <Image
          style={{ width: "80%", height: 100, resizeMode: "contain" }}
          source={{ uri: item.image }}
        />
      </View>
      <View style={{ flex: 6 }}>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>{item.title}</Text>
        <View
          style={{
            alignSelf: "flex-start",
            flexDirection: "row",
            borderColor: "#b3b3b3",
            borderWidth: 1,
            padding: 12,
            marginTop: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <IconButton
            icon="minus"
            size={20}
            onPress={() => appCtx.reduceFromCart(item.id, item.price)}
          />
          <Text style={{ fontSize: 26, margin: 4}}>{quantity}</Text>
          <IconButton
            icon="plus"
            size={20}
            onPress={() => {
              appCtx.addToCart(item.id, item.price);
            }}
          />
        </View>

        <Text style={{ fontWeight: "bold", fontSize: 20, paddingTop: 12 }}>
          ${item.price}
        </Text>
      </View>
    </View>
  );
}
