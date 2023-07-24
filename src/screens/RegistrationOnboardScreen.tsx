import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LinearGradient from "react-native-linear-gradient";

const RegistrationOnboardScreen = ({navigation}:any) => {
  

    return (
        <View style={styles.onboarding5}>
            <Text style={[styles.trackYourMoney, styles.moneyFlexBox]}>
                Track your money in real time.
            </Text>
            <View style={styles.brandNameOriginal}>
                <View style={[styles.logo, styles.logoPosition]}>
                    <Text style={[styles.track, styles.trackTypo]}>{`Track `}</Text>
                    <Text style={[styles.buddy, styles.trackTypo]}>Buddy</Text>
                    <Image
                        style={[styles.twemojipeopleHuggingIcon, styles.logoPosition]}
                        resizeMode="cover"
                        source={require("../assets/images/twemoji_people-hugging.png")}
                    />
                </View>
                <Text style={[styles.moreThanMoney, styles.moneyFlexBox]}>
                    More than money management.
                </Text>
            </View>
            <Image
                style={styles.stackOfCoins}
                resizeMode="cover"
                source={require("../assets/images/stack_of_coins.png")}
            />
            <View
                style={[styles.createAnAccountWrapper, styles.accountWrapperFlexBox]}
            >
                <Pressable onPress={() => { }}>
                    <Text style={[styles.createAnAccount, styles.accountTypo]}>
                        Create an account
                    </Text>
                </Pressable>
            </View>
            <Pressable
                style={[styles.logIntoAccountWrapper, styles.accountWrapperFlexBox]}
                onPress={() => { }}
            >
                <Text style={[styles.logIntoAccount, styles.accountTypo]}>
                    Log into account
                </Text>
            </Pressable>
          
        </View>
    );
};

const styles = StyleSheet.create({
    moneyFlexBox: {
        textAlign: "left",
        color: "#29b029",
        position: "absolute",
    },
    logoPosition: {
        top: 0,
        position: "absolute",
    },
    trackTypo: {
        fontFamily: "Happy Monkey_regular",
        lineHeight: 44,
        fontSize: 40,
        top: 0,
        textAlign: "left",
        color: "#29b029",
        position: "absolute",
    },
    accountWrapperFlexBox: {
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 18,
        paddingHorizontal: 88,
        flexDirection: "row",
        borderRadius: 10,
        left: "50%",
        top: "50%",
        position: "absolute",
    },
    accountTypo: {
        textAlign: "center",
        lineHeight: 24,
        fontSize: 16,
        fontFamily: "DM Sans_medium",
        fontWeight: "500",
    },
    trackYourMoney: {
        width: "87.2%",
        top: "57.54%",
        left: "6.4%",
        fontSize: 32,
        lineHeight: 38,
        fontFamily: "DM Sans_medium",
        fontWeight: "500",
        textAlign: "left",
    },
    track: {
        left: 0,
    },
    buddy: {
        left: 131,
    },
    twemojipeopleHuggingIcon: {
        left: 103,
        width: 36,
        height: 36,
        overflow: "hidden",
    },
    logo: {
        height: 44,
        left: 0,
        width: 264,
    },
    moreThanMoney: {
        top: 46,
        left: 53,
        fontSize: 10,
        lineHeight: 14,
        fontFamily: "Poppins_regular",
    },
    brandNameOriginal: {
        top: 115,
        left: 56,
        height: 60,
        width: 264,
        position: "absolute",
    },
    stackOfCoins: {
        top: 175,
        left: 38,
        width: 300,
        height: 300,
        position: "absolute",
    },
    createAnAccount: {
        color: "#fff",
    },
    createAnAccountWrapper: {
        marginTop: 177.25,
        marginLeft: -158,
        backgroundColor: "#29b029",
    },
    logIntoAccount: {
        width: 152,
        height: 24,
        color: "#29b029",
        lineHeight: 24,
        fontSize: 16,
    },
    logIntoAccountWrapper: {
        marginTop: 245.25,
        marginLeft: -163.5,
    },
    onboarding5: {
        borderRadius: 12,
        backgroundColor: "#fff",
        flex: 1,
        width: "100%",
        height: 812,
        overflow: "hidden",
    },
});

export default RegistrationOnboardScreen;
