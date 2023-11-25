import React, { useState } from 'react';
import { ColorValue, KeyboardTypeOptions, Keyboard, StyleSheet, TextInput, TextStyle, View, StyleProp, ViewStyle, ReturnKeyTypeOptions } from 'react-native';
import { textScale } from '../../../styles/responsiveStyles';
import { spacing } from '../../../styles/spacing';
import { fontNames } from '../../../styles/typography';
import colors from '../../../utility/colors';
import RegularText from '../RegularText';
import commonStyle from '../../../styles/commonStyles';

interface CommonTextInputProps {
  placeHolder?: string
  onChangeText?: (text: string) => void
  onSubmitEditing?: () => void
  onPressInput?: () => void
  refValue?: any
  value: string
  error?: string
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters'
  label?: string
  activeOutlineColor?: string
  placeholderTextColor?: ColorValue
  fieldActiveColor?: ColorValue
  inactiveOutlineColor?: string
  keyboardType?: KeyboardTypeOptions
  maxChar?: number
  editable?: boolean
  containerStyle?: StyleProp<ViewStyle>
  mainViewStyle?: StyleProp<ViewStyle>
  inputStyle?: StyleProp<TextStyle>
  inputContainerStyle?: StyleProp<ViewStyle>
  labelStyle?: StyleProp<TextStyle>
  returnKeyType?: ReturnKeyTypeOptions
  secureTextEntry?: boolean
  autoFocus?: boolean
  multiline?: boolean
  rightComponent?: any
  leftComponent?: any
  labelRightComponent?: any
  labelContainerStyle?: StyleProp<ViewStyle>
}

const CommonTextInput = ({
  placeHolder,
  onChangeText = () => { },
  onSubmitEditing = () => { },
  refValue,
  keyboardType,
  returnKeyType,
  secureTextEntry,
  inputStyle,
  editable,
  value,
  error,
  rightComponent,
  leftComponent,
  onPressInput,
  mainViewStyle,
  autoCapitalize,
  maxChar,
  multiline,
  inputContainerStyle,
  autoFocus,
  label,
  labelRightComponent,
  labelStyle,
  fieldActiveColor,
  labelContainerStyle,
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
    <View style={[mainViewStyle,]} >
      {
        label &&
        <View style={[styles.labelContainer, labelContainerStyle]} >
          <RegularText style={[styles.labelStyle, labelStyle]} >{label}</RegularText>
          {labelRightComponent ? labelRightComponent : null}
        </View>
      }
      <View style={[
        styles.inputContainer,
        { borderColor: isFieldActive ? fieldActiveColor || colors.black : colors.grey300 },
        error != '' && { borderColor: colors.red500 },
        editable == false && { backgroundColor: colors.grey200, borderColor: colors.transparent },
        inputContainerStyle,
      ]}>
        {leftComponent ? leftComponent : null}
        <TextInput
          ref={refValue}
          placeholder={placeHolder ? placeHolder : '' || ''}
          placeholderTextColor={colors.grey500}
          value={value}
          editable={editable != undefined ? editable : true}
          multiline={multiline != undefined ? multiline : false}
          showSoftInputOnFocus={onPressInput ? false : true}
          style={[styles.textInputStyle, inputStyle, {}]}
          keyboardType={keyboardType}
          returnKeyType={returnKeyType}
          secureTextEntry={secureTextEntry}
          autoCapitalize={autoCapitalize || 'sentences'}
          autoFocus={autoFocus || false}
          maxLength={maxChar ? maxChar : undefined}
          onFocus={() => _handleFocus()}
          onBlur={() => _handleBlur()}
          onPressIn={() => {
            if (onPressInput) {
              Keyboard.dismiss(); onPressInput();
            }
          }}
          onSubmitEditing={() => onSubmitEditing()}
          onChangeText={value => onChangeText(value)}
        />
        {rightComponent ? rightComponent : null}
      </View>
      <RegularText style={commonStyle.inputFieldError} >{error || ''}</RegularText>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: spacing.RADIUS_8,
    backgroundColor: colors.white,
    borderWidth: spacing.WIDTH_1,
    borderColor: colors.theme
  },
  labelContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: spacing.MARGIN_4,
  },
  labelStyle: {
    fontSize: textScale(13),
    fontFamily: fontNames.FONT_FAMILY_SEMI_BOLD,
  },
  textInputStyle: {
    flex: 1,
    color: colors.black,
    fontFamily: fontNames.FONT_FAMILY_MEDIUM,
    fontSize: textScale(13),
    paddingHorizontal: spacing.PADDING_12,
  },

});

CommonTextInput.defaultProps = {
  onSubmitEditing: () => { },
  onChangeText: () => { },
  error: "",
}

export default CommonTextInput;
