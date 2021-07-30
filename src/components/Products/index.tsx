/* eslint-disable prettier/prettier */
import React from 'react';
import { useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import { theme } from '../../config/theme';
import { WebContext } from '../../context/Web';
import {Product} from '../Product';

interface PropsProducts{
    id: string;
    name: string;
    price: number;
    score: number;
    image: any;
}

interface Props{
    title: string;
    productsFiltered?: PropsProducts[];
}

export const Products = ({title, productsFiltered}: Props) => {
    const {products} = useContext(WebContext);

    return (
        <View style={styles.container}>
            <Text style={styles.titleProducts}>{title}</Text>
                {productsFiltered ? (
                    productsFiltered.map((item: any, index: number) => {
                        return (
                            <Product key={index} item={item} />
                        );
                    })
                ) : (
                    products.map((item: any, index: number) => {
                        return (
                            <Product key={index} item={item} />
                        );
                    })
                )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: responsiveWidth(100),
        height: 'auto',
        paddingVertical: 10,
        // paddingHorizontal: 10,
        // backgroundColor: theme.colors.white,
    },
    titleProducts: {
        fontSize: 15,
        fontFamily: theme.fonts.UbuntuMedium,
        color: theme.colors.black,
        paddingHorizontal: 10,
        backgroundColor: theme.colors.white,
        paddingVertical: 10,
        marginTop: 10,
    },
});
