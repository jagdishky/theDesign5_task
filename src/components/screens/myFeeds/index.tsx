import React, { useEffect, useState } from "react";
import { SafeAreaView, View } from "react-native";
import commonStyle from "../../../styles/commonStyles";
import CommonHeader from "../../common/header/CommonHeader";
import { retrieveItem } from "../../../utility/customAsyncStorage";
import { KEY_MY_FEEDS } from "../../../utility/constants";
import CommonSearchBarInput from "../../common/inputBoxes/CommonSearchBarInput";
import FeedListComponent from "../../module/FeedListComponent";
import { useFocusEffect } from "@react-navigation/native";

const MyFeeds = () => {

    const [searchText, setSearchText] = useState('')
    const [postsData, setPostsData] = useState<Record<string, string>[]>([])
    const [allPostData, setAllPostData] = useState<Record<string, string>[]>([])
    const [isFeedLoading, setIsFeedLoading] = useState(true)

    useFocusEffect(
        React.useCallback(() => {
            getMyPost()
        }, [])
    );

    async function getMyPost() {
        const myPosts = await retrieveItem(KEY_MY_FEEDS)
        if (myPosts) {
            setAllPostData(myPosts)
            setPostsData(myPosts)
        }
        setIsFeedLoading(false)
    }

    function onChangeSearchBarText(value: string) {
        let searchStr = value.toLowerCase()
        setSearchText(value)
        if (value == '') setPostsData(allPostData)
        else {
            let arr = []
            for (let i = 0; i < postsData.length; i++)
                if (postsData[i].title.toLowerCase().search(searchStr) != -1 || postsData[i]?.body.toLowerCase().search(searchStr) != -1) arr.push(postsData[i])
            setPostsData(arr)
        }
    }

    return (
        <SafeAreaView style={commonStyle.safeAreaView} >
            <CommonHeader title="My Feeds" hideBack />
            <CommonSearchBarInput
                value={searchText}
                placeHolder="Search"
                onChangeText={onChangeSearchBarText}
            />
            <FeedListComponent data={postsData} isLoading={isFeedLoading} />
        </SafeAreaView>
    )
}

export default MyFeeds;