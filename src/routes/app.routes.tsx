import React from 'react';
import { View } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

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
        </Navigator>
    );
}

export default AppRoutes;
