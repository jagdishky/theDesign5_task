import React, { useState } from "react";
import { KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, View } from "react-native";
import commonStyle, { APP_PADDING_HORIZONTAL } from "../../../styles/commonStyles";
import CommonHeader from "../../common/header/CommonHeader";
import CommonTextInput from "../../common/inputBoxes/CommonTextInput";
import CommonDescInput from "../../common/inputBoxes/CommonDescInput";
import CommonButton from "../../common/buttons/CommonButton";
import { spacing } from "../../../styles/spacing";
import { isInputEmpty } from "../../../utility/validations";
import { retrieveItem, storeItem } from "../../../utility/customAsyncStorage";
import { KEY_MY_FEEDS } from "../../../utility/constants";

const AddFeed = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [titleError, setTitleError] = useState('')
    const [descriptionError, setDescriptionError] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    async function onPressSubmit() {
        setIsLoading(true)
        const validateTitle = isInputEmpty(title)
        const validateDescription = isInputEmpty(description)

        if (!validateTitle.success) setTitleError('Please enter title'); else setTitleError('')
        if (!validateDescription.success) setDescriptionError('Please enter description'); else setDescriptionError('')

        if (!validateTitle.success || !validateDescription.success) return

        const payload = {
            title: title,
            body: description,
        }

        const myPreviousFeeds = await retrieveItem(KEY_MY_FEEDS)
        await storeItem(KEY_MY_FEEDS, myPreviousFeeds ? [...myPreviousFeeds, payload] : [payload])
        setIsLoading(false)
        setDescription('')
        setTitle('')
    }

    return (
        <SafeAreaView style={commonStyle.safeAreaView} >
            <CommonHeader title="Add Feed" hideBack />
            <View style={styles.mainContainer} >
                <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'} enabled>
                    <CommonTextInput
                        value={title}
                        onChangeText={setTitle}
                        error={titleError}
                        label="Title"
                        mainViewStyle={{ marginTop: spacing.MARGIN_12 }}
                    />
                    <CommonDescInput
                        value={description}
                        onChangeText={setDescription}
                        error={descriptionError}
                        label="Description"
                        maxLength={200}
                    />
                </KeyboardAvoidingView>
                <CommonButton title="Submit" onPressButton={onPressSubmit} fetching={isLoading} marginTop={spacing.MARGIN_14} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingHorizontal: APP_PADDING_HORIZONTAL
    },
})

export default AddFeed;