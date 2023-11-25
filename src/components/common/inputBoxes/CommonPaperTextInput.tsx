import React, { useState } from 'react';
import { ColorValue, KeyboardTypeOptions, StyleSheet, View, ViewStyle, StyleProp } from 'react-native';
import { TextInput } from 'react-native-paper';
import { textScale } from '../../../styles/responsiveStyles';
import { spacing } from '../../../styles/spacing';
import { fontNames } from '../../../styles/typography';
import colors from '../../../utility/colors';
import RegularText from '../RegularText';

interface CommonTextInputProps {
  placeHolder?: string
  onChangeText?: (text: string) => void
  onSubmitEditing?: () => void
  value: string
  error?: string
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters'
  label?: string
  activeOutlineColor?: string
  placeholderTextColor?: ColorValue
  inactiveOutlineColor?: string
  keyboardType?: KeyboardTypeOptions
  maxChar?: number
  editable?: boolean
  containerStyle?: StyleProp<ViewStyle>
}

const CommonTextInput = ({
  placeHolder,
  onChangeText = () => { },
  onSubmitEditing = () => { },
  value,
  error = "",
  label,
  placeholderTextColor,
  activeOutlineColor,
  autoCapitalize,
  inactiveOutlineColor,
  keyboardType,
  maxChar,
  editable,
  containerStyle
}: CommonTextInputProps) => {
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
    <View style={[styles.mainView, containerStyle]} >
      <TextInput
        label={label}
        value={value || ''}
        mode="outlined"
        autoCapitalize={autoCapitalize}
        onChangeText={text => onChangeText(text)}
        onSubmitEditing={() => onSubmitEditing()}
        style={styles.textInputStyle}
        outlineColor={inactiveOutlineColor || colors.grey300}
        activeOutlineColor={activeOutlineColor || colors.theme}
        textColor={colors.black}
        editable={editable}
        error={error != ''}
        placeholderTextColor={placeholderTextColor || colors.grey500}
        placeholder={placeHolder || ''}
        // error
        outlineStyle={{ borderRadius: spacing.RADIUS_8 }}
        keyboardType={keyboardType}
        maxLength={maxChar}
      />
      {error && <RegularText style={styles.errorStyle} >{error || ''}</RegularText>}

    </View>

  );
};

const styles = StyleSheet.create({
  mainView: {
  },
  textInputStyle: {
    fontFamily: fontNames.FONT_FAMILY_MEDIUM,
    fontSize: textScale(12),
    backgroundColor: colors.white,
  },
  errorStyle: {
    fontSize: textScale(10),
    color: colors.red900,
  },
});

export default CommonTextInput;
