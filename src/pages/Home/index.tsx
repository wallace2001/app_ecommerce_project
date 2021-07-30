/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated';

import { ImageCarousel } from '../../components/ImageCarousel';
import { Products } from '../../components/Products';
import { useContext } from 'react';
import { WebContext } from '../../context/Web';
import { useEffect } from 'react';

export const Home = () => {

    const containerOpacity = useSharedValue(0);

    useEffect(() => {
        setTimeout(() => {
            containerOpacity.value = withTiming(1, {duration: 500});
        }, 0.5 * 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const containerStyles = useAnimatedStyle(() => {
        return {
            opacity: containerOpacity.value,
        };
    });

    const {
        scrollHandler,
        handleOrderDown,
        handleOrderUp,
        orderActive,
    } = useContext(WebContext);

    return (
        <Animated.ScrollView
            showsVerticalScrollIndicator={false}
            onScroll={scrollHandler}
            style={[styles.container, containerStyles]}>
            <View style={styles.containerSlider}>
                <ImageCarousel />
            </View>
            <View style={styles.order}>
                <Text style={styles.titleOrder}>Ordernar por</Text>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={handleOrderDown}
                        style={[styles.buttonOrder, orderActive.down && styles.actived]}>
                        <Text style={orderActive.down ? styles.textActived : {color: '#000'}}>Menor preço</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        activeOpacity={0.7}
                        onPress={handleOrderUp}
                        style={[styles.buttonOrder, orderActive.up && styles.actived]}>
                        <Text style={orderActive.up ? styles.textActived : {color: '#000'}}>Maior preço</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            <View>
                <Products title="Mais vendidos"/>
            </View>
        </Animated.ScrollView>
    );
};
