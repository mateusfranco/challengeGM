import React from 'react'
import {Modal, Text, View, StyleSheet, Button} from 'react-native'
import { connect } from 'react-redux'
import {hideResource} from '../store/actions/languagesAction' 

const SingleResource = ({ indexID, base, showModal, hideResource}) => {
    let resource = base[indexID]
    if(resource !== undefined) resource = resource.resource

    return(
        <View >        
            <Modal
                animationType="slide"
                transparent={false}
                visible={showModal}
                >
                {(resource !== undefined ) ?
                <View style={styles.container}>
                    <View style={styles.padVerticalAll}>
                        <View style={[styles.row,styles.horizontalInfo]}>
                            <Text style={styles.allTextInfos}>created</Text>
                            <Text style={styles.response}>{resource.created_at}</Text>
                        </View>
                        <View style={[styles.row,styles.horizontalInfo]}>
                            <Text style={styles.allTextInfos}>updated</Text>
                            <Text style={styles.response}>{resource.updated_at}</Text>
                        </View>
                    </View>
                    <View style={styles.resourceAttribute}>
                        <Text style={styles.allTextInfos}>Resource</Text>
                        <Text style={styles.resourceText}>{resource.resource_id}</Text>
                    </View>
                    <View style={styles.padVerticalAll}>
                        <View style={[styles.row,styles.horizontalInfo]}>
                            <Text style={styles.allTextInfos}>module</Text>
                            <Text style={styles.response}>{resource.module_id}</Text>
                        </View>
                        <View style={[styles.row,styles.horizontalInfo]}>
                            <Text style={styles.allTextInfos}>value</Text>
                            <Text style={styles.response}>{resource.value}</Text>
                        </View>
                    </View>
                    <View style={styles.padVerticalAll}>
                        <View style={[styles.row,styles.horizontalInfo]}>
                            <Text style={styles.allTextInfos}>language</Text>
                            <Text style={styles.response}>{resource.language_id}</Text>
                        </View>
                        <View style={[styles.row,styles.horizontalInfo]}>
                            <Text style={styles.allTextInfos}>user modified</Text>
                            <Text style={styles.response}>{resource.user_modified}</Text>
                        </View>
                    </View>
                    <View style={styles.Button}>
                        <Button title='voltar' color='#76b22a' onPress={hideResource}></Button>
                    </View>
                </View>
                :
                <View></View>
                }

            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop: 30,
        marginHorizontal: 30,
    },
    Button:{
        paddingHorizontal: 80,
    },
    row:{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 2,
    },
    resourceAttribute:{
        flexDirection: "column",
        alignItems: "center",
        paddingVertical: 15,
    },  
    horizontalInfo:{
        paddingHorizontal:40,
    },
    allTextInfos:{
        fontSize: 16,
        fontWeight: "700",
    },
    resourceText:{
        paddingHorizontal: 40
    },
    response:{
        paddingLeft: 150,
    },
    padVerticalAll:{
        paddingVertical: 20,
    }

})

const mapStateToProps = (state) => ({
    base: state.languagesReducer.filteredBase,
    showModal: state.languagesReducer.modalSingleResource,
    indexID: state.languagesReducer.singleReourceID,
})

const mapDispatchToProps = {
    hideResource,
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleResource)
