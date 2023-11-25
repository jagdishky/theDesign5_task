import React from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import { spacing } from "../../styles/spacing";
import colors from "../../utility/colors";
import FeedListComponentRow from "../row/feedListComponentRow";
import EmptyFlatlistComponent from "./EmptyFlatListComponent";

interface FeedListComponentProps {
    data: Record<string, any>[]
    isLoading?: boolean
    onRefresh?: () => void
}

const FeedListComponent = ({ data, isLoading, onRefresh }: FeedListComponentProps) => {

    return (
        <View style={{ flex: 1 }} >
            {
                isLoading ?
                    <ActivityIndicator color={colors.theme} style={{ marginTop: spacing.MARGIN_12 }} size={'large'} />
                    :
                    <FlatList
                        data={data}
                        renderItem={({ item, index }) => {
                            return (
                                <FeedListComponentRow
                                    key={"ProviderListComponentRow" + index}
                                    item={item}
                                    index={index}
                                    lastIndex={data.length - 1}
                                />
                            )
                        }}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item, index) => String(index)}
                        ListEmptyComponent={!isLoading && <EmptyFlatlistComponent msg={'No Feed'} />}
                    />
            }
        </View>
    )
}

export default FeedListComponent;