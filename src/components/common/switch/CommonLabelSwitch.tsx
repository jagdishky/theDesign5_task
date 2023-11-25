import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import CommonImage from '../CommonImage';
import RegularText from '../RegularText';
import CommonSwitch from './CommonSwitch';
import { textScale } from '../../../styles/responsiveStyles';
import { fontNames } from '../../../styles/typography';
import { spacing } from '../../../styles/spacing';

interface CommonLabelSwitchProps {
    isEnabled: boolean
    onToggleSwitch: () => void
    icon?: string
    containerStyle?: StyleProp<ViewStyle>
    label: string
}

const CommonLabelSwitch = ({
    isEnabled,
    onToggleSwitch,
    label,
    icon,
    containerStyle
}: CommonLabelSwitchProps) => {

    return (
        <View style={[styles.mainContainer, containerStyle]} >
            {/* {
                icon &&
                <CommonImage xml={icon} height={spacing.WIDTH_20} width={spacing.WIDTH_20} viewStyle={{ marginRight: spacing.MARGIN_8 }} />
            } */}
            <RegularText style={styles.label} >{label}</RegularText>
            <CommonSwitch
                isEnabled={isEnabled}
                onToggleSwitch={onToggleSwitch}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    label: {
        flex: 1,
        fontSize: textScale(12),
        fontFamily: fontNames.FONT_FAMILY_MEDIUM
    }
})

export default CommonLabelSwitch;