/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { theme } from '../config/theme';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Home } from '../pages/Home';
import { Cart } from '../pages/Cart';
import { Profile } from '../pages/Profile';
import { useContext } from 'react';
import { WebContext } from '../context/Web';
import { Login } from '../pages/Login';

export const AppTab = createBottomTabNavigator();

export const AuthRoutes = () => {
    const {productsCart, profile} = useContext(WebContext);
    console.log(profile);
    return (
        <AppTab.Navigator
            tabBarOptions={{
                activeTintColor: theme.colors.button_actived_text,
                inactiveBackgroundColor: theme.colors.white,
                labelPosition: 'below-icon',
                style: {
                    height: 60,
                    paddingBottom: 2,
                },
            }}
        >
            <AppTab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: (({size, color}) => (
                        <Icon
                            name="home"
                            size={size}
                            color={color}
                        />
                    )),
                }}
            />
            <AppTab.Screen
                name="Carrinho"
                component={Cart}
                options={{
                    tabBarIcon: (({size, color}) => (
                        <Icon
                            name="shopping-cart"
                            size={size}
                            color={color}
                        />
                    )),
                    tabBarBadge: productsCart.length,
                }}
            />
                <AppTab.Screen
                    name="Perfil"
                    component={profile.name !== '' ? Profile : Login}
                    options={{
                        tabBarIcon: (({size, color}) => (
                            <Icon
                                name="user-alt"
                                size={size}
                                color={color}
                            />
                        )),
                    }}
                />
        </AppTab.Navigator>
    );
};
