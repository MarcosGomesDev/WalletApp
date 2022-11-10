import React from 'react';
import { View } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Profile from 'screens/App/Profile';
import TabRoutes from './tab.routes';

const {Navigator, Screen} = createNativeStackNavigator()

const AppRoutes: React.FC = () => {
    return (
        <Navigator
            initialRouteName='TabRoutes'
            screenOptions={{
                headerShown: false
            }}
        >
            <Screen name="TabRoutes" component={TabRoutes} />
            <Screen name="Profile" component={Profile} />
        </Navigator>
    );
}

export default AppRoutes;
