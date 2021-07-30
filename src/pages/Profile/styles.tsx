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
        height: 400,
        backgroundColor: theme.colors.button_actived,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 170,
        height: 170,
        resizeMode: 'contain',
        borderRadius: 200,
    },
    titleName: {
        fontSize: 23,
        color: theme.colors.white,
        marginTop: 20,
    },
    profile: {
        justifyContent: 'center',
        paddingHorizontal: 40,
        paddingVertical: 20,
        backgroundColor: theme.colors.white,
        marginTop: 20,
    },
    profileText: {
        fontSize: 22,
        fontFamily: theme.fonts.RobotoRegular,
    },
    info: {
        paddingVertical: 20,
    },
    title: {
        fontSize: 18,
        fontFamily: theme.fonts.RobotoMedium,
    },
    text: {
        fontSize: 16,
        fontFamily: theme.fonts.RobotoRegular,
    },
    exit: {
        width: responsiveWidth(100),
    },
    button: {
        width: 200,
        height: 40,
        backgroundColor: theme.colors.button_actived,
        justifyContent: 'center',
        alignItems: 'center',
        // alignSelf: 'center',
        borderRadius: 4,
    },
    textButton: {
        fontSize: 16,
        fontFamily: theme.fonts.UbuntuRegular,
        color: theme.colors.button_actived_text,
    },
});
