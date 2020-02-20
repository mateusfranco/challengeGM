import React from 'react'
import { View,Text,StyleSheet,Button } from 'react-native'

const ButtomGM = ({title,whenClick}) => {
    return <Button
        title={title}
        onPress={()=>whenClick()}
        color="#76b22a"
    >
    </Button>
}


const styles = StyleSheet.create({
    
})

export default ButtomGM;