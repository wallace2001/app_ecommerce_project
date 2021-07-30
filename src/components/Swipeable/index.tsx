/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SwipeableItem from 'react-native-gesture-handler/Swipeable';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import { theme } from '../../config/theme';
import { useContext } from 'react';
import { WebContext } from '../../context/Web';

interface PropsProduct{
    item: {
        id: string;
        name: string;
        price: number;
        score: number;
        image: any;
        quantity?:number;
    };
    index: number;
}

export const Swipeable = ({item, index}: PropsProduct) => {
    const {handleRemoveProducts, handleAddQuantity, handleRemoveQuantity} = useContext(WebContext);

    return (
        <SwipeableItem
            renderLeftActions={() => {
                return (
                    <TouchableOpacity onPress={() => handleRemoveProducts(item.id)} style={styles.delete}>
                        <Icon name="trash" size={33} color={theme.colors.white} />
                    </TouchableOpacity>
                );
            }}
            >
            <View style={styles.container}>
                <View style={styles.left}>
                    <Image style={styles.image} source={item.image} />
                    <View style={styles.info}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.price}>R$ {item.price}</Text>
                    </View>
                </View>
                <View style={styles.quantity}>
                    <TouchableOpacity onPress={() => handleAddQuantity(index)}>
                        <Icon name="plus" size={15} />
                    </TouchableOpacity>
                    <Text style={styles.textQuantity}>{item?.quantity}</Text>
                    <TouchableOpacity onPress={() => handleRemoveQuantity(index)}>
                        <Icon name="minus" size={15} />
                    </TouchableOpacity>
                </View>
            </View>
        </SwipeableItem>
    );
};

const styles = StyleSheet.create({
    container: {
        width: responsiveWidth(100),
        flex: 1,
        flexDirection: 'row',
        // borderBottomColor: theme.colors.black,
        // borderBottomWidth: 1,
        // paddingHorizontal: 10,
        backgroundColor: theme.colors.white,
        marginBottom: 10,
        paddingVertical: 20,
        justifyContent: 'space-between',
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
    delete: {
        width: responsiveWidth(50),
        paddingVertical: 20,
        backgroundColor: theme.colors.red,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    quantity: {
        paddingHorizontal: 20,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textQuantity: {
        fontSize: 17,
    },
});
