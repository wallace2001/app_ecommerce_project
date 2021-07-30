/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, {
    useAnimatedStyle,
    interpolate,
    Extrapolate,
} from 'react-native-reanimated';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import { theme } from '../../config/theme';
import { WebContext } from '../../context/Web';
import Logo from '../../assets/log.png';

export const Header: React.FC = () => {
    const {scrollY} = useContext(WebContext);

    const containerStyle = useAnimatedStyle(() => {
        return {
            height: interpolate(
                scrollY.value,
                [0, 350],
                [0, 100],
                Extrapolate.CLAMP,
            ),
        };
    });

    const imageStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(
                scrollY.value,
                [0, 350],
                [0, 1],
                Extrapolate.CLAMP,
            ),
        };
    });

    return (
        <Animated.View style={[styles.container, containerStyle]}>
            <Animated.Image style={[styles.image, imageStyle]} source={Logo} />
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Visite meu site</Text>
                <Text style={styles.headerContent}>wallaceportfolio.com.br</Text>
            </View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: responsiveWidth(100),
        height: 100,
        paddingHorizontal: 40,
        backgroundColor: theme.colors.background,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    image: {
        width: 70,
        height: 70,
    },
    title: {
        fontSize: 25,
        fontFamily: theme.fonts.UbuntuBold,
        color: theme.colors.white,
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 17,
        color: theme.colors.white,
        fontFamily: theme.fonts.UbuntuRegular,
    },
    headerContent: {
        fontSize: 20,
        color: theme.colors.white,
        fontFamily: theme.fonts.UbuntuMedium,
    },
});
