import { Animated, StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'

const Paginate = ({ datas, currentIndex }: any) => {

    // const widthAnim = useRef(new Animated.Value(16)).current



    return (
        <View style={{ flexDirection: "row", gap: 4 ,marginLeft:20}}>
            {
                datas.map((e: any, i: any) => (
                    <Animated.View key={e.id} style={[styles.dot, currentIndex + 1 <= i ? { opacity: 0.5, } : { opacity: 1, width: 8 }]}>
                    </Animated.View>
                ))
            }
        </View>


    )
}

export default Paginate

const styles = StyleSheet.create({
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: "#29B029"
    }
})