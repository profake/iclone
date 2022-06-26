import React from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-paper";

export const Social = () => {
  return (
    <View
      style={{flexDirection: "row", }}
    >
      <View style={{ padding: 12 }}>
        <Text style={{ paddingLeft: 12, fontSize: 16, fontWeight: "bold" }}>
          Contact us
        </Text>
        <View style={{justifyContent: "flex-start"}}>
          <Button uppercase={false} icon="phone"><Text style={{textAlign: 'left'}}>12313</Text></Button>
          <Button uppercase={false} icon="email"><Text style={{textAlign: 'left'}}>Email</Text></Button>
        </View>
      </View>
      <View style={{ padding: 12 }}>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>Follow us</Text>
        <View style={{ flexDirection: "row", right: 16 }}>
          <Button icon="facebook" />
          <Button icon="pinterest" />
        </View>
      </View>
    </View>
  );
};
