import React from 'react';
import { StyleSheet, TouchableOpacity, ViewStyle, StyleProp, ColorValue, TextStyle } from 'react-native';
import { textScale } from '../../../styles/responsiveStyles';
import { spacing } from '../../../styles/spacing';
import colors from '../../../utility/colors';
import { goBack } from '../../../utility/commonFunctions';
import { Images } from '../../../utility/imagePaths';
import CommonImage from '../CommonImage';
import RegularText from '../RegularText';

interface BackButtonProps {
    mainContainerStyle?: StyleProp<ViewStyle>
    text?: string
    onBack?: () => void
    arrowStyle?: StyleProp<ViewStyle>
    backArrowTintColor?: ColorValue
    textStyle?: StyleProp<TextStyle>
}


const BackButton = ({ mainContainerStyle, text, onBack, arrowStyle, backArrowTintColor, textStyle }: BackButtonProps) => {
    function onPressBack() {
        if (onBack) {
            onBack()
        } else {
            goBack()
        }
    }

    return (
        <TouchableOpacity style={[styles.mainContainer, mainContainerStyle]} onPress={() => onPressBack()} >
            <CommonImage source={Images.IMG_RIGHT_ARROW} style={[styles.iconStyle, arrowStyle as any, { tintColor: backArrowTintColor ? backArrowTintColor : "" }]} />
            <RegularText style={[styles.text, { color: backArrowTintColor ? backArrowTintColor : colors.grey900 }, textStyle]} >{text ? text : 'Back'}</RegularText>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    iconStyle: {
        transform: [{ rotate: '180deg' }],
    },
    text: {
        fontSize: textScale(13),
        marginLeft: spacing.MARGIN_6
    },
})

export default BackButton;