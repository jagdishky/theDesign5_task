import React from 'react';
import { StyleSheet, View, StyleProp, TextStyle, ViewStyle } from 'react-native';
import { textScale } from '../../../styles/responsiveStyles';
import { fontNames } from '../../../styles/typography';
import colors from '../../../utility/colors';
import RegularText from '../RegularText';

interface CommonTitleValueViewProps {
    title: string
    value: string
    titleStyle?: StyleProp<TextStyle>
    valueStyle?: StyleProp<TextStyle>
    mainViewStyle?: StyleProp<ViewStyle>
}

const CommonTitleValueView = ({ title, value, titleStyle, valueStyle, mainViewStyle }: CommonTitleValueViewProps) => {
    return (
        <View style={[styles.container, mainViewStyle]} >
            <RegularText style={[styles.titleStyle, titleStyle, { flex: 1 }]}>{title}</RegularText>
            <RegularText style={[styles.valueStyle, valueStyle]}>{value}</RegularText>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    titleStyle: {
        fontSize: textScale(12),
        textTransform: 'capitalize',
        color: colors.grey900,
    },
    valueStyle: {
        fontSize: textScale(12),
        color: colors.grey900,
        fontFamily: fontNames.FONT_FAMILY_SEMI_BOLD
    }
});

export default CommonTitleValueView;