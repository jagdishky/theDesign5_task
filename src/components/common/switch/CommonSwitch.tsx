import React from 'react';
import { ColorValue, Switch } from 'react-native';
import colors from '../../../utility/colors';

interface CommonSwitchProps {
    isEnabled: boolean
    onToggleSwitch: () => void
    trackFalseColor?: ColorValue
    trackTrueColor?: ColorValue
}

const CommonSwitch = ({
    isEnabled,
    onToggleSwitch,
    trackFalseColor,
    trackTrueColor,
}: CommonSwitchProps) => {

    return (
        <Switch
            trackColor={{ false: trackFalseColor || colors.grey600, true: trackTrueColor || colors.grey400 }}
            thumbColor={isEnabled ? colors.theme : colors.grey300}
            ios_backgroundColor="#3e3e3e"
            onValueChange={onToggleSwitch}
            value={isEnabled}

        />
    )
}

export default CommonSwitch;