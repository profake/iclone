import React from "react";
import { View } from "react-native";
import { IconButton } from "react-native-paper";
export default function HeaderButtons({ cartButtonAction }) {
  return (
    <View style={{ flexDirection: "row" }}>
      <IconButton
        icon="magnify"
        style={{ backgroundColor: "transparent", justifyContent: 'center', alignItems: 'center', }}
        mode="compact"
        labelStyle={{ fontSize: 24, color: 'black' }}
        onPress={() => console.log("Pressed")}
      />
      <IconButton
        icon="cart"
        style={{ backgroundColor: "transparent" }}
        mode="compact"
        labelStyle={{ fontSize: 24, color: 'black'  }}
        onPress={cartButtonAction}
      />
      <IconButton
        icon="account"
        style={{ backgroundColor: "transparent" }}
        mode="compact"
        labelStyle={{ fontSize: 24, color: 'black'  }}
        onPress={() => console.log("Pressed")}
      />
    </View>
  );
}
