/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { useContext } from 'react';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated';
import { styles } from './styles';
import { Swipeable } from '../../components/Swipeable';
import { WebContext } from '../../context/Web';

interface PropsProduct{
    item: {
        id: string;
        name: string;
        price: number;
        score: number;
        image: any;
    };
}

export const Cart = () => {
    const {productsCart, scrollHandler, cartValue} = useContext(WebContext);

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
                <View style={styles.left}>
                    <Text style={styles.title}>Carrinho</Text>
                    <Text style={styles.text}>Para remover um produto do seu carrinho, basta arrastar-lo para a direita.</Text>
                </View>
            </View>
            {productsCart.length === 0 ? (
                <View style={styles.cartEmpty}>
                    <Text style={styles.titleEmpty}>Seu carrinho está vazio</Text>
                </View>
            ) : (
                <ScrollView style={styles.flatlist}>
                    {productsCart.map((item: any, index: number) => {
                        return (
                            <Swipeable index={index} key={index} item={item}/>
                        );
                    })}
                </ScrollView>
            )}
            <View style={styles.finish}>
                <View style={styles.info}>
                    <Text style={styles.textInfo}>Frete</Text>
                    <Text style={styles.textInfo}>R$ {cartValue.shipping}</Text>
                </View>
                <View style={styles.info}>
                    <Text style={styles.textInfo}>Total</Text>
                    <Text style={styles.textInfo}>R$ {cartValue.total}</Text>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>Finalizar</Text>
                </TouchableOpacity>
            </View>
        </Animated.ScrollView>
    );
};
