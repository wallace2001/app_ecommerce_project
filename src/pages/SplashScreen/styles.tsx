/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { theme } from '../../config/theme';

export const styles = StyleSheet.create({
    container: {
        width: responsiveWidth(100),
        height: responsiveHeight(100),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.button_actived,
    },
    content: {
        width: responsiveWidth(100),
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textMain: {
        fontSize: 30,
        fontFamily: theme.fonts.UbuntuRegular,
        color: theme.colors.white,
    },
    textSecondary: {
        fontSize: 34,
        fontFamily: theme.fonts.UbuntuMedium,
        color: theme.colors.button_actived_text,
    },
});
