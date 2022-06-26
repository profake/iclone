import { useState } from "react";
import { TextInput } from "react-native-paper";
import { View, Text } from "react-native";

const Motto = () => {
  const [text, setText] = useState("");

  return (
    <View style={{ padding: 20, backgroundColor: "#f3f3f3", flex: 1 }}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={{ textAlign:'center', fontWeight: "bold", padding: 8, fontSize: 18 }}>
          We are special
        </Text>
        <Text style={{textAlign:'center', padding: 8, fontSize: 16 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.{"\n\n"}Vestibulum ornare et mauris eu tristique. Integer a convallis risus. Nunc facilisis augue vitae tempor scelerisque. Vivamus non lacinia sem, ut consequat turpis. Praesent semper metus turpis, a interdum augue pharetra a.{"\n\n"} Nam vel mollis odio. Maecenas et nisi convallis, faucibus est eget, porttitor ipsum. Cras magna elit, tincidunt quis mattis tempor, mattis sed eros. Suspendisse potenti. In eget tortor ac elit viverra bibendum. Pellentesque in leo molestie, vehicula est id, molestie est. Morbi tellus nisl, imperdiet nec ligula in, commodo varius elit. Curabitur vestibulum vehicula dapibus.
        </Text>
      </View>
    </View>
  );
};

export default Motto;
