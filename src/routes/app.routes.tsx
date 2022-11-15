import React from 'react';
import { View } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabRoutes from './tab.routes';
import Profile from 'screens/App/Profile';
import AddCart from 'screens/App/AddCart';
import DetailsCard from 'screens/App/DetailsCard';
import Transfer from 'screens/App/Transfer';

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
            <Screen name="AddCart" component={AddCart} />
            <Screen name="DetailsCard" component={DetailsCard} />
            <Screen name="Transfer" component={Transfer} />
        </Navigator>
    );
}

export default AppRoutes;
