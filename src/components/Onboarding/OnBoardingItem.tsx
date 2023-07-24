import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native'

const SCREEN_WIDTH = Dimensions.get('window').width

const OnBoardingItem = ({ item }: any) => {
    return (
        <View style={styles.item}>
            <Image source={item.image} style={{ width: SCREEN_WIDTH - 32, alignSelf: "center", height: 300 }} />
            <View style={{ alignItems: "center", justifyContent: "center", marginTop: 32 }}>
                <Text style={{ color: "#29B029", fontSize: 26, fontWeight: "500", textAlign: "left" }}>{item.title}</Text>
                <Text style={{ color: "#29B029", textAlign: "left" }}> {item.description}</Text>
            </View>
        </View >
    )
}

export default OnBoardingItem

const styles = StyleSheet.create({
    item: {
        width: SCREEN_WIDTH,
        paddingHorizontal: 16,
        marginTop: 41
    }
})