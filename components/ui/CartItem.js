import React, { useContext } from "react";
import { View, Text, Image, Pressable } from "react-native";
import { AppContext } from "./../../store/app-context";

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
          }}
        >
          <Pressable
            style={{ marginHorizontal: 8 }}
            onPress={() => appCtx.reduceFromCart(item.id)}
          >
            <Text style={{ fontSize: 18 }}>-</Text>
          </Pressable>
          <Text style={{ marginHorizontal: 8, fontSize: 20 }}>{quantity}</Text>
          <Pressable
            style={{ marginHorizontal: 8 }}
            onPress={() => appCtx.addToCart(item.id)}
          >
            <Text style={{ fontSize: 18 }}>+</Text>
          </Pressable>
        </View>

        <Text style={{ fontWeight: "bold", fontSize: 18, paddingTop: 12 }}>
          ${item.price}
        </Text>
        <Pressable
          style={{ paddingTop: 4 }}
          onPress={() => {
            console.log("Remove pressed");
          }}
        >
          <Text>Remove</Text>
        </Pressable>
      </View>
    </View>
  );
}
