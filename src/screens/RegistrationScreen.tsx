import { Alert, Dimensions, Image, Linking, Pressable, StyleSheet, Text, TextInput, Touchable, View } from 'react-native';
import React, { useCallback, useState } from 'react';
let { width: dwidth, height: dheight, fontScale: fontscale, } = Dimensions.get('window')


const openurl = async (url: string) => {
  // Checking if the link is supported for links with custom URL scheme.
  const supported = await Linking.canOpenURL(url);

  if (supported) {
    // Opening the link with some app, if the URL scheme is "http" the web link should be opened
    // by some browser in the mobile
    await Linking.openURL(url);
  } else {
    Alert.alert(`Don't know how to open this URL: ${url}`);
  }
}

const RegistrationScreen = () => {



  console.log("width:", dwidth);
  console.log("height:", dheight);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("")
  const [password2, setPassword2] = useState<string>("");
  return (
    <>
      <Text style={styles.createAnAccount1}>Create an Account</Text>
      <Text style={styles.getAnAccount1}>Get an account and control your finances better with full control of your budgets and savings.</Text>


      <TextInput
        maxLength={40}
        onChangeText={text => setName(text)}
        value={name}
        autoCapitalize='words'

        placeholder="Enter name*"
        style={styles.inputContainer} />
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
        onChangeText={text => setPhone(text)}
        value={phone}
        placeholder="Enter Phone number*"
        style={styles.inputContainer} />
      <TextInput
        maxLength={40}
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry={true}
        placeholder="Enter password*"
        style={styles.inputContainer} />

      <TextInput
        maxLength={40}
        onChangeText={text => setPassword2(text)}
        value={password2}
        secureTextEntry={true}
        placeholder="Confirm password*"
        style={styles.inputContainer} />

      <Pressable style={styles.createAccountParent} onPress={() => { } }>
        <Text style={styles.createAccount}>Create account</Text>
      </Pressable>

      <Text style={styles.byCreatingAnContainer}>{`By creating an account, you have accepted the `}
        <Text style={styles.termsConditions}>{`TERMS & CONDITIONS`}</Text>{` of Track buddy. `}
      </Text>
    
      <View style={styles.lineParent}>
        <View style={styles.groupChild} />
        <View style={styles.orCreateAccountWithWrapper}>
          <Text style={styles.orCreateAccount1}>Or Create account with</Text>
        </View>
      </View>

      <Pressable onPress={() => console.log('pressed')}>
      <View style={styles.frameParent}>
        <View style={styles.iconParent}>
          <Image style={styles.icon1} resizeMode="cover" source={require("../assets/images/google.png")} />
          <Text style={styles.text1}>Google</Text> 
        </View>   
      </View>
      </Pressable>


      <Pressable onPress={() => { }}>
        <Text style={styles.text}>
          <Text style={styles.alreadyHaveAn1}>{`Already have an Account ? `}</Text>
          <Text style={styles.logIn}>Log in</Text>
        </Text>
      </Pressable>
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

    width: dwidth/8*7,
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
   height: dheight/12,
    marginHorizontal: dwidth /15,
    width: dwidth * 7 / 8,
    paddingHorizontal: 115,
    paddingVertical: dheight/50,
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
export default RegistrationScreen;
