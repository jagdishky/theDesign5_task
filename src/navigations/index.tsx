import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View } from 'react-native';
import { navigationRef } from '../NavigationService';
import * as Utils from '../utility';
import Feed from '../components/screens/feeds';
import BottomTab from './bottomTab'
const Stack = createStackNavigator();

function AppStack({ }) {
    return (
        <View style={{ flex: 1, }} >
            <NavigationContainer ref={navigationRef}  >
                <Stack.Navigator initialRouteName={Utils.Constants.KEY_BOTTOM_TAB_NAVIGATOR} screenOptions={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}>
                    <Stack.Screen name={Utils.Constants.KEY_BOTTOM_TAB_NAVIGATOR} component={BottomTab} />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    );
}

export default AppStack;