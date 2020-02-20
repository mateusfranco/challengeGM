import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavBar from '../components/NavBar'
import MainList from '../components/MainList'
import lang from '../api/Languages'
import { baseRequest } from '../store/actions/languagesAction'
import ModalProgressBar from './ModalProgressBar'
import SingleResource from './SingleResource'


const search_res = (actionReq) => {
    lang.then(res => {
        actionReq(res.data)
    }).catch(err => {
        console.log('\n' + err + '\n')
    })

}

const baseRender = (base,filterActivated) => {
    let list
    if(base.length){
        list = <FlatList 
            data={base}
            renderItem={({ item, index }) => <MainList 
                                        resource_id={item.resource.resource_id} 
                                        update_at={item.resource.updated_at} 
                                        value={item.resource.value} 
                                        index={index}
                                        />}
        />            
    }else{
        list = <View style={styles.labelInfos}>
            <Text style={styles.labelFonts}>
                {(filterActivated) ?
                    "Os filtros nao retornaram nenhum resultado"
                  :
                    "A base de dados nao foi baixada"
                   }    
            </Text>
        </View>
    }
    return list
}

const HomePage = ({baseRequest, base, filterActivated}) => {

    if( !base.length && !filterActivated) search_res(baseRequest)
    
    return(
        <View style={styles.container}>
            <NavBar></NavBar>
            <SafeAreaView>
                {baseRender(base,filterActivated)}
            </SafeAreaView>
            <ModalProgressBar></ModalProgressBar>
            <SingleResource></SingleResource>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: "column",
        flex: 1,
        justifyContent: "space-between",
        alignSelf: "stretch",
    },
    labelInfos:{
        alignItems: "center",
        borderColor: "black",
        marginHorizontal: 20,
        paddingVertical:20,
        borderRadius:5,
        backgroundColor: "#76b22a",
    },
    labelFonts:{
        color: "white",
        fontSize: 15,
    }
})

const mapStateToProps = (state) => ({
    base:state.languagesReducer.filteredBase,
    filterActivated: state.languagesReducer.filterActivated,
})

const mapDispatchToProps = {
    baseRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
