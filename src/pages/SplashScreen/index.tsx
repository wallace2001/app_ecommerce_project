/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Text, View } from 'react-native';
import {SafeAreaView} from 'react-native';
import {styles} from './styles';

export const SplashScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.textMain}>
                    Game
                    <Text style={styles.textSecondary}>
                        Store
                    </Text>
                </Text>
            </View>
        </SafeAreaView>
    );
};
