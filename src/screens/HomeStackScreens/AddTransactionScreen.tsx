import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { ArrowBackIcon } from '../../components/Icons'
import { dheight, dwidth } from '../../utils/screenwidth'
import { Picker } from '@react-native-picker/picker';
import { useFocusEffect } from '@react-navigation/native';
import { AvoidSoftInput, AvoidSoftInputView } from 'react-native-avoid-softinput';
const AddTransactionScreen = ({navigation}:any) => {
    console.log(dwidth,dheight);
    const [name, setName] = useState<string>('')
    const [selectedLanguage, setSelectedLanguage] = useState<string>("");
    const [amount, setAmount] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    React.useEffect(() => {
       console.log(selectedLanguage); 
    },[selectedLanguage])

    const onFocusEffect = React.useCallback(() => {
        // This should be run when screen gains focus - enable the module where it's needed
        AvoidSoftInput.setShouldMimicIOSBehavior(true);
        AvoidSoftInput.setEnabled(true);
        return () => {
            // This should be run when screen loses focus - disable the module where it's not needed, to make a cleanup
            AvoidSoftInput.setEnabled(false);
            AvoidSoftInput.setShouldMimicIOSBehavior(false);
        };
    }, []);

    useFocusEffect(onFocusEffect); // register callback to focus events

    return (
        <>


            <Pressable onPress={() => {navigation.goBack() }} style={styles.backicon}>
                <ArrowBackIcon />
            </Pressable>
            <Text style={styles.addTransaction}>Add Transaction</Text>
            <Text style={styles.details}>Details</Text>

            <AvoidSoftInputView>
                <ScrollView>
            <TextInput
                maxLength={40}
                onChangeText={text => setName(text)}
                value={name}
                autoCapitalize='words'

                placeholder="Enter income name*"
                style={styles.inputContainer} />
            <View style={styles.inputContainer}>
                 <Picker
                   
                    selectedValue={selectedLanguage}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedLanguage(itemValue)
                    }>
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>
    </View>
         
        
            <Text style={styles.details}>Amount & Description</Text>
            <TextInput
                maxLength={40}
                keyboardType='numeric'
                onChangeText={value => setAmount(value.replace(/[^0-9]/g, ''))}
                value={amount}
                placeholder="Enter Amount*"
                style={styles.inputContainer} />
            <TextInput
                maxLength={40}
                onChangeText={text => setDescription(text)}
                value={description}
                autoCapitalize='words'

                placeholder="Enter Description*"
                style={styles.inputContainer} />
                    <Pressable style={styles.createAccountParent} onPress={() => { }}>
                        <Text style={styles.createAccount}>Create account</Text>
                    </Pressable>
            </ScrollView>
            </AvoidSoftInputView>

            

        </>
    )
}

export default AddTransactionScreen

const styles = StyleSheet.create({
    backicon:{
        marginLeft: dwidth/15,
        marginTop: dheight/ 20

    },
    addTransaction: {
        fontSize: 24,
        lineHeight: 32,
        fontWeight: "700",
        // fontFamily: "DMSans-Bold",
        color: "#29b029",
        textAlign: "left",
        marginLeft: dwidth/16,
        marginTop: dheight/34
    },
    details: {
        fontSize: 16,
        letterSpacing: 0.5,
        lineHeight: 24,
        fontWeight: "500",
        // fontFamily: "DMSans-Medium",
        color: "rgba(0, 0, 0, 0.8)",
        textAlign: "left",
        marginLeft: dwidth / 16,
        marginTop: dheight / 34
    },
    inputContainer: {
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'rgba(41, 176, 41, 0.20)',
        // backgroundColor: '#FFF',
        shadowOffset: { width: 0, height: 25 },
        shadowRadius: 40,
        shadowOpacity: 0.06,
        elevation: -10,
        width: dwidth / 8 * 7,
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginTop: 24,
        marginHorizontal: dwidth / 17,
        color: ""
        
    }
    , createAccount: {
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
})