import React, { useContext } from "react";
import { Image, Text, Pressable, View, FlatList } from "react-native";
import { IconButton } from "react-native-paper";
import { AppContext } from "./../../store/app-context";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-root-toast";

function RenderListItem({ item, style, onPress }) {
  const appCtx = useContext(AppContext);
  return (
    <Pressable
      onPress={onPress}
      style={[
        {
          borderRadius: 6,
          margin: 8,
          paddingBottom: 10,
          height: 400,
          backgroundColor: "#f8f8f8",
        },
        style,
      ]}
    >
      <IconButton
        style={{ position: "absolute", right: -20, top: -20 }}
        icon="plus-circle"
        size={28}
        onPress={() => {
          appCtx.addToCart(item.id, item.price);
          Toast.show("Added to Cart!", {
            duration: Toast.durations.LONG,
          });
        }}
      />
      <View style={{ flex: 3, alignItems: "center", paddingTop: 10 }}>
        <Image
          style={{
            margin: 12,
            width: undefined,
            height: "90%",
            aspectRatio: 1,
            resizeMode: "contain",
          }}
          source={{
            uri: item.image,
          }}
        />
      </View>
      <View style={{ flex: 4 }}>
        <Text style={{ margin: 12, padding: 6, fontSize: 16 }}>
          {item.description.length < 60
            ? `${item.description}`
            : `${item.description.substring(0, 57)}...`}
        </Text>
      </View>
      <Text
        style={{ margin: 12, padding: 6, fontSize: 18, fontWeight: "bold" }}
      >
        ${item.price}
      </Text>
    </Pressable>
  );
}

export default function SpecialCategory({
  categoryName,
  isHorizontalList,
  start,
  end,
}) {
  const appCtx = useContext(AppContext);
  const navigation = useNavigation();
  return (
    <View style={{ paddingBottom: 40 }}>
      <Text style={{ fontWeight: "bold", fontSize: 22, padding: 18 }}>
        {categoryName}
      </Text>

      {isHorizontalList ? (
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={appCtx.allItems.slice(start, end)}
          renderItem={({ item }) => (
            <RenderListItem
              item={item}
              style={{
                maxWidth: 180,
              }}
              onPress={() =>
                navigation.navigate("DetailsScreen", { id: item.id })
              }
            />
          )}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "flex-start",
          }}
        >
          {appCtx.allItems.slice(start, end).map((item) => (
            <RenderListItem
              key={item.id}
              onPress={() =>
                navigation.navigate("DetailsScreen", { id: item.id })
              }
              item={item}
              style={{ width: "45%", height: 400 }}
            />
          ))}
        </View>
      )}
    </View>
  );
}
