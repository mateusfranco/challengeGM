import React from 'react'
import { View,Text,StyleSheet } from 'react-native'

const NavBar = () => {
    return(
        <View style={styles.bar}>
            <Text style={styles.title}> CHALLENGE GM </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    bar:{
        backgroundColor: "#8bc34a",
        paddingVertical: 5,
    },
    title:{
        fontSize: 26,
        color: '#e0e0e0',
        alignSelf: "center",
    },

})

export default NavBar;