import OTPInputView from '@twotalltotems/react-native-otp-input';
import React from 'react';
import { StyleProp, StyleSheet, TextStyle, View, ViewStyle } from 'react-native';
import { textScale } from '../../../styles/responsiveStyles';
import { spacing } from '../../../styles/spacing';
import { fontNames } from '../../../styles/typography';
import colors from '../../../utility/colors';
import RegularText from '../RegularText';

interface CommonOtpInputProps {
    borderBottomColor?: string
    error?: string
    autoFocusOnLoad?: boolean
    otpCount?: number
    onCodeChange: (code: string) => void
    onCodeFilled: (code: string) => void
    code: string
    editable?: boolean
    codeInputFieldStyle?: StyleProp<ViewStyle>
    codeInputHighlightStyle?: TextStyle
}

const CommonOtpInput = ({
    borderBottomColor,
    error,
    autoFocusOnLoad,
    otpCount,
    onCodeChange,
    onCodeFilled,
    code,
    editable,
    codeInputFieldStyle,
    codeInputHighlightStyle,
}: CommonOtpInputProps) => {

    return (
        <View style={[styles.mainView, { borderBottomColor: borderBottomColor != undefined ? borderBottomColor : colors.white }]}>
            <OTPInputView
                // ref={ref}
                style={{ width: '100%', height: spacing.HEIGHT_50, paddingHorizontal: spacing.PADDING_20 }}
                pinCount={otpCount || 6}
                code={code}
                onCodeChanged={code => { onCodeChange(code) }}
                onCodeFilled={(code => { onCodeFilled(code); onCodeChange(code) })}
                autoFocusOnLoad={autoFocusOnLoad}
                codeInputFieldStyle={{ ...styles.codeInputFieldStyle, ...codeInputFieldStyle as Object }}
                codeInputHighlightStyle={{ ...styles.codeInputHighlightStyle, ...codeInputHighlightStyle }}
                editable={editable}
                keyboardType={'number-pad'}
                selectionColor={colors.white}
            />
            {
                error != '' &&
                <RegularText style={styles.errorStyle}>{error}</RegularText>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        marginTop: spacing.MARGIN_24
    },
    codeInputFieldStyle: {
        width: spacing.HEIGHT_50,
        height: spacing.HEIGHT_50,
        borderWidth: spacing.WIDTH_1,
        borderRadius: spacing.RADIUS_8,
        borderColor: colors.grey400,
        color: colors.black,
        fontSize: textScale(16),
        fontFamily: fontNames.FONT_FAMILY_REGULAR,
    },
    codeInputHighlightStyle: {
        borderColor: colors.black,
    },
    errorStyle: {
        fontSize: textScale(10),
        color: colors.red500,
        marginTop: spacing.MARGIN_4,
        marginLeft: spacing.MARGIN_12,
    },
});

export default CommonOtpInput;