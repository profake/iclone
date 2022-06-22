import React from "react";
import { Text, View } from "react-native";
import { useContext } from "react";
import { AppContext } from "./../store/app-context";
import ProductDetails from "../components/ui/ProductDetails";


export default function DetailsScreen({ route }) {
  const appCtx = useContext(AppContext);
  const product = appCtx.allItems.filter((item) => item.id === route.params.id)[0];

  return (
    <View>
      <ProductDetails item={product}/>
    </View>
  );
}
