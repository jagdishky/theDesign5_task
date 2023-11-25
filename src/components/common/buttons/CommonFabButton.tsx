import React from 'react';
import { StyleProp, StyleSheet, TouchableOpacity, ViewStyle, ImageStyle, ActivityIndicator } from 'react-native';
import { textScale } from '../../../styles/responsiveStyles';
import { spacing } from '../../../styles/spacing';
import { fontNames } from '../../../styles/typography';
import colors from '../../../utility/colors';
import { APP_PADDING_HORIZONTAL } from '../../../utility/constants';
import CommonImage from '../CommonImage';
import RegularText from '../RegularText';

interface CommonFabButtonProps {
    onPressButton?: () => void
    title?: string
    testID?: string
    titleStyle?: StyleProp<ViewStyle>
    leftImage?: any
    leftImageStyle?: StyleProp<ImageStyle>
    rightImage?: any
    disabled?: boolean
    rightImageStyle?: StyleProp<ImageStyle>
    mainContainerStyle?: StyleProp<ViewStyle>
    loading?: boolean
}

const CommonFabButton = ({
    onPressButton = () => { },
    title,
    titleStyle,
    leftImage,
    leftImageStyle,
    rightImage,
    rightImageStyle,
    mainContainerStyle,
    disabled,
    testID,
    loading
}: CommonFabButtonProps) => {
    return (
        <TouchableOpacity
            onPress={() => onPressButton()}
            disabled={disabled}
            testID={testID}
            style={[styles.mainContainer, disabled && { opacity: 0.6 }, mainContainerStyle]} >
            {
                loading ? <ActivityIndicator size={'large'} color={colors.white} /> :
                    <>
                        {leftImage && <CommonImage source={leftImage} style={leftImageStyle} />}
                        {title && <RegularText style={[styles.title, titleStyle]} >{title}</RegularText>}
                        {rightImage && <CommonImage source={rightImage} style={rightImageStyle} />}
                    </>
            }

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        position: "absolute",
        bottom: spacing.MARGIN_30,
        right: APP_PADDING_HORIZONTAL,
        borderRadius: spacing.RADIUS_90,
        // padding: spacing.PADDING_16,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: "center",
        minWidth: spacing.WIDTH_70,
        minHeight: spacing.WIDTH_70,
        backgroundColor: colors.theme
    },
    title: {
        marginLeft: spacing.MARGIN_8,
        color: colors.white,
        fontFamily: fontNames.FONT_FAMILY_MEDIUM,
        fontSize: textScale(15)
    },
})

export default CommonFabButton;