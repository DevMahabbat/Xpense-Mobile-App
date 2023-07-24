import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const CreateAccount = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.createAccount}>
            <Text style={[styles.createAnAccount, styles.accountLayout]}>
                Create an Account
            </Text>
            <Text style={[styles.getAnAccount, styles.accountTypo]}>
                Get an account and control your finances better with full control of
                your budgets and savings.
            </Text>
            <View style={styles.lineParent}>
                <View style={styles.groupChild} />
                <View
                    style={[
                        styles.orCreateAccountWithWrapper,
                        styles.wrapperFrameFlexBox,
                    ]}
                >
                    <Text style={styles.orCreateAccount}>Or Create account with</Text>
                </View>
            </View>
            <Text style={[styles.byCreatingAnContainer, styles.text1Layout]}>
                {`By creating an account, you have accepted the `}
                <Text
                // style={styles.termsConditions}
                >{`TERMS & CONDITIONS`}</Text>
                {` of Track buddy.  `}
            </Text>
            <View style={[styles.createAccountInner, styles.createFlexBox]}>
                <View style={styles.wrapperFrameFlexBox}>
                    <Image
                        style={styles.icon}
                        resizeMode="cover"
                        source={require("../assets/images/Icon.png")}
                    />
                    <Text style={[styles.text, styles.textTypo2]}>Google</Text>
                </View>
            </View>
            <Pressable
                style={[styles.alreadyHaveAnContainer, styles.containerPosition]}
                onPress={() => { }}
            >
                <Text style={[styles.text1, styles.text1Layout]}>
                    <Text
                        style={[styles.alreadyHaveAn, styles.alreadyHaveAnTypo]}
                    >{`Already have an Account ? `}</Text>
                    <Text style={[styles.logIn, styles.accountTypo]}>Log in</Text>
                </Text>
            </Pressable>
            <Pressable
                style={[styles.createAccountWrapper, styles.createFlexBox]}
                onPress={() => { }}
            >
                <Text style={[styles.createAccount1, styles.accountTypo]}>
                    Create account
                </Text>
            </Pressable>
            <View style={styles.frameParent}>
                <View style={[styles.frameWrapper, styles.frameParentShadowBox]}>
                    <View>
                        <Text style={[styles.text2, styles.textClr]}>Name *</Text>
                        <Text style={[styles.text3, styles.textClr]}>Enter name</Text>
                    </View>
                </View>
                <View style={[styles.frameContainer, styles.frameParentShadowBox]}>
                    <View>
                        <Text style={[styles.text2, styles.textClr]}>Email *</Text>
                        <Text style={[styles.text3, styles.textClr]}>Enter email</Text>
                    </View>
                </View>
                <View style={[styles.frameGroup, styles.wrapperFrameFlexBox]}>
                    <View style={[styles.ngWrapper, styles.ngWrapperShadowBox]}>
                        <Image
                            style={styles.ngIcon}
                            resizeMode="cover"
                            source={require("../assets/images/ng.png")}
                        />
                    </View>
                    <View style={[styles.frameView, styles.frameParentShadowBox]}>
                        <View style={styles.textContainer}>
                            <Text style={[styles.text6, styles.textClr]}>Phone number *</Text>
                            <Text style={[styles.text7, styles.textTypo]}>
                                Enter Phone number
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={[styles.frameParent1, styles.frameParentShadowBox]}>
                    <View style={styles.textParent1}>
                        <Text style={[styles.text6, styles.textClr]}>Password *</Text>
                        <Text style={[styles.text9, styles.textTypo]}>Enter password</Text>
                    </View>
                    {/* <Image
                        style={styles.icon1}
                        resizeMode="cover"
                        source={require("../assets/icon1.png")}
                    /> */}
                </View>
                <View style={[styles.frameParent2, styles.frameParentShadowBox]}>
                    <View style={styles.textParent1}>
                        <Text style={[styles.text6, styles.textClr]}>
                            Confirm password *
                        </Text>
                        <Text style={[styles.text9, styles.textTypo]}>Enter password</Text>
                    </View>
                    {/* <Image
                        style={styles.icon1}
                        resizeMode="cover"
                        source={require("../assets/icon2.png")}
                    /> */}
                </View>
            </View>
            <LinearGradient
                style={[styles.statusBar, styles.statusBarPosition]}
                locations={[0, 1]}
                colors={["rgba(255, 255, 255, 0.01)", "rgba(255, 255, 255, 0)"]}
                useAngle={true}
                angle={174.21}
            >
                <View style={[styles.wrapper, styles.wrapperFrameFlexBox]}>
                    <View style={styles.time}>
                        {/* <Image
                            style={styles.icon3}
                            resizeMode="cover"
                            source={require("../assets/941.png")}
                        /> */}
                    </View>
                    <View style={[styles.rightSide, styles.wrapperFrameFlexBox]}>
                        {/* <Image
                            style={styles.mobileSignalIcon}
                            resizeMode="cover"
                            source={require("../assets/mobile-signal.png")}
                        /> */}
                        <Image
                            style={[styles.wifiIcon, styles.iconSpaceBlock]}
                            resizeMode="cover"
                            source={require("../assets/wifi.png")}
                        />
                        <Image
                            style={[styles.batteryIcon, styles.iconSpaceBlock]}
                            resizeMode="cover"
                            source={require("../assets/battery.png")}
                        />
                    </View>
                </View>
            </LinearGradient>
        </View>
    );
};

const styles = StyleSheet.create({
    accountLayout: {
        width: 327,
        textAlign: "left",
        position: "absolute",
    },
    accountTypo: {
        fontFamily: "DM Sans_medium",
        fontWeight: "500",
    },
    wrapperFrameFlexBox: {
        alignItems: "center",
        flexDirection: "row",
    },
    text1Layout: {
        width: 326,
        textAlign: "center",
    },
    createFlexBox: {
        paddingVertical: 16,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
    },
    textTypo2: {
        letterSpacing: 0.5,
        fontSize: 16,
        lineHeight: 24,
    },
    containerPosition: {
        left: 25,
        position: "absolute",
    },
    alreadyHaveAnTypo: {
        fontFamily: "DM Sans_regular",
        color: "#000",
    },
    frameParentShadowBox: {
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: "rgba(41, 176, 41, 0.2)",
        shadowOpacity: 1,
        elevation: 40,
        shadowRadius: 40,
        shadowOffset: {
            width: 0,
            height: 25,
        },
        shadowColor: "rgba(0, 0, 0, 0.06)",
        borderRadius: 10,
        borderStyle: "solid",
        overflow: "hidden",
        backgroundColor: "#fff",
    },
    textClr: {
        color: "rgba(0, 0, 0, 0.6)",
        textAlign: "left",
    },
    ngWrapperShadowBox: {
        borderWidth: 1,
        borderColor: "rgba(41, 176, 41, 0.2)",
        shadowOpacity: 1,
        elevation: 40,
        shadowRadius: 40,
        shadowOffset: {
            width: 0,
            height: 25,
        },
        shadowColor: "rgba(0, 0, 0, 0.06)",
        borderStyle: "solid",
        overflow: "hidden",
        backgroundColor: "#fff",
    },
    textTypo: {
        top: 19,
        height: 24,
        color: "rgba(0, 0, 0, 0.6)",
        lineHeight: 24,
        letterSpacing: 0.5,
        fontSize: 16,
        left: 0,
        fontFamily: "DM Sans_medium",
        fontWeight: "500",
        textAlign: "left",
        position: "absolute",
    },
    statusBarPosition: {
        top: 0,
        position: "absolute",
    },
    iconSpaceBlock: {
        marginLeft: 5,
        height: 11,
    },
    createAnAccount: {
        top: 84,
        fontSize: 24,
        lineHeight: 32,
        color: "#29b029",
        fontFamily: "DM Sans_bold",
        fontWeight: "700",
        left: 26,
    },
    getAnAccount: {
        top: 124,
        left: 27,
        color: "rgba(0, 0, 0, 0.8)",
        lineHeight: 18,
        fontSize: 14,
        width: 327,
        textAlign: "left",
        position: "absolute",
    },
    groupChild: {
        top: 12,
        borderColor: "#000",
        borderTopWidth: 1,
        width: 323,
        height: 1,
        borderStyle: "solid",
        left: 0,
        position: "absolute",
    },
    orCreateAccount: {
        textAlign: "center",
        fontFamily: "DM Sans_regular",
        lineHeight: 14,
        fontSize: 10,
        color: "#29b029",
    },
    orCreateAccountWithWrapper: {
        left: 94,
        paddingHorizontal: 12,
        paddingVertical: 2,
        justifyContent: "center",
        top: 0,
        position: "absolute",
        backgroundColor: "#fff",
    },
    lineParent: {
        top: 682,
        width: 322,
        height: 18,
        left: 26,
        position: "absolute",
    },
    // termsConditions: {
    //     textDecoration: "underline",
    // },
    byCreatingAnContainer: {
        top: 630,
        color: "#000",
        left: 25,
        position: "absolute",
        fontFamily: "DM Sans_regular",
        lineHeight: 14,
        fontSize: 10,
        width: 326,
    },
    icon: {
        width: 32,
        height: 32,
        overflow: "hidden",
    },
    text: {
        marginLeft: 8,
        lineHeight: 24,
        color: "#000",
        textAlign: "left",
        fontFamily: "DM Sans_bold",
        fontWeight: "700",
    },
    createAccountInner: {
        top: 724,
        paddingHorizontal: 115,
        borderWidth: 1,
        borderColor: "rgba(41, 176, 41, 0.2)",
        shadowOpacity: 1,
        elevation: 40,
        shadowRadius: 40,
        shadowOffset: {
            width: 0,
            height: 25,
        },
        shadowColor: "rgba(0, 0, 0, 0.06)",
        borderStyle: "solid",
        overflow: "hidden",
        backgroundColor: "#fff",
        left: 24,
    },
    alreadyHaveAn: {
        color: "#000",
    },
    logIn: {
        textDecoration: "underline",
        color: "#29b029",
    },
    text1: {
        lineHeight: 18,
        fontSize: 14,
    },
    alreadyHaveAnContainer: {
        top: 812,
    },
    createAccount1: {
        fontSize: 18,
        color: "#fff",
        lineHeight: 24,
        textAlign: "left",
    },
    createAccountWrapper: {
        top: 562,
        left: 23,
        backgroundColor: "#29b029",
        width: 328,
        paddingHorizontal: 100,
        flexDirection: "row",
        paddingVertical: 16,
    },
    text2: {
        lineHeight: 16,
        letterSpacing: 0.4,
        fontSize: 12,
        color: "rgba(0, 0, 0, 0.6)",
        fontFamily: "DM Sans_regular",
    },
    text3: {
        width: 282,
        marginTop: 2,
        height: 24,
        lineHeight: 24,
        letterSpacing: 0.5,
        fontSize: 16,
        fontFamily: "DM Sans_medium",
        fontWeight: "500",
    },
    frameWrapper: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        width: 327,
        justifyContent: "center",
    },
    frameContainer: {
        marginTop: 12,
        paddingHorizontal: 16,
        paddingVertical: 8,
        width: 327,
    },
    ngIcon: {
        width: 24,
        height: 24,
        overflow: "hidden",
    },
    ngWrapper: {
        paddingHorizontal: 23,
        paddingVertical: 12,
        borderRadius: 10,
        borderColor: "rgba(41, 176, 41, 0.2)",
        shadowOpacity: 1,
        elevation: 40,
        shadowRadius: 40,
        shadowOffset: {
            width: 0,
            height: 25,
        },
        shadowColor: "rgba(0, 0, 0, 0.06)",
        flexDirection: "row",
    },
    text6: {
        top: 1,
        lineHeight: 16,
        letterSpacing: 0.4,
        fontSize: 12,
        color: "rgba(0, 0, 0, 0.6)",
        fontFamily: "DM Sans_regular",
        left: 0,
        position: "absolute",
    },
    text7: {
        width: 208,
    },
    textContainer: {
        height: 42,
        width: 208,
    },
    frameView: {
        width: 241,
        paddingHorizontal: 15,
        marginLeft: 16,
        alignItems: "center",
        flexDirection: "row",
    },
    frameGroup: {
        marginTop: 12,
    },
    text9: {
        width: 252,
    },
    textParent1: {
        width: 252,
        height: 42,
    },
    icon1: {
        width: 24,
        height: 24,
        marginLeft: 8,
        overflow: "hidden",
    },
    frameParent1: {
        marginTop: 12,
        paddingHorizontal: 16,
        paddingVertical: 8,
        width: 327,
        alignItems: "center",
        flexDirection: "row",
    },
    frameParent2: {
        marginTop: 12,
        paddingHorizontal: 16,
        paddingVertical: 8,
        width: 327,
        alignItems: "center",
        flexDirection: "row",
    },
    frameParent: {
        top: 184,
        left: 24,
        position: "absolute",
    },
    icon3: {
        width: 28,
        height: 11,
    },
    time: {
        borderRadius: 32,
        paddingTop: 5,
        paddingRight: 12,
        paddingBottom: 5,
    },
    mobileSignalIcon: {
        width: 17,
        height: 11,
    },
    wifiIcon: {
        width: 15,
    },
    batteryIcon: {
        width: 24,
    },
    rightSide: {
        justifyContent: "flex-end",
    },
    wrapper: {
        alignSelf: "stretch",
        justifyContent: "space-between",
    },
    statusBar: {
        marginLeft: -187.5,
        left: "50%",
        width: 375,
        height: 43,
        paddingHorizontal: 24,
        paddingVertical: 11,
        backgroundColor: "transparent",
        overflow: "hidden",
    },
    createAccount: {
        borderRadius: 12,
        flex: 1,
        width: "100%",
        height: 1036,
        overflow: "hidden",
        backgroundColor: "#fff",
    },
});

export default CreateAccount;
