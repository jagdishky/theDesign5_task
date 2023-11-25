import React from 'react';
import { Image, KeyboardType, ReturnKeyType, StyleProp, StyleSheet, TextInput, View, ViewStyle } from 'react-native';
import { textScale } from '../../../styles/responsiveStyles';
import { spacing } from '../../../styles/spacing';
import { fontNames } from '../../../styles/typography';
import { Images } from '../../../utility/imagePaths';
import colors from '../../../utility/colors';

interface CommonSearchBarInputProps {
    placeHolder?: string,
    onChangeText?: (text: string) => void,
    onSubmitEditing?: () => void,
    refValue?: any,
    keyboardType?: KeyboardType,
    returnKeyType?: ReturnKeyType,
    secureTextEntry?: boolean,
    editable?: boolean,
    value: string,
    autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined,
    maxLength?: number,
    style?: StyleProp<ViewStyle>,
    onFocus?: () => void
}

const CommonSearchBarInput = ({
    placeHolder,
    onChangeText = () => { },
    onSubmitEditing = () => { },
    refValue,
    keyboardType,
    returnKeyType,
    secureTextEntry,
    editable,
    value,
    autoCapitalize,
    maxLength,
    style,
    onFocus
}: CommonSearchBarInputProps) => {

    return (
        <View style={styles.mainContainer}  >
            <View style={[styles.SearchBarView, style,
            {
                backgroundColor: editable == false ? colors.grey300 : colors.white,
            }
            ]}>
                <View style={styles.iconView} >
                    <Image
                        source={Images.IMG_SEARCH}
                        resizeMode='contain'
                        style={styles.iconStyle}
                    />
                </View>
                <View style={styles.inputView} >
                    <TextInput
                        placeholder={placeHolder}
                        placeholderTextColor={colors.grey400}
                        style={[styles.textInputStyle, {}]}
                        ref={refValue}
                        onSubmitEditing={() => onSubmitEditing()}
                        onChangeText={value => onChangeText(value)}
                        keyboardType={keyboardType}
                        returnKeyType={returnKeyType}
                        secureTextEntry={secureTextEntry}
                        editable={editable}
                        value={value}
                        autoCapitalize={autoCapitalize}
                        maxLength={maxLength}
                        onFocus={onFocus ? () => onFocus() : () => { }}
                    />
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        alignItems: "center"
    },
    SearchBarView: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        height: spacing.HEIGHT_50,
        backgroundColor: colors.white,
        marginVertical: spacing.MARGIN_12,
        marginHorizontal: spacing.MARGIN_12,
        borderRadius: spacing.RADIUS_12,
        paddingHorizontal: spacing.PADDING_12,
        borderWidth: spacing.WIDTH_1,
        borderColor: colors.grey300
    },
    inputView: {
        flexDirection: 'row',
        flex: 1,
        marginLeft: spacing.MARGIN_8
    },
    textInputStyle: {
        color: colors.black,
        flex: 1,
        fontFamily: fontNames.FONT_FAMILY_REGULAR,
        fontSize: textScale(12),
        justifyContent: "center",
        alignItems: "center",
    },
    iconView: {
        flex: 0.1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconStyle: {
        tintColor: colors.grey400,
    },
});

export default CommonSearchBarInput;