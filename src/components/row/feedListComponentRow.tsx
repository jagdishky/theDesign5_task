import React from 'react';
import { StyleSheet, View } from 'react-native';
import { boxShadow } from '../../styles/Mixins';
import commStyle from '../../styles/commonStyles';
import { textScale } from '../../styles/responsiveStyles';
import { spacing } from '../../styles/spacing';
import { fontNames } from '../../styles/typography';
import colors from '../../utility/colors';
import { APP_PADDING_HORIZONTAL } from '../../utility/constants';
import RegularText from '../common/RegularText';

interface FeedListComponentRowProps {
    item: Record<string, any>
    lastIndex: number
    index: number
}

const FeedListComponentRow = ({ item, index, lastIndex }: FeedListComponentRowProps) => {

    return (
        <View style={[styles.mainContainer, index == 0 && { marginTop: spacing.MARGIN_12 }, lastIndex == index && { marginBottom: spacing.MARGIN_24 }]} >
            <RegularText style={styles.title} >{item?.title}</RegularText>
            <RegularText style={styles.description} >{item?.body}</RegularText>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        marginBottom: spacing.MARGIN_12,
        backgroundColor: colors.grey50,
        padding: APP_PADDING_HORIZONTAL,
        borderRadius: spacing.RADIUS_12,
        marginHorizontal: APP_PADDING_HORIZONTAL,
        ...boxShadow()
    },
    title: {
        fontSize: textScale(14),
        fontFamily: fontNames.FONT_FAMILY_SEMI_BOLD
    },
    description: {
        fontSize: textScale(10),
        fontFamily: fontNames.FONT_FAMILY_SEMI_BOLD,
    },
})

export default FeedListComponentRow