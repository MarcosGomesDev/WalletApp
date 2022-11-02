import React from 'react';
import { StatusBar, View } from 'react-native';
import {ThemeProvider} from 'styled-components/native';

import COLORS from '../src/styles/theme'

import {Login} from './screens/Login'

const App: React.FC = () => {
    return (
        <ThemeProvider theme={COLORS}>
            <StatusBar
                barStyle="dark-content"
                translucent
                backgroundColor="transparent"
            />
            <View>
                <Login />
            </View>
        </ThemeProvider>
    );
}

export default App;
