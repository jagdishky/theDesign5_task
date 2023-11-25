import React, { useEffect, useState } from "react";
import { View, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import commonStyle from "../../../styles/commonStyles";
import CommonHeader from "../../common/header/CommonHeader";
import colors from "../../../utility/colors";
import FeedListComponent from "../../module/FeedListComponent";
import { useAllPostsQuery } from "../../../redux/api/post.api";
import CommonSearchBarInput from "../../common/inputBoxes/CommonSearchBarInput";

const Feed = () => {

    const [searchText, setSearchText] = useState('')
    const [postsData, setPostsData] = useState<Record<string, string>[]>([])
    const [isFeedLoading, setIsFeedLoading] = useState(true)

    const { data: allPostsRes, isLoading: isAllPostsResLoading } = useAllPostsQuery('')

    useEffect(() => {
        if (allPostsRes) {
            setPostsData(allPostsRes)
            setIsFeedLoading(false)
        }
    }, [allPostsRes])

    function onChangeSearchBarText(value: string) {
        let searchStr = value.toLowerCase()
        setSearchText(value)
        if (value == '') setPostsData(allPostsRes)
        else {
            let arr = []
            for (let i = 0; i < postsData.length; i++)
                if (postsData[i].title.toLowerCase().search(searchStr) != -1 || postsData[i]?.body.toLowerCase().search(searchStr) != -1) arr.push(postsData[i])
            setPostsData(arr)
        }
    }

    return (
        <SafeAreaView style={commonStyle.safeAreaView} >
            <StatusBar backgroundColor={colors.theme} barStyle={'light-content'} />
            <CommonHeader title="Feed" hideBack />
            <CommonSearchBarInput
                value={searchText}
                placeHolder="Search"
                onChangeText={onChangeSearchBarText}
            />
            <FeedListComponent data={postsData} isLoading={isFeedLoading} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.appBackgroundColor
    },
})

export default Feed;