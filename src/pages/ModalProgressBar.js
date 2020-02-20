import React,{Component} from 'react'
import {Modal, Text, Image, View, Alert, ProgressBarAndroid, StyleSheet} from 'react-native'
import { connect } from 'react-redux'
import iconGM from '../assets/img/GreenIcone.jpeg' 

const ModalProgressBar = ({modalVisibility}) => {
    return (
        <View style={{marginTop: 22}}>
            <Modal
                animationType="slide"
                transparent={false}
                visible={modalVisibility}
                >
                <View style={{marginTop: 50}}>
                    <View style={styles.elementsToMiddle}>
                        <Text> Desafio GM</Text>
                    </View>
                    <View style={styles.elementsToMiddle}>
                        <Image style={styles.imageIcon} source={iconGM}></Image>
                    </View>
                    <View style={styles.toProgressBar}>
                        <ProgressBarAndroid styleAttr="Horizontal" color="#37be19" />
                    </View>
                    <View style={[styles.spaceInfoLabel,styles.elementsToMiddle]}>
                        <Text> aguarde enquanto os dados sao carregados. </Text>
                    </View>
                </View>
            </Modal>
        </View>
    )    
}

const styles = StyleSheet.create({
    toProgressBar: {
        flex: 1,
        paddingHorizontal: 10,
        paddingTop: '90%',
    },
    elementsToMiddle:{
        flex: 1,
        alignItems: "center",
    },
    imageIcon:{
        marginVertical:'30%',
    },
    spaceInfoLabel:{
        marginVertical:20,
    }
})

const mapStateToProps = (state) => ({
    modalVisibility: state.languagesReducer.modalLoading
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalProgressBar)



