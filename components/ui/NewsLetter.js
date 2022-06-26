import { useState } from "react";
import { TextInput } from "react-native-paper";
import { View, Text } from "react-native";

const NewsLetter = () => {
  const [text, setText] = useState("");

  return (
    <View style={{ padding: 20, flex: 1 }}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontWeight: "bold", padding: 8, fontSize: 18 }}>
          Sign up for our newsletter
        </Text>
        <Text style={{ padding: 8, fontSize: 16 }}>
          Stay up to date with the latest products and offers
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <TextInput
          mode="outlined"
          label="Email"
          value={text}
          onChangeText={(text) => setText(text)}
        />
      </View>
    </View>
  );
};

export default NewsLetter;
