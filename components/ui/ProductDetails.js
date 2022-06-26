import React, { useContext } from "react";
import { ScrollView, View, Text, Image, Pressable } from "react-native";
import { Button } from "react-native-paper";
import NewsLetter from "./NewsLetter";
import { Footer } from "./Footer";
import { Social } from "./Social";
import { AppContext } from "./../../store/app-context";
import { getRandomInteger } from "../../util/random-number";
import { useNavigation } from "@react-navigation/native";
import Motto from "./Motto";
import Toast from "react-native-root-toast";

export default function ProductDetails({ item }) {
  const appCtx = useContext(AppContext);
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View
        style={[
          {
            backgroundColor: "#f8f8f8",
            borderRadius: 6,
            paddingBottom: 10,
            width: "100%",
          },
        ]}
      >
        <Text
          style={{
            padding: 6,
            marginHorizontal: 12,
            fontSize: 22,
            fontWeight: "bold",
          }}
        >
          {item.title}
        </Text>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Image
            style={{
              width: "80%",
              aspectRatio: 1,
              resizeMode: "center",
            }}
            source={{
              uri: item.image,
            }}
          />
        </View>
        <View style={{ flex: 2 }}>
          <Text
            style={{
              padding: 8,
              marginHorizontal: 12,
              fontSize: 18,
              width: "90%",
            }}
          >
            {item.description}
          </Text>
          <View style={{ padding: 12, marginHorizontal: 12 }}>
            <Text style={{ fontSize: 16 }}>Price</Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              ${item.price}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: "70%",
              marginHorizontal: 12,
            }}
          >
            <Button
              style={{ backgroundColor: "transparent" }}
              mode="compact"
              labelStyle={{ fontSize: 24 }}
              icon="truck"
            ></Button>
            <Text>
              Delivery time 1-2 days. Shipping to parcel shop $12.99. Free over
              $90. Freight company DHL and FeDex.
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: "70%",
              marginHorizontal: 12,
            }}
          >
            <Button
              style={{ backgroundColor: "transparent" }}
              mode="compact"
              labelStyle={{ fontSize: 24 }}
              icon="lock"
            ></Button>
            <Text>3D-Secure payment. Redeeming nets.</Text>
          </View>
        </View>
        <Pressable
          android_ripple={{ color: "#5e00e7" }}
          onPress={() => {
            appCtx.addToCart(item.id, item.price);
            Toast.show("Added to Cart!", {
              duration: Toast.durations.LONG,
            });
            console.log(`Added id ${item.id} to cart`);
          }}
          style={{
            borderWidth: 2,
            borderColor: "black",
            marginHorizontal: 14,
            marginVertical: 8,
          }}
        >
          <Text style={{ fontSize: 24, textAlign: "center", padding: 12 }}>
            Add to Cart
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            appCtx.addToCart(item.id, item.price);
            navigation.navigate("CartScreen");
          }}
          android_ripple={{ color: "white" }}
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
            Buy Now
          </Text>
        </Pressable>
      </View>
      <Motto />
      <NewsLetter />
      <Footer />
      <Social />
    </ScrollView>
  );
}
