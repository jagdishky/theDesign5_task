import React from 'react';
import { StyleSheet, View } from 'react-native';
import { textScale } from '../../styles/responsiveStyles';
import { spacing } from '../../styles/spacing';
import colors from '../../utility/colors';
import RegularText from '../common/RegularText';

const EmptyFlatlistComponent = ({ msg }: { msg: string }) => {
    return (
        <View style={styles.mainContainer} >
            <RegularText style={styles.messageText} >{msg}</RegularText>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    messageText: {
        fontSize: textScale(15),
        color: colors.grey800,
        textAlign: "center",
        paddingVertical: spacing.PADDING_20
    },
})

export default EmptyFlatlistComponent;