import { Dimensions, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ActionIcon, MenuIcon, RingIcon } from '../../components/Icons';
import SettingsIcon from '../../components/Icons/SettingsIcon';
import BudgetComponent from '../../components/BudgetComponents/BudgetComponent';
let { width: dwidth, height: dheight, fontScale: fontscale, } = Dimensions.get('window')



const HomeScreen = () => {

  console.log(dwidth, dheight, fontscale);

  return (
    <>


      <View style={styles.container}>

        <View style={styles.headericoncontainer}>
          <Pressable onPress={() => { console.log("menuclicked") }}>
            <MenuIcon />
          </Pressable >
          <View style={styles.headericoncontainerrightitems} >
            <Pressable onPress={() => { console.log("setting clicked") }}>
              <SettingsIcon />
            </Pressable>
            <Pressable onPress={() => { console.log("ring clicked ") }}>
              <RingIcon />
            </Pressable>
          </View>
        </View>

      <ScrollView>
        <Text style={styles.helloChadwick}>Hello Chadwick,</Text>
        <Text style={styles.whatExpensesDid1}>What expenses did you make today ?</Text>



        <View style={styles.savingsBudgetParent}>
          <Text style={[styles.savingsBudget1, styles.viewAllFlexBox]}>{`Savings & budget`}</Text>
          <Pressable onPress={() => {console.log("view all pressed") }}><Text style={[styles.viewAll, styles.viewAllFlexBox]}>View all</Text></Pressable>
        </View>

        <BudgetComponent />


        <BudgetComponent />


        <BudgetComponent />


        <BudgetComponent />

        <BudgetComponent />
        <BudgetComponent />
        <BudgetComponent />
        <BudgetComponent />
        <BudgetComponent />
        <BudgetComponent />




      </ScrollView> 
<View style={styles.ActionIcon}><ActionIcon /></View>


      </View>
    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#fff",
    position: 'relative', // Added this to make positioning of ActionIcon absolute relative to this container
  },
  headericoncontainer: {
    marginTop: dheight / 55,
    marginHorizontal: dwidth / 15,
    justifyContent: "space-between",
    flexDirection: 'row'
  },
  headericoncontainerrightitems: {

    flexDirection: 'row',
    gap: 32,
    justifyContent: "space-around"

  }

  ,
  helloChadwick: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: "700",
    fontFamily: "DMSans-Bold",
    color: "#29b029",
    textAlign: "left",
    marginTop: dheight / 21,
    marginLeft: dwidth / 16
  },
  whatExpensesDid1: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: "DMSans-Medium",
    color: "rgba(0, 0, 0, 0.8)",
    textAlign: "left",
    marginLeft: dwidth / 16,
    marginBottom: dheight / 103
  }
  ,












  viewAllFlexBox: {
    textAlign: "left",
    position: "absolute"
  },
  savingsBudget1: {
    top: 0,
    left: 0,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: "DMSans-Medium",
    color: "rgba(0, 0, 0, 0.8)"
  },
  viewAll: {
    top: 3,
    left: 288,
    fontSize: 12,
    textDecoration: "underline",
    lineHeight: 18,
    fontFamily: "DMSans-Regular",
    color: "#29b029"
  },
  savingsBudgetParent: {

    width: dwidth * 7 / 8,
    height: 24,
    marginTop: dheight / 50,
    marginHorizontal: dwidth / 13,
    marginBottom: dheight / 50,
  }
  , 
  ActionIcon: {
    position: 'absolute',
    bottom: 20, // Adjust the value to position the ActionIcon as needed from the bottom
    right: 20, // Adjust the value to position the ActionIcon as needed from the right
    zIndex: 5,
  },
})