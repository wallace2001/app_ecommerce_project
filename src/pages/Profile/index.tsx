/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useContext } from 'react';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import ProfileIcon from '../../assets/profile.jpg';
import { WebContext } from '../../context/Web';
import { styles } from './styles';

export const Profile = () => {
    const {profile, scrollHandler, handleExitAccount} = useContext(WebContext);
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

    return (
        <Animated.ScrollView
            showsVerticalScrollIndicator={false}
            onScroll={scrollHandler}
            style={[styles.container, containerStyles]}>
            <View style={styles.header}>
                <Image style={styles.image} source={ProfileIcon}/>
                <Text style={styles.titleName}>{profile.name}</Text>
            </View>
            <View style={styles.profile}>
                <Text style={styles.profileText}>Informações da conta</Text>
                <View style={styles.info}>
                    <Text style={styles.title}>Nome</Text>
                    <Text style={styles.text}>{profile.name}</Text>
                </View>
                <View style={styles.info}>
                    <Text style={styles.title}>E-mail</Text>
                    <Text style={styles.text}>{profile.email}</Text>
                </View>
                <View style={styles.exit}>
                    <TouchableOpacity activeOpacity={0.7} style={styles.button} onPress={handleExitAccount}>
                        <Text style={styles.textButton}>Sair</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Animated.ScrollView>
    );
};
