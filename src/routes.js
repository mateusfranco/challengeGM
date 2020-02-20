import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialIcons'
import HomePage from './pages/HomePage'
import FilterPage from './pages/FiltersPage'


export default () => {
    
    const Tab = createBottomTabNavigator()
    
    return(
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: () => {
                        let IconTab = ''
                        if(route.name === 'lista') IconTab = 'format-list-bulleted'
                        else IconTab = 'search'
                        return <Icon name={IconTab} size={30}  /> 
                    }
                })}
            >

                <Tab.Screen name="lista" component={HomePage} />
                <Tab.Screen name="filtros" component={FilterPage} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}