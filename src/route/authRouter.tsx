/* eslint-disable prettier/prettier */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { AuthRoutes } from './tab.route';

const {Screen, Navigator} = createStackNavigator();

export const AppRouter = () => {
    return (
            <Navigator headerMode="none" screenOptions={{
                cardStyle: {
                    backgroundColor: 'transparent',
                },
            }}>
                <Screen
                    name="Home"
                    component={AuthRoutes}
                />
            </Navigator>
    );
}