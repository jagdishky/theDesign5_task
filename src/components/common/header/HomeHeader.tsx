import React from 'react';
import { StyleSheet, View } from 'react-native';
import { textScale } from '../../../styles/responsiveStyles';
import { spacing } from '../../../styles/spacing';
import { fontNames } from '../../../styles/typography';
import colors from '../../../utility/colors';
import { APP_PADDING_HORIZONTAL } from '../../../utility/constants';
import RegularText from '../RegularText';

interface HomeHeaderProps {

}

const HomeHeader = ({ }: HomeHeaderProps) => {
    return (
        <View style={styles.mainContainer} >
            <RegularText style={styles.appName} >LuggageStar</RegularText>
        </View >
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        paddingHorizontal: APP_PADDING_HORIZONTAL,
        paddingVertical: spacing.PADDING_16,
        backgroundColor: colors.theme
    },
    appName: {
        fontSize: textScale(18),
        fontFamily: fontNames.FONT_FAMILY_BOLD,
        color: colors.white,
    },
})

export default HomeHeader;