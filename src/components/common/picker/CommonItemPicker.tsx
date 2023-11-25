import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import commonStyle from '../../../styles/commonStyles';
import { textScale } from '../../../styles/responsiveStyles';
import { spacing } from '../../../styles/spacing';
import { fontNames } from '../../../styles/typography';
import colors from '../../../utility/colors';
import { Images } from '../../../utility/imagePaths';
import ItemPickerModal from '../../modal/ItemPickerModal';
import CommonImage from '../CommonImage';
import RegularText from '../RegularText';

interface CommonItemPickerProps {
    label: string
    error?: string
    value: any
    title: string
    data: Record<string, any>[]
    onSelectItem: (item: Record<string, any>) => void
    displayKey: string
    editable?: boolean
    onOpenPicker?: () => void
    onClosePicker?: () => void
}

const CommonItemPicker = ({
    label,
    error,
    value,
    title,
    data,
    onSelectItem,
    displayKey,
    editable,
    onOpenPicker = () => { },
    onClosePicker = () => { },
}: CommonItemPickerProps) => {

    const [isPickerVisible, setIsPickerVisible] = useState(false)

    function onPressPicker() {
        if (editable != false) {
            setIsPickerVisible(true)
            onOpenPicker()
        }
    }

    function closePicker() {
        setIsPickerVisible(false)
        onClosePicker()
    }

    function onPressItem(item: Record<string, any>) {
        onSelectItem(item)
        closePicker()
    }

    return (
        <>
            <View style={[styles.mainView, {}]}>
                <RegularText style={styles.labelStyle} >{label}</RegularText>
                <TouchableOpacity style={[styles.inputView, {}]} onPress={() => onPressPicker()} activeOpacity={1} >
                    <RegularText style={[styles.textInputStyle, { color: value == '' || value == undefined ? colors.grey400 : colors.black }]} numberOfLines={1}>{value == '' || value == undefined ? title : value[displayKey as any]}</RegularText>
                    {editable != false &&
                        <CommonImage
                            source={Images.IMG_ARROW_NEXT}
                            style={styles.downArrowStyle}
                            resizeMode={'contain'}
                        />
                    }
                </TouchableOpacity>
                < RegularText style={commonStyle.inputFieldError}>{error}</RegularText>
                <ItemPickerModal
                    visible={isPickerVisible}
                    onClose={closePicker}
                    title={title}
                    data={data}
                    onPressItem={onPressItem}
                    value={value}
                    displayKey={displayKey}
                />
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    mainView: {
    },
    inputView: {
        backgroundColor: colors.white,
        borderRadius: spacing.RADIUS_8,
        height: spacing.HEIGHT_48,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    textInputStyle: {
        flex: 1,
        color: colors.black,
        fontFamily: fontNames.FONT_FAMILY_MEDIUM,
        fontSize: textScale(13),
        paddingHorizontal: spacing.PADDING_12
    },
    labelStyle: {
        fontSize: textScale(13),
        fontFamily: fontNames.FONT_FAMILY_SEMI_BOLD,
        marginBottom: spacing.MARGIN_4,
    },
    downArrowStyle: {
        tintColor: colors.grey600,
        transform: [{ rotate: '90deg' }],
        height: spacing.HEIGHT_14,
        width: spacing.HEIGHT_14,
        marginHorizontal: spacing.PADDING_20
    }
});

export default CommonItemPicker;