/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import {RectButton} from 'react-native-gesture-handler';
import {View, Text, TextInput, KeyboardAvoidingView, Platform} from 'react-native';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated';
import {styles} from './styles';
import { useState } from 'react';
import { useContext } from 'react';
import { WebContext } from '../../context/Web';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../../config/theme';

export const Login = () => {
    const [profileCreate, setProfileCreate] = useState({
        name: '',
        email: '',
    });

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

    const [error, setError] = useState(false);
    const navigation = useNavigation();
    const {handleSaveProfileAccount, profile} = useContext(WebContext);

    const handleCreateAccount = () => {
        handleSaveProfileAccount(profileCreate);
        console.log(profile);
        if (profile.name === '' || profile.email === ''){
            setError(true);
            return;
        }

        if (profile.name !== ''){
            navigation.navigate('Home');
        }

    };

    return (
        <Animated.View style={[containerStyles]}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <View style={styles.content}>
                    <Text style={styles.textPrimary}>
                        Game
                        <Text style={styles.textSecondary}>
                            Store
                        </Text>
                    </Text>
                </View>
                <Text style={styles.textMain}>Entrar</Text>

                {error && <Text style={styles.error}>Erro ao criar conta</Text>}

                <View style={styles.inputBox}>
                    <TextInput
                        onChange={(e: any) => setProfileCreate({email: profileCreate.email, name: e.nativeEvent.text})}
                        placeholderTextColor={theme.colors.black} style={styles.input} placeholder="Digite seu nome" />
                </View>
                <View style={styles.inputBox}>
                    <TextInput
                        onChange={(e: any) => setProfileCreate({email: e.nativeEvent.text, name: profileCreate.name})}
                        placeholderTextColor={theme.colors.black} style={styles.input} placeholder="Digite seu email" />
                </View>
                <RectButton onPress={handleCreateAccount} style={styles.buttonBox}>
                    <Text style={styles.buttonText}>Confirmar</Text>
                </RectButton>
            </KeyboardAvoidingView>
        </Animated.View>
    );
};
