import React from "react";
import { View, Text } from "react-native";
import { useContext } from "react";
import { AppContext } from "./../store/app-context";

export default function CartScreen() {
  const appCtx = useContext(AppContext);
  return (
    <View>
      {appCtx.cartItems.map((item) => (
        <Text>{item.id + ": " + item.quantity}</Text>
      ))}
    </View>
  );
}
