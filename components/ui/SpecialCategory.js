import React, { useContext } from "react";
import { Image, Text, View, FlatList } from "react-native";
import { IconButton } from "react-native-paper";
import { AppContext } from "./../../store/app-context";

function RenderListItem({ item, style }) {
  return (
    <View
      style={[
        {
          backgroundColor: "#f8f8f8",
          borderRadius: 6,
          margin: 8,
          paddingBottom: 10,
          height: 400,
          maxWidth: 180,
        },
        style,
      ]}
    >
      <IconButton
        style={{ position: "absolute", right: -20, top: -20 }}
        icon="plus-circle"
        size={28}
        onPress={() => console.log("Pressed")}
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
    </View>
  );
}

export default function SpecialCategory({ categoryName, isHorizontalList, start, end }) {
  const appCtx = useContext(AppContext);
  return (
    <View style={{ paddingBottom: 40 }}>
      <Text style={{ fontWeight: "bold", fontSize: 22, padding: 18 }}>
        {categoryName}
      </Text>

      {isHorizontalList ? (
        <FlatList
          horizontal={true}
          data={appCtx.allItems.slice(start, end)}
          renderItem={RenderListItem}
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
            <RenderListItem item={item} style={{ width: "50%" }} />
          ))}
        </View>
      )}
    </View>
  );
}
