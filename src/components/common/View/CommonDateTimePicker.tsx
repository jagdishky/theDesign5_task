import React, { useState } from 'react';
import { StyleProp, StyleSheet, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { textScale } from '../../../styles/responsiveStyles';
import { spacing } from '../../../styles/spacing';
import { fontNames } from '../../../styles/typography';
import colors from '../../../utility/colors';
import { convertDateTime } from '../../../utility/commonFunctions';
import { APP_PADDING_HORIZONTAL } from '../../../utility/constants';
import { Images } from '../../../utility/imagePaths';
import CommonImage from '../CommonImage';
import CommonTextInput from '../inputBoxes/CommonTextInput';

interface CommonDateTimePickerProps {
    title?: string
    confirmText?: string
    cancelText?: string
    placeHolder?: string
    error?: string
    onSelect: (date: Date) => void
    onCancel?: () => void
    date: Date
    minimumDate?: Date
    editable?: Boolean
    containerStyle?: StyleProp<ViewStyle>
    inputStyle?: StyleProp<TextStyle>
    inputContainerStyle?: StyleProp<ViewStyle>
}

const CommonDateTimePicker = ({
    title,
    confirmText,
    cancelText,
    onSelect,
    onCancel = () => { },
    containerStyle,
    date,
    inputContainerStyle,
    placeHolder,
    minimumDate,
    error,
}: CommonDateTimePickerProps) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <View style={[styles.container, containerStyle]} >
            <TouchableOpacity style={{ borderRadius: spacing.RADIUS_8 }} onPress={() => setIsOpen(true)} activeOpacity={0.6} >
                <CommonTextInput
                    value={date ? convertDateTime(date as any, 'DD-MM-YY, h:mm a') as any : ''}
                    label={title}
                    editable={false}
                    placeHolder={placeHolder}
                    inputContainerStyle={inputContainerStyle}
                    error={error}
                    leftComponent={<CommonImage source={Images.IMG_CALENDER} style={{ marginLeft: APP_PADDING_HORIZONTAL }} />}
                />
            </TouchableOpacity>
            <DatePicker
                modal
                open={isOpen}
                date={date || new Date()}
                title={title}
                confirmText={confirmText}
                cancelText={cancelText}
                minimumDate={minimumDate}
                onConfirm={(date) => {
                    setIsOpen(false);
                    onSelect(date)
                }}
                onCancel={() => {
                    setIsOpen(false);
                    onCancel()
                }}
                style={{ flex: 1, }}

            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    },
    titleStyle: {
        fontSize: textScale(15),
        textTransform: 'capitalize',
        color: colors.grey900,
    },
    valueStyle: {
        fontSize: textScale(15),
        color: colors.grey900,
        fontFamily: fontNames.FONT_FAMILY_SEMI_BOLD
    }
});

export default CommonDateTimePicker;