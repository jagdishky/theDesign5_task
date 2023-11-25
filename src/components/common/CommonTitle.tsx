import React from 'react';
import { StyleProp, TextStyle, ColorValue } from 'react-native'
import { textScale } from '../../styles/responsiveStyles';
import { fontNames } from '../../styles/typography';
import RegularText from './RegularText';
import colors from '../../utility/colors';

interface CommonTitleProps {
    title: string
    style?: StyleProp<TextStyle>
    fontSize?: number
    fontFamily?: string,
    color?: ColorValue
}

const CommonTitle = ({ title, style, fontSize, fontFamily, color }: CommonTitleProps) => {
    return (
        <RegularText style={[{ fontSize: textScale(fontSize || 16), fontFamily: fontFamily || fontNames.FONT_FAMILY_BOLD, color: color || colors.grey900 }, style]} >{title}</RegularText>
    )
}

export default CommonTitle;