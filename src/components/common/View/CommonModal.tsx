import React from 'react';
import { Modal, StyleSheet, TouchableOpacity, View, ModalProps, StyleProp, ViewStyle } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { spacing } from '../../../styles/spacing';
import colors from '../../../utility/colors';
import { ANIMATION_TYPES, APP_PADDING_HORIZONTAL } from '../../../utility/constants';
import { Images } from '../../../utility/imagePaths';
import CommonImage from '../CommonImage';

interface CommonModalProps {
    modalProps: ModalProps,
    hideCloseIcon?: boolean
    visibleViewStyle?: StyleProp<ViewStyle>
    transparentBackgroundViewStyle?: StyleProp<ViewStyle>
    children: any
}

const CommonModal = ({ modalProps, hideCloseIcon, visibleViewStyle, children, transparentBackgroundViewStyle }: CommonModalProps) => {
    return (
        <>
            {
                modalProps.visible &&
                <>
                    <Animatable.View
                        // onPress={() => { modalProps.onRequestClose }}
                        style={[styles.transparentBlackView, modalProps.visible && { backgroundColor: colors.transparentBlack }, transparentBackgroundViewStyle]}
                        animation={ANIMATION_TYPES.FADE_IN}
                        duration={400}
                        easing={'ease-in-out'}
                    >
                    </Animatable.View>

                </>
            }
            <Modal
                animationType={modalProps?.animationType || 'slide'}
                visible={modalProps.visible}
                onRequestClose={modalProps.onRequestClose}
                transparent={true}
                {...modalProps}
            >
                <View style={styles.mainContainer}>
                    <TouchableOpacity activeOpacity={1} style={styles.modalTransparentTopContainer} onPress={modalProps.onRequestClose} >
                        {
                            hideCloseIcon ?
                                null
                                :
                                <TouchableOpacity onPress={modalProps.onRequestClose} >
                                    <CommonImage source={Images.IMG_CLOSE} viewStyle={styles.closeIconViewStyle} />
                                </TouchableOpacity>
                        }
                    </TouchableOpacity>
                    <View style={[styles.visibleViewStyle, visibleViewStyle]}>
                        {children}
                    </View>
                </View>
            </Modal>
        </>
    )
}

CommonModal.prototype = {
    style: 'Object'
}

CommonModal.defaultProps = {
    children: "",
}

const styles = StyleSheet.create({
    transparentBlackView: {
        width: spacing.FULL_WIDTH,
        height: spacing.FULL_HEIGHT,
        backgroundColor: colors.transparent,
        position: "absolute",
        paddingHorizontal: -APP_PADDING_HORIZONTAL,
        zIndex: 99999999,
    },
    mainContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    modalTransparentTopContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: "100%",
    },
    visibleViewStyle: {
        width: spacing.FULL_WIDTH,
        backgroundColor: colors.white,
        padding: APP_PADDING_HORIZONTAL,
        borderTopLeftRadius: spacing.RADIUS_20,
        borderTopRightRadius: spacing.RADIUS_20,
    },
    closeIconViewStyle: {
        backgroundColor: colors.white,
        padding: spacing.PADDING_8,
        borderRadius: spacing.RADIUS_90,
        marginBottom: spacing.MARGIN_12
    },
})

export default CommonModal;