import AppContextProvider from "./store/app-context";
import HomeScreen from "./screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HeaderButtons from "./components/ui/HeaderButtons";
import CartScreen from "./screens/CartScreen";
import DetailsScreen from "./screens/DetailsScreen";
import { RootSiblingParent } from "react-native-root-siblings";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <RootSiblingParent>
      <AppContextProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={({ navigation }) => ({
                headerTitle: "iSports",
                headerRight: () => (
                  <HeaderButtons
                    cartButtonAction={() => navigation.navigate("CartScreen")}
                  />
                ),
              })}
            />
            <Stack.Screen
              name="CartScreen"
              component={CartScreen}
              options={{ headerTitle: "Cart" }}
            />
            <Stack.Screen
              name="DetailsScreen"
              component={DetailsScreen}
              options={({ navigation }) => ({
                headerTitle: "Product Details",
                headerRight: () => (
                  <HeaderButtons
                    cartButtonAction={() => navigation.navigate("CartScreen")}
                  />
                ),
              })}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </AppContextProvider>
    </RootSiblingParent>
  );
}
