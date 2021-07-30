/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import { theme } from '../../config/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background_home,
    },
    header: {
        width: responsiveWidth(100),
        height: 'auto',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: theme.colors.white,
    },
    left: {
        maxWidth: responsiveWidth(75),
    },
    title: {
        fontSize: 22,
        color: theme.colors.black,
        fontFamily: theme.fonts.UbuntuBold,
    },
    text: {
        fontSize: 15,
        color: theme.colors.black,
        fontFamily: theme.fonts.UbuntuRegular,
    },
    image: {
        width: 80,
        height: 80,
    },
    line: {
        width: responsiveWidth(100),
        height: 1,
        backgroundColor: theme.colors.black,
    },
    flatlist: {
        maxHeight: 500,
        marginTop: 20,
        // backgroundColor: theme.colors.white,
    },
    finish: {
        width: responsiveWidth(100),
        height: 'auto',
        backgroundColor: theme.colors.white,
        marginTop: 10,
    },
    info: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        paddingVertical: 5,
    },
    textInfo: {
        fontSize: 17,
        fontFamily: theme.fonts.RobotoRegular,
        color: theme.colors.black,
    },
    button: {
        width: 300,
        height: 40,
        backgroundColor: theme.colors.button_actived,
        alignSelf: 'center',
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    textButton: {
        fontSize: 18,
        color: theme.colors.white,
        fontFamily: theme.fonts.UbuntuRegular,
    },
    cartEmpty: {
        height: 200,
        backgroundColor: theme.colors.white,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleEmpty: {
        fontSize: 20,
    },
});
