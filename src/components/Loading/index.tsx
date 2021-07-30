/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { theme } from '../../config/theme';
import { WebContext } from '../../context/Web';

export const Loading = () => {
    const {loading} = useContext(WebContext);

    return (
        <View
            style={[styles.container, loading ? {display: 'flex'} : {display: 'none'}]}>
            <Text>...Carregando</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: responsiveWidth(100),
        height: responsiveHeight(100),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.white,
    },
});
