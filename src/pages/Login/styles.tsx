/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { theme } from '../../config/theme';

export const styles = StyleSheet.create({
    container: {
        width: responsiveWidth(100),
        height: responsiveHeight(100),
        backgroundColor: theme.colors.white,
        paddingVertical: 20,
        paddingHorizontal: 35,
    },
    content: {
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    textPrimary: {
        fontSize: 20,
        fontFamily: theme.fonts.UbuntuRegular,
        color: theme.colors.button_actived,
    },
    textSecondary: {
        fontSize: 24,
        fontFamily: theme.fonts.UbuntuMedium,
        color: theme.colors.button_actived_text,
    },
    textMain: {
        fontSize: 30,
        fontFamily: theme.fonts.UbuntuBold,
        textAlign: 'center',
        marginTop: 70,
        marginBottom: 40,
    },
    error: {
        fontSize: 17,
        color: theme.colors.red,
        textAlign: 'center',
    },
    inputBox: {
        width: '100%',
        marginTop: 20,
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.black,
        fontSize: 17,
        fontFamily: theme.fonts.RobotoRegular,
        color: theme.colors.black,
    },
    inputText: {
        fontSize: 23,
        fontFamily: theme.fonts.RobotoRegular,
    },
    buttonBox: {
        width: 200,
        height: 40,
        backgroundColor: theme.colors.button_actived,
        alignSelf: 'center',
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 17,
        color: theme.colors.white,
    },
});
