import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import {showResource} from '../store/actions/languagesAction'
const MainList = ({resource_id, update_at, value, index, showResource}) => {
    return (
        <View onTouchEnd={() => showResource(index)} style={styles.list}>
            <View style={styles.ViewOne}>
                <Text style={styles.resource}>{resource_id}</Text>
                <Text style={styles.data}>{update_at}</Text>
            </View>
            <View style={styles.ViewOne}>
                <Text style={styles.value}>{value}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    list:{
        flexDirection: "row",
        flex: 1,
        justifyContent: "space-between",
        borderColor: '#000000',
        borderTopWidth: 0.2,
        paddingVertical:3,
        paddingHorizontal: 10,
    },
    ViewOne:{
        flexDirection: "column",
        width: '40%',
    },
    resource:{
        fontSize: 12,
        overflow: "hidden",
    },
    data:{
        fontSize: 7,
    },
    value:{
        fontSize: 10,
    }
    
})


const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    showResource,
}

export default connect(mapStateToProps, mapDispatchToProps)(MainList)
