/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppRouter} from './appRouter';

export const Router = () => {
    return (
        <NavigationContainer>
                <AppRouter />
        </NavigationContainer>
    );
}