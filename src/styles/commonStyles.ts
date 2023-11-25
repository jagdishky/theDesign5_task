
import { StyleSheet } from "react-native";
import { spacing } from "./spacing";
import colors from "../utility/colors";
import { textScale } from "./responsiveStyles";
import { fontNames } from "./typography";

export const APP_PADDING_HORIZONTAL = spacing.PADDING_16

const commonStyle = StyleSheet.create({
    flexDirectionRow: {
        flexDirection: "row",
        alignItems: 'center',
    },
    safeAreaView: {
        flex: 1,
        backgroundColor: colors.appBackgroundColor
    },
    inputFieldError: {
        fontSize: textScale(10),
        color: colors.red500,
        marginTop: spacing.MARGIN_2,
        marginLeft: spacing.MARGIN_4,
    },
    detailCardTitle: {
        fontSize: textScale(14),
        fontFamily: fontNames.FONT_FAMILY_MEDIUM,
        marginBottom: spacing.MARGIN_6
    },
    detailCardView: {
        backgroundColor: colors.grey200,
        borderRadius: spacing.RADIUS_16,
        padding: APP_PADDING_HORIZONTAL,
        marginBottom: spacing.MARGIN_12,
        paddingBottom: 0
    },
})

export default commonStyle