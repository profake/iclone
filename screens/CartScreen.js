import React from "react";
import { ScrollView, Pressable, View, Text, Image } from "react-native";
import { useContext } from "react";
import { AppContext } from "./../store/app-context";
import CartItem from "../components/ui/CartItem";
import Motto from "../components/ui/Motto";
import NewsLetter from "../components/ui/NewsLetter";
import { Footer } from "../components/ui/Footer";
import { Social } from "../components/ui/Social";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";
import { IconButton } from "react-native-paper";

export default function CartScreen() {
  const appCtx = useContext(AppContext);
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, paddingTop: 8 }}>
      <ScrollView>
        {appCtx.cartItems.map((cartItemInfo) => {
          const item = appCtx.allItems.filter(
            (it) => it.id === cartItemInfo.id
          )[0];
          return <CartItem key={item.id} item={item} quantity={cartItemInfo.quantity} />;
        })}
        {appCtx.cartItems.length === 0 ? (
          <View
            style={{
              alignSelf: "center",
              justifyContent: "center",
              paddingBottom: 200,
              paddingTop: 50,
            }}
          >
            <IconButton
              icon="cart-remove"
              size={100}
              onPress={() => console.log("Pressed")}
            />
            <Text
              style={{
                textAlign: "center",
                fontSize: 20,
                fontWeight: "bold",
                padding: 12,
              }}
            >
              No items!
            </Text>
            <Button
              icon="basket"
              mode="contained"
              onPress={() => navigation.navigate("HomeScreen")}
            >
              Browse
            </Button>
          </View>
        ) : (
          <View>
            <View style={{ borderWidth: 1, alignSelf: "flex-end", margin: 8, padding: 4, borderColor: '#a3a3a3' }}>
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                Total: ${appCtx.cartTotal.toFixed(2)}
              </Text>
            </View>
            <Pressable
              android_ripple={{ color: "white" }}
              onPress={() => navigation.navigate("HomeScreen")}
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
            <Pressable
              onPress={() => {
                console.log(`checkout clicked`);
              }}
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
          </View>
        )}
        <Motto />
        <NewsLetter />
        <Footer />
        <Social />
      </ScrollView>
    </View>
  );
}
