import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CarIcon, ThreeDotIcon } from '../Icons'
let { width: dwidth, height: dheight, fontScale: fontscale, } = Dimensions.get('window')


const BudgetComponent = () => {
    return (
        <View style={styles.general}>
            <View style={styles.leftSide}>
                <CarIcon />

                <View style={styles.leftRight}>
                    <Text style={styles.text1}>Education</Text>
                    <Text style={styles.transactionCount}>22 transactions</Text>
                </View>


            </View>
            <Pressable onPress={() => { console.log("threedot pressed") }}>
            <ThreeDotIcon />
        </Pressable>
        </View >

    
  )
}

export default BudgetComponent

const styles = StyleSheet.create({

    general: {
        marginHorizontal: dwidth / 15,
        paddingHorizontal: dwidth / 21,
        paddingVertical: dheight / 68,

        justifyContent: "space-between",
        flexDirection: 'row',
        alignItems: 'center',
marginBottom: dheight/68,

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

        width: dwidth * 7 / 8,
        overflow: "hidden",

    },
    leftSide: {
        justifyContent: "space-between",
        flexDirection: 'row',
        gap: 15
    },
    leftRight: {


    },
    text1: {
        fontSize: 16,
        letterSpacing: 0.5,
        lineHeight: 24,
        fontWeight: "500",
        color: "rgba(0, 0, 0, 0.8)",
        textAlign: "left",
        width: 182,
        height: 24
    },
    transactionCount: {
        fontSize: 14,
        letterSpacing: 0.4,
        lineHeight: 18,
        fontWeight: "500",
        // fontFamily: "DMSans-Medium",
        color: "rgba(0, 0, 0, 0.8)",
        textAlign: "left"
    }
})