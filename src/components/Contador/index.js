import React, { Component, useState, useEffect } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

import styles from './styles';

//Criando componente com classe
export default class Contador extends Component{
    state = {
        numero: 0
    }
    maisUm = () => { 
        this.setState({ numero: this.state.numero + 1 })
    }
    limpar = () => { 
        this.setState({ numero: 0 })
    }

    render(){
        return(
            <View style = {styles.contbox}>
                <Text style = { styles.title }>Contador:</Text>
                <Text style = { styles.numero }>{ this.state.numero }</Text>
                <TouchableHighlight
                    style = { styles.botao }
                    onPress = { this.maisUm }
                    onLongPress = {this.limpar}
                    underlayColor = '#d5f0c7'
                    >
                    <Text style = { styles.botao_text }>Incrementar/zerar</Text>
                </TouchableHighlight>    
            </View>
        );
    }
}