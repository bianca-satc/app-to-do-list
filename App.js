import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Appbar, Checkbox, List, PaperProvider } from "react-native-paper";
import Home from "./screens/home";
import Login from "./screens/Login";
import NewTask from "./screens/NewTask";

export default function App() {
  const Stack = createStackNavigator ();
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name = "Home" component={Home} />
          <Stack.Screen name = "Login" component={Login} />
          <Stack.Screen name = "NewTask" component={NewTask} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  listContainer: {
    marginHorizontal: 10,
  },
});
