import React, { Component } from 'react';
import { View, TextInput, Text, TouchableHighlight } from 'react-native';

//Estilos
import styles from './styles';
import global from './../../styles/global';

//componentes
import NavBar from './../../components/NavBar';

class Evento extends Component {
    state = {
        texto: '',
    }
    alterarTexto = texto => {
        this.setState({ texto  });
    }
    limparTexto = texto => {
        this.setState({ texto: '' });
    }
    render(){
        return(
            <View>
                <View style = {styles.painel}>
                    <Text style = { global.title } >
                        {this.state.texto}
                    </Text>
                </View>
                <TextInput 
                placeholder = 'Digite aqui...'
                style = { global.input }
                value = { this.state.texto } 
                onChangeText = { this.alterarTexto } />
                <TouchableHighlight
                    style = { global.input_btn }
                    onPress = { this.limparTexto}
                    underlayColor = '#2F6F4F'
                    >
                    <Text style = { global.input_btn_text } >Limpar</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

export default function Eventos({ navigation }){

    const num = 1;

    return(
        <View style = { global.container }>
           <NavBar texto = 'Eventos' />
           <Text style = { global.title } >Digite um texto:</Text>
           <Evento />
        </View>
    );
} 

