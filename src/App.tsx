import React from 'react';
import { StatusBar } from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

import COLORS from '../src/styles/theme'
import Routes from 'routes';
import Login from './screens/Auth/Login'

const App: React.FC = () => {
    return (
        <ThemeProvider theme={COLORS}>
            <NavigationContainer>
                <StatusBar
                    barStyle="dark-content"
                    translucent
                    backgroundColor="transparent"
                />
                    <Routes />
            </NavigationContainer>
        </ThemeProvider>
    );
}

export default App;
