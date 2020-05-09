import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    bloco_verde: {
        backgroundColor: '#2E8B57',
        paddingHorizontal: 15,
        paddingVertical: 15,
        marginVertical: 5,
        color: "#FFF",
        fontSize: 18,

    },
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 20,
        justifyContent:'center',
        backgroundColor: '#282828',
        alignItems: 'stretch',
        
    },
    title: {
        fontSize: 30,
        color: '#00FA9A',
    },
    textHeader: {
        fontSize: 22,
        color: '#00FA9A',
    },
    header: {
        flexDirection: 'row',
        height: 60,
        width: Dimensions.get('window').width,
        top: 0,
        position: 'absolute',
        alignItems: 'center',
        backgroundColor: '#444',
        justifyContent: 'space-between',
        padding: 20,
        borderBottomColor: '#00FA9A',
        borderBottomWidth: 1,
    }   
});

export default styles;