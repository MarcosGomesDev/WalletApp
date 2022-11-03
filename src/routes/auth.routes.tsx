import React from 'react';
import { View } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Register from 'screens/Auth/Register';
import Login from 'screens/Auth/Login';
import ForgotPassword from 'screens/Auth/ForgotPassword';

const {Navigator, Screen} = createNativeStackNavigator()

const AuthRoutes: React.FC = () => {
    return (
        <Navigator
            initialRouteName='Register'
            screenOptions={{
                headerShown: false
            }}
        >
            <Screen name="Login" component={Login} />
            <Screen name="Register" component={Register} />
            <Screen name="ForgotPassword" component={ForgotPassword} />
        </Navigator>
    );
}

export default AuthRoutes;
