import React,{Component} from 'react'
import { View, Text, StyleSheet,TextInput,Picker } from 'react-native'
import { connect } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import NavBar from '../components/NavBar'
import languages from '../staticData/languages'
import ButtomGM from '../components/ButtomGM'
import {selectModules,
        activeFilters,
        changeTextInput,
        resetFilters,
        selectorActivated
} from '../store/actions/languagesAction'


const FiltersPage = ({
    modules,
    selectModules,
    activeFilters,
    changeTextInput,
    resetFilters,
    selectorActivated,
    textValue,
    module_id,
    language_id,
    navigation: { navigate }
    }) => {

    if(!modules.size) selectModules()
    let dataModules_id = [{label:"",value:""}]
    modules.forEach(element => {
        dataModules_id.push({label:`${element}`, value:`${element}`})
    })

    return(
        <View>
            <NavBar></NavBar>
            <View style={styles.container}>
                <View style={styles.formsLine}>
                    <Text style={[styles.spacingH]}>Value</Text>
                    <View style={styles.viewStreched}>
                        <TextInput
                            style={[styles.textValue, styles.bealtifulbar]}
                            onChangeText={e=>changeTextInput(e)}
                            value={textValue}
                        />
                    </View>
                </View>
                <View style={styles.formsLine}>
                    <Text style={[styles.spacingH]}>Language ID</Text>
                    <View style={[styles.viewStreched, styles.bealtifulbar]}>
                        <Picker
                            mode='modal'
                            onValueChange={e=>selectorActivated(e, 'language')}
                            selectedValue={language_id}
                        >
                            {languages.map(itemData => {
                                return(<Picker.Item label={itemData.label} value={itemData.value}></Picker.Item>)
                            })}
                        </Picker>
                    </View>
                </View>
                <View style={styles.formsLine}>
                    <Text style={[styles.spacingH]}>Module ID</Text>
                    <View style={[styles.viewStreched, styles.bealtifulbar]}>
                        <Picker
                            mode='modal'
                            onValueChange={e=>selectorActivated(e, 'modules')}
                            selectedValue={module_id}
                        >
                            {dataModules_id.map(itemData => {
                                return(<Picker.Item label={itemData.label} value={itemData.value}></Picker.Item>)
                            })}
                        </Picker>
                    </View>
                </View>
                <View style={styles.formsLine}>
                    <View style={[styles.formsLine,styles.formsButton]}>
                            <ButtomGM whenClick={()=>resetFilters()} title='clear filter'></ButtomGM>
                            <ButtomGM whenClick={()=>{
                            activeFilters()
                            navigate('lista')
                            }} title='filter'></ButtomGM>
                        
                    </View>
                </View>
            </View>
        </View>
    ) 
    
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal:20,
        marginVertical:50,
        backgroundColor:'#efefef',
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    formsLine:{
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 20,
    },
    formsButton:{
        paddingTop: 20,
        flex: 1,
        justifyContent: "space-around",
    },
    viewStreched:{
        flex: 1,
    },
    textValue:{    
        height: 38,
    },
    spacingH:{
        marginHorizontal:20,
    },
    bealtifulbar:{
        borderStyle: "solid",
        borderColor: "#4f9a6c",
        borderBottomWidth: 1.5,
        borderRadius:10,
    }   
})

const mapStateToProps = (state) => ({
    modules:state.languagesReducer.modules_id,
    textValue:state.languagesReducer.textValue,
    module_id:state.languagesReducer.module_id,
    language_id:state.languagesReducer.language_id,
})

const mapDispatchToProps = {
    selectModules,
    activeFilters,
    changeTextInput,
    resetFilters,
    selectorActivated
}

export default connect(mapStateToProps, mapDispatchToProps)(FiltersPage)
