import React from 'react';
import { Image, TouchableOpacity, View, ImageSourcePropType, StyleProp, ViewStyle, ImageResizeMode, ImageStyle } from 'react-native';
import FastImage from 'react-native-fast-image';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

interface CommonImageProps {
    source: any
    style?: StyleProp<ImageStyle>
    resizeMode?: ImageResizeMode | any
    showFull?: boolean
    viewStyle?: StyleProp<ViewStyle>
    isLoading?: boolean
}

const CommonImage = ({
    source,
    style,
    resizeMode,
    showFull,
    viewStyle,
    isLoading,
}: CommonImageProps) => {

    function onPressImage(link: string) {

    }

    return (
        <>
            {
                isLoading ?
                    <SkeletonPlaceholder
                    // backgroundColor={colors.skeletonBackgroundColor}
                    // highlightColor={colors.skeletonHighlightColor}
                    >
                        <View style={style} />
                    </SkeletonPlaceholder>
                    :
                    <View style={viewStyle} >
                        {source.uri == undefined ?
                            <Image
                                source={source}
                                resizeMode={resizeMode ? resizeMode : 'contain'}
                                style={[style, {}]}
                                key={source}
                            />
                            :
                            showFull && showFull == true ?
                                <TouchableOpacity activeOpacity={1} onPress={() => onPressImage(source.uri)} >
                                    <FastImage
                                        source={source}
                                        resizeMode={resizeMode ? resizeMode : 'contain'}
                                        style={style as any}
                                        key={source.uri}
                                    />
                                </TouchableOpacity>
                                :
                                <FastImage
                                    source={source}
                                    resizeMode={resizeMode ? resizeMode : 'contain'}
                                    style={style as any}
                                    key={source.uri}
                                />
                        }
                    </View>
            }
        </>
    )
}

export default CommonImage;