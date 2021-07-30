/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { useContext } from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { theme } from '../../config/theme';
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

export const Product = ({item}: PropsProduct) => {
    const {handleSaveProducts} = useContext(WebContext);

    const handleSave = () => {
        handleSaveProducts(item);
    };

    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <Image style={styles.image} source={item.image} />
                <View style={styles.info}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.price}>R$ {item.price}</Text>
                </View>
            </View>
            <TouchableOpacity activeOpacity={0.7} onPress={handleSave} style={styles.cart}>
                <Icon name="shopping-cart" color={theme.colors.button_actived_text} size={17} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: 20,
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: theme.colors.white,
        marginBottom: 10,
        borderRadius: 5,
    },
    left: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    image: {
        width: 76,
        height: 76,
    },
    name: {
        maxWidth: 200,
        fontSize: 16,
        fontFamily: theme.fonts.RobotoRegular,
        color: theme.colors.black,
    },
    price: {
        maxWidth: 200,
        fontSize: 16,
        fontFamily: theme.fonts.RobotoRegular,
        color: theme.colors.black,
    },
    info: {
        justifyContent: 'space-between',
    },
    cart: {
        width: 50,
        height: 50,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
