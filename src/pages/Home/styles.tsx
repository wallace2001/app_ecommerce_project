/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import { theme } from '../../config/theme';
import {
    responsiveWidth,
  } from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background_home,
    },
    containerSlider: {
        width: '100%',
        maxHeight: 400,
        backgroundColor: theme.colors.white,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    order: {
        width: responsiveWidth(100),
        height: 'auto',

        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: theme.colors.white,
    },
    titleOrder: {
        fontSize: 15,
        fontFamily: theme.fonts.UbuntuMedium,
        color: theme.colors.black,
    },
    buttonOrder: {
        width: 100,
        height: 40,
        borderRadius: 20,
        backgroundColor: theme.colors.background_orders,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        marginHorizontal: 5,
    },
    textButton: {
        fontSize: 17,
        color: theme.colors.black,
        fontFamily: theme.fonts.RobotoRegular,
    },
    boxButtons: {
        flexDirection: 'row',
    },
    buttonChange: {
        width: 100,
        height: 100,
        borderRadius: 10,
        backgroundColor: theme.colors.background_orders,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        marginVertical: 10,
    },
    titleProducts: {
        fontSize: 15,
        fontFamily: theme.fonts.UbuntuMedium,
        color: theme.colors.black,
    },
    actived: {
        backgroundColor: theme.colors.button_actived,
    },
    textActived: {
        color: theme.colors.button_actived_text,
    },
});
