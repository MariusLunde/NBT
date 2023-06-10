import React from 'react';
import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


import App from './src/screens/App';

function Main() {



    return (
            <GestureHandlerRootView
                style={{ flex: 1, backgroundColor: '#09090E' }}
            >
                <NavigationContainer independent={true}>
                    <App />
                </NavigationContainer>
            </GestureHandlerRootView>
    );
}

registerRootComponent(Main);
