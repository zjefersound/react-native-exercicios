import React from 'react';
import { View, Text } from 'react-native';
import global from './../../styles/global';
import styles from './styles';


function parOuImpar(num){
    if(num % 2 == 0){
        return(<Text style={styles.text_light}>Par</Text>);
    }else{
        return <Text style={styles.text_light}>Ímpar</Text>
    }
}

export default props => 
        <View style={ styles.cyan } >
            {
                parOuImpar(props.numero)
                
            }
        </View>