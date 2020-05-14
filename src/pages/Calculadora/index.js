import React, { Component, useState } from 'react';
import { View, Text, TouchableHighlight, ScrollView } from 'react-native';

//Estilos
import styles from './styles';
import global from './../../styles/global';

//componentes
import NavBar from './../../components/NavBar';

export const Botao = props => {
    return(
        <TouchableHighlight style = { props.estilo }
            onPress = { props.callback }
            onLongPress = { props.callbackLong }
            underlayColor = { props.clickColor }>
            <Text style = { props.estiloTexto }>{ props.texto }</Text>
        </TouchableHighlight>
    );
}
export const Painel = props => {
    const [ num, setNum ] = useState('');
    const [ num2, setNum2 ] = useState('');
    const [ operacao, setOperacao ] = useState('');
    const [ result, setResult ] = useState(0);

    const limpar = () => {
        setNum('');
        setNum2('');
        setResult('');
        setOperacao('');
    }
    const backspace = () => {
        let text, new_num;
        if(num !== ''){
            if(num2 != ''){
                text = String(num2).split('');
                text.pop();
                new_num = text.join('');
                setNum2(new_num);
            }else if(num2 == '' && operacao != ''){
                setOperacao('')
            }else{
                text = String(num).split('');
                text.pop();
                new_num = text.join('');
                setNum(new_num);
            }
        }
    }
    const calcular = () => {
        let res = 0;
        switch (operacao){
            case '+':
                res = Number(num) + Number(num2);
                break;
            case '-':
                res = Number(num) - Number(num2);
                break;
            case '*':
                res = Number(num) * Number(num2);
                break;
            case '/':
                if(num2 != 0){
                    res = Number(num) / Number(num2);
                    res.toFixed(2);
                }else{
                    res = 'Erro'
                }
                break;
            default:
                res = Number(num);
        }
        setResult( String(res) );
    }
    function defineNumero(numero){    
        if(operacao === ''){
            setNum(String(num)+String(numero));
        }else{
            setNum2(String(num2)+String(numero));
        }   
    }
    function defineOperacao(op){
        if( num !=''){
            setOperacao(op);
        }
    }

    return(
        <View style = { styles.painel }>
            <NavBar texto = 'Calculadora'/>
            <View style = { styles.result_block }>
                <View style = { styles.result_line }>
                    <Text style = { styles.result_number }>{num}</Text>
                </View>
                <View style = { styles.result_line }>
                    <Text style = { styles.result_number }>{operacao} {num2}</Text>
                </View>
                <View style = { styles.result_line }>
                    <Text style = { global.title }>{result}</Text>
                </View>
            </View>
            <View style = { styles.keyboard_block }>
                <View style = { styles.keyboard_line }>
                    <Botao estilo = { styles.keyboard_key } 
                        clickColor = '#333'
                        texto = '7' 
                        estiloTexto = { global.title } 
                        callback = { () => defineNumero(7)}
                        />
                    <Botao estilo = { styles.keyboard_key } 
                        clickColor = '#333'
                        texto = '8' 
                        estiloTexto = { global.title } 
                        callback = { () => defineNumero(8)}
                        />
                    <Botao estilo = { styles.keyboard_key } 
                        clickColor = '#333'
                        texto = '9' 
                        estiloTexto = { global.title } 
                        callback = { () => defineNumero(9)}
                        />
                    <Botao estilo = { styles.keyboard_key } 
                        clickColor = '#333'
                        texto = '*' 
                        callback = { () => defineOperacao('*') }
                        estiloTexto = { global.title } /> 
                </View>
                <View style = { styles.keyboard_line }> 
                    <Botao estilo = { styles.keyboard_key }
                        clickColor = '#333' 
                        texto = '4' 
                        estiloTexto = { global.title } 
                        callback = { () => defineNumero(4)}
                        />
                    <Botao estilo = { styles.keyboard_key } 
                        clickColor = '#333'
                        texto = '5' 
                        estiloTexto = { global.title } 
                        callback = { () => defineNumero(5)}
                        />
                    <Botao estilo = { styles.keyboard_key } 
                        clickColor = '#333'
                        texto = '6' 
                        estiloTexto = { global.title } 
                        callback = { () => defineNumero(6)}
                        />
                    <Botao estilo = { styles.keyboard_key } 
                        clickColor = '#333'
                        texto = '/' 
                        callback = { () => defineOperacao('/') }
                        estiloTexto = { global.title } /> 
                </View>
                <View style = { styles.keyboard_line }>
                    <Botao estilo = { styles.keyboard_key } 
                        clickColor = '#333'
                        texto = '1' 
                        estiloTexto = { global.title } 
                        callback = { () => defineNumero(1)}
                        />
                    <Botao estilo = { styles.keyboard_key } 
                        clickColor = '#333'
                        texto = '2' 
                        estiloTexto = { global.title } 
                        callback = { () => defineNumero(2)}
                        />
                    <Botao estilo = { styles.keyboard_key } 
                        clickColor = '#333'
                        texto = '3' 
                        estiloTexto = { global.title } 
                        callback = { () => defineNumero(3)}
                        />
                    <Botao estilo = { styles.keyboard_key } 
                        clickColor = '#333'
                        texto = '-' 
                        callback = { () => defineOperacao('-') }
                        estiloTexto = { global.title } /> 
                </View>
                <View style = { styles.keyboard_line }>
                    <Botao estilo = { styles.keyboard_key } 
                        clickColor = '#333'
                        texto = '0' 
                        estiloTexto = { global.title } 
                        callback = { () => defineNumero(0)}
                        />
                    <Botao estilo = { styles.keyboard_key } 
                        texto = '<--' 
                        callback = { backspace }
                        callbackLong = { limpar }
                        estiloTexto = { global.title } 
                        clickColor = '#333'/>
                    <Botao estilo = { styles.keyboard_key }
                        clickColor = '#333' 
                        texto = '+' 
                        callback = { () => defineOperacao('+') }
                        estiloTexto = { global.title } /> 
                </View>
                <View style = { styles.keyboard_line }>
                    <Botao estilo = { styles.keyboard_button } 
                        texto = '=' 
                        callback = {calcular}
                        clickColor = '#2F6F4F'
                        estiloTexto = { styles.keyboard_button_text } />     
                </View>      
            </View>
        </View>
    );
}

export default function Calculadora({ navigation }){

    return(
        <Painel />    
    );
} 

