import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import Home from "./src/screens/Home";
import Detail from "./src/screens/Detail";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {NavigationContainer} from "@react-navigation/native";
import React from "react";

const Stack = createStackNavigator();

export default function App() {

    return (
        <GestureHandlerRootView
            style={{ flex: 1, backgroundColor: '#09090E' }}
        >
            <NavigationContainer independent={true}>
                <StatusBar style={"light"} />
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}></Stack.Screen>
                    <Stack.Screen name="Detail" component={Detail} options={{ headerShown: false }}></Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
        </GestureHandlerRootView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
