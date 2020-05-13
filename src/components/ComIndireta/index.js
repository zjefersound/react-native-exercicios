import React, { Component, useState } from 'react';
import { Text, View, TextInput } from 'react-native';

import styles from './styles';
import global from './../../styles/global';

export const Entrada = props => {
    return(
        <View>
            <TextInput style = { global.input }  
                    value = { props.texto } 
                    onChangeText = { props.callback } />
        </View>
    );
}

export class TextoSincronizado extends Component {
    state = {
        texto: '' 
    }
    alterarTexto = texto => {
        this.setState({ texto });
    }
    render(){
        return (
            <View>
                <Text>BUCEEEEEEEETAAAAAAAAAAAAAA</Text>
            </View>
        );
    }
}