import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import HomeStack from '../Stacks/HomeStack'
import BudgetStack from '../Stacks/BudgetStack'
import StatisticsStack from '../Stacks/StatisticsStack'
import ProfileStack from '../Stacks/ProfileStack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeTabIcon } from '../components/Icons'

const Tab = createBottomTabNavigator()
const HomeTab = () => {
    return (
        <Tab.Navigator screenOptions={() => ({
            tabBarStyle: {
                borderTopWidth: 0,
            },
            tabBarActiveTintColor: 'red',
            tabBarInactiveTintColor: 'blue',
            activeTintColor: "red",

            headerShown: false,
            tabBarShowLabel: false,
            headerStyle: { elevation: 0 }, cardStyle: { backgroundColor: 'red' },
       
           
        })}
           
        >
            <Tab.Screen component={HomeStack} name='HomeStack' 
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <HomeTabIcon
                                stroke={focused ? '#815CFF' : '#444444'}
                                fill={focused ? '#E5DEFF' : '#fff'}
                            />
                            {focused ? (
                                <Text style={{ marginLeft: 5, fontSize: 12, color: '#815CFF' }}>
                                    Home
                                </Text>
                            ) : null} 
                          
                        </View>
                    ),
        
                
                }}
            
            />
            <Tab.Screen component={BudgetStack} name='BudgetStack' />
            <Tab.Screen component={StatisticsStack} name='StatisticsStack' />
            <Tab.Screen component={ProfileStack} name='ProfileStack' />

        </Tab.Navigator>
    )
}

export default HomeTab

const styles = StyleSheet.create({})