/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useCallback, useState } from 'react';
import {
    View,
    StyleSheet,
    Text,
    FlatList,
    Image,
    useWindowDimensions,
    TouchableOpacity,
    ImageBackground,
} from 'react-native';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import {ProductsMain} from '../../config/mainProducts';
import { theme } from '../../config/theme';
import { useContext } from 'react';
import { WebContext } from '../../context/Web';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MarioIcon from '../../assets/mario.png';

interface PropsProduct{
    item: {
        id: string;
        name: string;
        price: number;
        score: number;
        image: any;
    };
}

export const ImageCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const windowWidth = useWindowDimensions().width;
    const {handleSaveProducts} = useContext(WebContext);

    const onFlatlistUpdate = useCallback(({viewableItems}) => {
        if (viewableItems.length > 0) {
          setActiveIndex(viewableItems[0].index || 0);
        }
      }, []);

    return (
        <ImageBackground source={MarioIcon} style={styles.container}>
            <View style={styles.containerSlider}>
                <Text style={styles.title}>Ofertas</Text>
                    <FlatList
                        data={ProductsMain}
                        keyExtractor={({id}) => id}
                        renderItem={({item}: PropsProduct) => (
                            <View style={styles.sliderContainer}>
                                <View style={styles.productSlider}>
                                    <Image style={styles.image} source={item.image} />
                                    <View style={styles.info}>
                                        <Text lineBreakMode="tail" numberOfLines={1} style={styles.name}>{item.name}</Text>
                                        <Text style={styles.price}>R$ {item.price}</Text>
                                        <TouchableOpacity
                                            activeOpacity={0.7}
                                            onPress={() => handleSaveProducts(item)} style={styles.button}>
                                            <Icon name="plus" size={25} color={theme.colors.button_actived_text} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        )}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        snapToInterval={windowWidth - 0}
                        snapToAlignment={'center'}
                        decelerationRate={'fast'}
                        viewabilityConfig={{
                        viewAreaCoveragePercentThreshold: 50,
                        }}
                        onViewableItemsChanged={onFlatlistUpdate}
                    />
                    <View style={styles.dots}>
                        {ProductsMain.map((image, index) => (
                        <View
                            key={index}
                            style={[
                            styles.dot, {backgroundColor: index === activeIndex ? theme.colors.button_actived_text : '#fff'},
                    ]}
                />
                ))}
            </View>
        </View>
    </ImageBackground>
    );
};

export const styles = StyleSheet.create({
    container: {
        width: responsiveWidth(100),
        height: 'auto',
    },
    title: {
        fontSize: 23,
        color: theme.colors.white,
        fontFamily: theme.fonts.RobotoRegular,
        paddingHorizontal: 20,
        textAlign: 'left',
        paddingTop: 10,
    },
    image: {
        width: 150,
        height: 150,
        resizeMode: 'cover',
        borderRadius: 20,
    },
    sliderContainer: {
        width: responsiveWidth(100),
        paddingHorizontal: 20,
        height: 300,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    containerSlider: {
        width: '100%',
        maxHeight: 400,
        backgroundColor: theme.colors.background_slider,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    productSlider: {
        flexDirection: 'row',
    },
    info: {
        paddingHorizontal: 30,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    name: {
        fontSize: 20,
        fontFamily: theme.fonts.RobotoRegular,
        color: theme.colors.white,
        maxWidth: 200,
        marginBottom: 20,
    },
    price: {
        fontSize: 20,
        fontFamily: theme.fonts.RobotoRegular,
        color: theme.colors.white,
        marginBottom: 25,
    },
    dots: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
      },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 25,
        borderWidth: 1,
        backgroundColor: '#ededed',
        borderColor: '#c9c9c9',
        margin: 5,
    },
    button: {
        width: 100,
        height: 'auto',
        justifyContent: 'center',
        padding: 5,
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: theme.colors.white,
    },
    textButton: {
        fontSize: 15,
        color: theme.colors.button_actived_text,
    },
});
