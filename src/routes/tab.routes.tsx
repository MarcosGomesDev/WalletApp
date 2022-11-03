import React from 'react';
import { View } from 'react-native';
import theme from 'styles/theme';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Bell, ChartBar, CreditCard, GearSix, Wallet} from 'phosphor-react-native';

import WalletTab from 'screens/Tab/WalletTab';
import Notification from 'screens/Tab/Notification';
import Report from 'screens/Tab/Report';
import Settings from 'screens/Tab/Settings';

const {Navigator, Screen} = createBottomTabNavigator()

const TabRoutes: React.FC = () => {
    return (
        <Navigator
            initialRouteName='Wallet'
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: true,
                tabBarInactiveTintColor: theme.COLORS.GRAY4,
                tabBarActiveTintColor: theme.COLORS.GRAY1,
                tabBarStyle: {
                    paddingBottom: 7,
                    backgroundColor: theme.COLORS.PURPLEDARK3
                },
                tabBarLabelStyle: {
                    fontSize: 11,
                    color: theme.COLORS.GRAY3
                }
            }}
        >
            <Screen
                name="Wallet"
                component={WalletTab}
                options={{
                    tabBarLabel: "Home",
                    tabBarLabelStyle: {color: theme.COLORS.WHITE},
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
            <Screen
                name="Report"
                component={Report}
                options={{
                    tabBarLabel: "Relatório",
                    tabBarLabelStyle: {color: theme.COLORS.WHITE},
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
            <Screen
                name="Notification"
                component={Notification}
                options={{
                    tabBarLabel: "Notificações",
                    tabBarLabelStyle: {color: theme.COLORS.WHITE},
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
            <Screen
                name="Settings"
                component={Settings}
                options={{
                    tabBarLabel: "Configurações",
                    tabBarLabelStyle: {color: theme.COLORS.WHITE},
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
        </Navigator>
    );
}

export default TabRoutes;
