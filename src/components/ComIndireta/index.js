import React, { Component, useState } from 'react';
import { Text, View, TextInput, TouchableHighlight } from 'react-native';

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

export const LimparTexto = props => {
    return(
        <TouchableHighlight 
            style = { global.input_btn }
            onPress = { props.callback } 
            underlayColor = '#2F6F4F'>
            <Text style = { global.input_btn_text }>Limpar texto</Text>
        </TouchableHighlight>
    );
}

export class TextoSincronizado extends Component {
    state = {
        texto: '' 
    }
    alterarTexto = texto => {
        this.setState({ texto });
    }
    limparTexto = texto => {
        this.setState({ texto: '' });
    }
    render(){
        return (
            <View>
                <View style = { styles.painel }>
                    <Text style = { global.title }>{ this.state.texto }</Text>
                </View>
                <Entrada 
                    texto = { this.state.texto }
                    callback = { this.alterarTexto }/>
                <LimparTexto callback = { this.limparTexto } />
            </View>


        );
    }
}