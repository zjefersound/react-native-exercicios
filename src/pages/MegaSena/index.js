import React, { Component } from 'react';
import { View, Button, Text, StatusBar } from 'react-native';

import styles from './styles';

const MegaSenaComp = props => {
    const [min,max] = [1, 60];
    const numeros = Array( props.numeros || 6 ).fill(0)
    for(let i = 0; i < numeros.length; i++){
        let novo = 0;
        while(numeros.includes(novo)){
            novo = Math.floor(Math.random() * (max - min + 1) + min);
        }
        numeros[i] = novo;
    }
    numeros.sort( (a,b) => a - b );

    return <Text style = { styles.bloco_verde }> { numeros.join(', ') } </Text>
}

export default function MegaSena({ navigation }){

    //const navigation = useNavigation();
    const num = 1;

    return(
        <View style = { styles.container }>
            <View style = { styles.header }>
                <Text style = { styles.textHeader }>O pai ta on kkkkk</Text>
            </View>
            <Text style = { styles.title }>MegaSena:</Text>
            <MegaSenaComp numeros = {6} />
            <Button style={styles.bloco_verde} onPress={() => navigation.goBack()} title="Go back home" />

        </View>
    );
} 
