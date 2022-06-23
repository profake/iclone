import React from "react";
import { ScrollView, Pressable, View, Text, Image } from "react-native";
import { useContext } from "react";
import { AppContext } from "./../store/app-context";
import CartItem from "../components/ui/CartItem";

export default function CartScreen() {
  const appCtx = useContext(AppContext);
  return (
    <View style={{ flex: 1, paddingTop: 8 }}>
      <ScrollView>
        {appCtx.cartItems.map((cartItemInfo) => {
          const item = appCtx.allItems.filter(
            (it) => it.id === cartItemInfo.id
          )[0];
          return <CartItem item={item} quantity={cartItemInfo.quantity} />;
        })}
        <Pressable
          style={{
            backgroundColor: "black",
            marginHorizontal: 14,
            marginVertical: 8,
          }}
        >
          <Text
            style={{
              fontSize: 24,
              textAlign: "center",
              padding: 12,
              color: "white",
            }}
          >
            Keep Browsing
          </Text>
        </Pressable>
        <Pressable onPress={()=>{appCtx.addToCart(item.id); console.log(`Added id ${item.id} to cart`)}}
          style={{
            borderWidth: 2,
            borderColor: "black",
            marginHorizontal: 14,
            marginVertical: 8,
          }}
        >
          <Text style={{ fontSize: 24, textAlign: "center", padding: 12 }}>
            Go to Checkout
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}
