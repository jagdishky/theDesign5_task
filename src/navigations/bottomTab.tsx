import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Feed from '../components/screens/feeds';
import { textScale } from '../styles/responsiveStyles';
import { spacing } from '../styles/spacing';
import { fontNames } from '../styles/typography';
import * as Utils from '../utility';
import colors from '../utility/colors';
import { Images } from '../utility/imagePaths';
import AddFeed from '../components/screens/addFeed';
import MyFeeds from '../components/screens/myFeeds';

const Tab = createBottomTabNavigator();
const tabBarColor = colors.theme;

let tabData = [
    {
        name: Utils.Constants.SCREEN_FEED,
        active_icon: Images.IMG_FEED,
        component: Feed,
        label: ''
    },
    {
        name: Utils.Constants.SCREEN_ADD_FEED,
        active_icon: Images.IMG_ADD_FEED,
        component: AddFeed,
        label: ''
    },
    {
        name: Utils.Constants.SCREEN_MY_FEED,
        active_icon: Images.IMG_PROFILE,
        component: MyFeeds,
        label: ''
    },

];

function BottomTabs({ }) {

    function handleTabState(state: any) {

    }

    return (
        <View style={{ flex: 1, backgroundColor: colors.theme }}>
            <Tab.Navigator
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        backgroundColor: tabBarColor,
                        paddingBottom: 0,
                        height: spacing.HEIGHT_64,
                    },
                    tabBarAllowFontScaling: true,
                    headerShown: false,
                }}>
                {tabData.map((item, index) => {
                    return (
                        <Tab.Screen
                            key={`bottomTabMain_${index.toString()}`}
                            name={item.name}
                            component={item.component}
                            listeners={({ navigation, route }: { navigation: any, route: any }) => ({
                                tabPress: (e: any) => {
                                    // onTabPress(navigation, route);
                                },
                                state: (e: any) => {
                                    handleTabState(e)
                                }
                            })}
                            options={{
                                // tabBarLabel: item.label,
                                tabBarIcon: ({ focused }) => {
                                    return (
                                        <View style={styles.mainContainer} >
                                            <Image source={item.active_icon} style={{}} resizeMode="contain" />
                                            {
                                                focused &&
                                                <View style={styles.activeIndiactor} />
                                            }
                                        </View>
                                    );
                                },
                            }}
                        />
                    );
                })}
            </Tab.Navigator>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        alignItems: "center",
        justifyContent: "center",
        width: (spacing.FULL_WIDTH / tabData.length),
    },
    label: {
        fontSize: textScale(11),
        fontFamily: fontNames.FONT_FAMILY_MEDIUM,
        marginTop: spacing.MARGIN_6,
    },
    activeIndiactor: {
        width: spacing.WIDTH_16,
        height: spacing.HEIGHT_2,
        borderRadius: spacing.RADIUS_90,
        backgroundColor: colors.white,
        marginTop: spacing.MARGIN_4
    },
});

export default React.memo(BottomTabs);
