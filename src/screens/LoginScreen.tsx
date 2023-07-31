import { Alert, Button, Dimensions, Image, Linking, Pressable, ScrollView, StyleSheet, Text, TextInput, Touchable, View } from 'react-native';
import React, { useCallback, useState } from 'react';
import { AvoidSoftInput, AvoidSoftInputView } from 'react-native-avoid-softinput';
import { useFocusEffect } from '@react-navigation/native';
let { width: dwidth, height: dheight, fontScale: fontscale, } = Dimensions.get('window')

import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

const signIn = async () => {
    try {
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        console.log(userInfo);
    } catch (error) {
        // if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        //     // user cancelled the login flow
        // } else if (error.code === statusCodes.IN_PROGRESS) {
        //     // operation (e.g. sign in) is in progress already
        // } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        //     // play services not available or outdated
        // } else {
        //     // some other error happened
        // }
        console.log(JSON.stringify(error));
    }
};

const LoginScreen = ({navigation}:any) => {

    // how to use google authentication with nodejs and react native?

    // console.log("width:", dwidth);
    // console.log("height:", dheight);



    // const onFocusEffect = React.useCallback(() => {
    //     // This should be run when screen gains focus - enable the module where it's needed
    //     AvoidSoftInput.setShouldMimicIOSBehavior(true);
    //     AvoidSoftInput.setEnabled(true);
    //     return () => {
    //         // This should be run when screen loses focus - disable the module where it's not needed, to make a cleanup
    //         AvoidSoftInput.setEnabled(false);
    //         AvoidSoftInput.setShouldMimicIOSBehavior(false);
    //     }; 
    // }, []);

    // useFocusEffect(onFocusEffect); // register callback to focus events

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [password, setPassword] = useState<string>("")
    const [password2, setPassword2] = useState<string>("");
    return (
        <>
            {/* <AvoidSoftInputView>
                <ScrollView> */}
            <Text style={styles.createAnAccount1}>Sign in</Text>
            <Text style={styles.getAnAccount1}>Get an account and control your finances better with full control of your budgets and savings.</Text>


      
            <TextInput
                inputMode='email'
                autoComplete='email'
                maxLength={40}
                onChangeText={text => setEmail(text)}
                value={email}
                placeholder="Enter email*"
                style={styles.inputContainer} />
           
            <TextInput
                maxLength={40}
                onChangeText={text => setPassword(text)}
                value={password}
                secureTextEntry={true}
                placeholder="Enter password*"
                style={styles.inputContainer} />

            <Pressable style={styles.createAccountParent} onPress={() => { }}>
                <Text style={styles.createAccount}>Log in</Text>
            </Pressable>

            <View style={styles.lineParent}>
                <View style={styles.groupChild} />
                <View style={styles.orCreateAccountWithWrapper}>
                    <Text style={styles.orCreateAccount1}>Or Log in with</Text>
                </View>
            </View>

            <Pressable onPress={signIn}>
                <View style={styles.frameParent}>
                    <View style={styles.iconParent}>
                        <Image style={styles.icon1} resizeMode="cover" source={require("../assets/images/google.png")} />
                        <Text style={styles.text1}>Google</Text>
                    </View>
                </View>
            </Pressable>


            <Pressable onPress={() => { navigation.navigate("RegistrationScreen") }}>
                <Text style={styles.text}>
                    <Text style={styles.alreadyHaveAn1}>{`Don't have an account ? `}</Text>
                    <Text style={styles.logIn}>Register here!</Text>
                </Text>
            </Pressable>
          



          
{/*                  
                </ScrollView>
            </AvoidSoftInputView> */}
        </>




    );
}


const styles = StyleSheet.create({
    createAnAccount1: {
        fontSize: 24,
        lineHeight: 32,
        fontWeight: "700",
        fontFamily: "DM Sans_bold",
        color: "#29b029",
        textAlign: "left",
        width: dwidth,
        marginTop: 41,
        marginLeft: 26,
    },
    getAnAccount1: {
        fontSize: 14,
        lineHeight: 18,
        fontWeight: "500",
        fontFamily: "DM Sans_medium",
        color: "rgba(0, 0, 0, 0.8)",
        textAlign: "left",
        width: 327,
        marginLeft: 27,
        marginTop: 8,
    },
    inputContainer: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'rgba(41, 176, 41, 0.20)',
        backgroundColor: '#FFF',
        shadowOffset: { width: 0, height: 25 },
        shadowRadius: 40,
        shadowOpacity: 0.06,
        elevation: -10,
        width: dwidth / 8 * 7,
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginTop: 24,
        marginHorizontal: dwidth / 17
    }, createAccount: {
        fontSize: 18,
        lineHeight: 24,
        fontWeight: "500",
        fontFamily: "DM Sans_medium",
        color: "#fff",
        textAlign: "left"
    },
    createAccountParent: {
        borderRadius: 10,
        backgroundColor: "#29b029",
        marginTop: dheight / 20,
        width: dwidth / 8 * 7,
        marginHorizontal: dwidth / 16,
        paddingHorizontal: 100,
        paddingVertical: 16,
    },
    termsConditions: {

    },
    byCreatingAnContainer: {
        fontSize: 10,
        lineHeight: 14,
        fontFamily: "DM Sans_regular",
        color: "#000",
        textAlign: "center",
        width: dwidth * 7 / 10,
        alignItems: "center",
        marginHorizontal: dwidth / 8,
        marginTop: dheight / 68
    },











    groupChild: {
        top: 12,
        left: 0,
        borderStyle: "solid",
        borderColor: "#000",
        borderTopWidth: 1,
        width: 323,
        height: 1,
        position: "absolute"
    },
    orCreateAccount1: {
        fontSize: 10,
        lineHeight: 14,
        fontFamily: "DM Sans_regular",
        color: "#29b029",
        textAlign: "center"
    },
    orCreateAccountWithWrapper: {
        top: 0,
        left: 94,
        backgroundColor: "#fff",
        flexDirection: "row",
        paddingHorizontal: 12,
        paddingVertical: 2,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute"
    },
    lineParent: {

        width: dwidth / 8 * 7,
        height: 18,
        marginHorizontal: dwidth / 12,
        marginTop: dheight / 68
    },





    icon1: {
        width: 32,
        height: 32,
        overflow: "hidden"
    },
    text1: {
        fontSize: 16,
        letterSpacing: 0.5,
        lineHeight: 24,
        fontWeight: "700",
        fontFamily: "DM Sans_bold",
        color: "#000",
        textAlign: "left",
        marginLeft: 8
    },
    iconParent: {
        flexDirection: "row",
        alignItems: "center"
    },
    frameParent: {
        borderRadius: 10,
        backgroundColor: "#fff",
        shadowColor: "rgba(0, 0, 0, 0.06)",
        shadowOffset: {
            width: 0,
            height: 25
        },
        shadowRadius: 40,
        elevation: 40,
        shadowOpacity: 1,
        borderStyle: "solid",
        borderColor: "rgba(41, 176, 41, 0.2)",
        borderWidth: 1,
        height: dheight / 12,
        marginHorizontal: dwidth / 15,
        width: dwidth * 7 / 8,
        paddingHorizontal: 115,
        paddingVertical: dheight / 50,
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        marginTop: dheight / 68
    }

    ,


    alreadyHaveAn1: {
        fontFamily: "DM Sans_regular",
        color: "#000",

    },
    logIn: {
        // textDecoration: "underline",
        fontWeight: "500",
        fontFamily: "DM Sans_medium",
        color: "#29b029"
    },
    text: {
        fontSize: 14,
        lineHeight: 18,
        textAlign: "center",
        width: dwidth,
        marginTop: dheight / 68
    }


});
export default LoginScreen;
