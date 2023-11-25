import React from 'react';
import { ColorValue, StatusBarStyle, TouchableOpacity, StyleProp, StyleSheet, View, ViewStyle, Image } from 'react-native';
import { boxShadow } from '../../../styles/Mixins';
import { spacing } from '../../../styles/spacing';
import colors from '../../../utility/colors';
import { APP_PADDING_HORIZONTAL } from '../../../utility/constants';
import CommonTitle from '../CommonTitle';
import BackButton from '../buttons/BackButton';
import { Images } from '../../../utility/imagePaths';
import RegularText from '../RegularText';
import { textScale } from '../../../styles/responsiveStyles';
import { goBack } from '../../../utility/commonFunctions';
import { fontNames } from '../../../styles/typography';

interface CommonHeaderProps {
    backText?: string
    hideBack?: boolean
    backgroundColor?: ColorValue
    backArrowTintColor?: ColorValue
    onPressBack?: () => void
    title?: string
    rightComponent?: any
    mainContainerStyle?: StyleProp<ViewStyle>
}

const CommonHeader = ({
    backText,
    backgroundColor,
    mainContainerStyle,
    rightComponent,
    hideBack,
    backArrowTintColor,
    onPressBack,
    title
}: CommonHeaderProps) => {

    function onBack() {
        if (onPressBack) onPressBack()
        else goBack()
    }

    return (
        <View style={[styles.mainContainer, { backgroundColor: backgroundColor ? backgroundColor : colors.theme }, mainContainerStyle]} >
            <CommonTitle title={title || ''} style={styles.title} />
            {
                hideBack != true &&
                <TouchableOpacity style={styles.backBtnContainer} onPress={() => onBack()} >
                    <Image source={Images.IMG_RIGHT_ARROW} style={[styles.iconStyle, { tintColor: backArrowTintColor ? backArrowTintColor : colors.white }]} />
                    <RegularText style={[styles.backText, { color: backArrowTintColor ? backArrowTintColor : colors.white }]} >{backText ? backText : 'Back'}</RegularText>
                </TouchableOpacity>
            }
            {
                rightComponent && rightComponent
            }
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        paddingHorizontal: APP_PADDING_HORIZONTAL,
        paddingVertical: spacing.PADDING_12,
        ...boxShadow(),
        minHeight: spacing.HEIGHT_58,
    },
    title: {
        position: 'absolute',
        alignSelf: "center",
        width: '100%',
        textAlign: 'center',
        left: APP_PADDING_HORIZONTAL,
        color: colors.white,
        fontFamily: fontNames.FONT_FAMILY_BOLD
    },
    backBtnContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    iconStyle: {
        transform: [{ rotate: '180deg' }],
    },
    backText: {
        fontSize: textScale(13),
        marginLeft: spacing.MARGIN_6,
    },
})

export default CommonHeader;