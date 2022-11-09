import React from 'react';
import { View } from 'react-native';
import theme from 'styles/theme';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Bell, ChartBar, CreditCard, GearSix, Wallet} from 'phosphor-react-native';

import WalletTab from 'screens/Tab/WalletTab';
import Notification from 'screens/Tab/Notification';
import Report from 'screens/Tab/Report';
import Settings from 'screens/Tab/Settings';

const Tab = createBottomTabNavigator()

const TabRoutes: React.FC = () => {
    return (
        <Tab.Navigator
            initialRouteName='Wallet'
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarInactiveTintColor: theme.COLORS.GRAY4,
                tabBarActiveTintColor: theme.COLORS.GRAY1,
                tabBarStyle: {
                    paddingBottom: 7,
                    backgroundColor: theme.COLORS.PURPLEDARK3,
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    height: 70,
                    borderRadius: 30,
                },
            }}
        >
            <Tab.Screen
                name="Wallet"
                component={WalletTab}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View
                            style={{
                                marginTop: 5,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <Wallet
                                size={32}
                                weight={focused ? "fill" : "light"}
                                color={theme.COLORS.WHITE}
                            />
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="Report"
                component={Report}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View
                            style={{
                                marginTop: 5,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <ChartBar
                                size={32}
                                weight={focused ? "fill" : "light"}
                                color={theme.COLORS.WHITE}
                            />
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="Notification"
                component={Notification}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View
                            style={{
                                marginTop: 5,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <Bell
                                size={32}
                                weight={focused ? "fill" : "light"}
                                color={theme.COLORS.WHITE}
                            />
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="Settings"
                component={Settings}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View
                            style={{
                                marginTop: 5,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <GearSix
                                size={32}
                                weight={focused ? "fill" : "light"}
                                color={theme.COLORS.WHITE}
                            />
                        </View>
                    )
                }}
            />
        </Tab.Navigator>
    );
}

export default TabRoutes;
