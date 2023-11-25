import React, { useState } from 'react';
import {
    ColorValue,
    KeyboardTypeOptions,
    ReturnKeyTypeOptions,
    StyleProp,
    StyleSheet, TextInput,
    TextStyle,
    View,
    ViewStyle,
} from 'react-native';
import commonStyle from '../../../styles/commonStyles';
import { textScale } from '../../../styles/responsiveStyles';
import { spacing } from '../../../styles/spacing';
import { fontNames } from '../../../styles/typography';
import colors from '../../../utility/colors';
import RegularText from '../RegularText';


interface CommonDescInput {
    placeHolder?: string
    onChangeText?: (text: string) => void
    onSubmitEditing?: () => void
    onPressInput?: () => void
    refValue?: any
    value: string
    error?: string
    label?: string
    placeholderTextColor?: ColorValue
    keyboardType?: KeyboardTypeOptions
    editable?: boolean
    inputStyle?: StyleProp<TextStyle>
    inputContainerStyle?: StyleProp<ViewStyle>
    labelStyle?: StyleProp<TextStyle>
    returnKeyType?: ReturnKeyTypeOptions
    secureTextEntry?: boolean
    autoFocus?: boolean
    multiline?: boolean
    labelRightComponent?: any
    borderBottomColor?: ColorValue
    maxLength?: number
}


const CommonDescInput = ({
    placeholderTextColor,
    placeHolder,
    onChangeText = () => { },
    onSubmitEditing = () => { },
    borderBottomColor,
    refValue,
    keyboardType,
    returnKeyType,
    secureTextEntry,
    inputStyle,
    editable,
    value,
    label,
    error,
    autoFocus,
    inputContainerStyle,
    labelRightComponent,
    labelStyle,
    maxLength,
}: CommonDescInput) => {
    const [isFieldActive, setIsFieldActive] = useState(false)
    const [isUserOnInput, setIsUserOnInput] = useState(false)

    function _handleFocus() {
        if (!isUserOnInput) { setIsUserOnInput(true) }
        if (!isFieldActive) { setIsFieldActive(true) }
    }

    function _handleBlur() {
        if (isUserOnInput) { setIsUserOnInput(false) }
        if (isFieldActive) { setIsFieldActive(false) }
    }

    return (
        <View style={[styles.mainView,
        {
            borderBottomColor: borderBottomColor != undefined ? borderBottomColor : colors.white
        }]}>
            {
                label &&
                <View style={styles.labelContainer} >
                    <RegularText style={[styles.labelStyle, labelStyle]} >{label}</RegularText>
                    {labelRightComponent ? labelRightComponent : null}
                </View>
            }
            <View style={[styles.inputView,
            { borderColor: isFieldActive ? colors.black : colors.grey300 },
            error != '' && { borderColor: colors.red500 },
            editable == false && { backgroundColor: colors.grey200, borderWidth: 0 },
                inputContainerStyle,
            ]}>
                <TextInput
                    placeholder={placeHolder}
                    placeholderTextColor={placeholderTextColor != undefined ? placeholderTextColor : colors.grey400}
                    style={[styles.textInputStyle, inputStyle]}
                    ref={refValue}
                    onSubmitEditing={() => onSubmitEditing()}
                    onChangeText={value => onChangeText(value)}
                    keyboardType={keyboardType}
                    returnKeyType={returnKeyType}
                    secureTextEntry={secureTextEntry}
                    editable={editable != undefined ? editable : true}
                    value={value}
                    multiline={true}
                    autoFocus={autoFocus}
                    maxLength={maxLength}
                    onFocus={() => _handleFocus()}
                    onBlur={() => _handleBlur()}
                />
                {
                    value || value == '' ?
                        <RegularText style={styles.textCounter} >{value.length || 0}/{maxLength}</RegularText>
                        : null
                }
            </View>
            <RegularText style={commonStyle.inputFieldError} >{error}</RegularText>
        </View>
    )
}


const styles = StyleSheet.create({
    mainView: {

    },
    inputView: {
        backgroundColor: colors.white,
        borderRadius: spacing.RADIUS_8,
        paddingHorizontal: spacing.PADDING_8,
        height: spacing.HEIGHT_110,
        borderWidth: spacing.WIDTH_1,
    },
    textInputStyle: {
        color: colors.grey900,
        flex: 1,
        fontFamily: fontNames.FONT_FAMILY_REGULAR,
        fontSize: textScale(14),
        textAlignVertical: 'top',
    },
    labelContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: spacing.MARGIN_8
    },
    labelStyle: {
        fontSize: textScale(14),
        color: colors.grey800,
        marginLeft: spacing.MARGIN_4,
        fontFamily: fontNames.FONT_FAMILY_SEMI_BOLD
    },
    textCounter: {
        alignSelf: 'flex-end',
        color: colors.grey700,
    }
});

CommonDescInput.defaultProps = {
    onSubmitEditing: () => { },
    onChangeText: () => { },
    error: "",
    maxLength: 120
}

export default CommonDescInput;