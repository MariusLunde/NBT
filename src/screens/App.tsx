import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import Home from "./Home";
import Detail from "./Detail";

const Stack = createStackNavigator();

export default function App() {


    return (
      <View style={styles.container}>
          <StatusBar style={"light"} />
          <Stack.Navigator>
              <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}></Stack.Screen>
              <Stack.Screen name="Detail" component={Detail} options={{ headerShown: false }}></Stack.Screen>
          </Stack.Navigator>
      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
