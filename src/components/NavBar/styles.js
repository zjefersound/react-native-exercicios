import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
const styles = StyleSheet.create({
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