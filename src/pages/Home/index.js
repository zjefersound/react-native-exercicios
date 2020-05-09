import React, { Component } from 'react';
import { View, Button, Text, StatusBar } from 'react-native';

import styles from './styles';

export default function Home({ navigation }){

    //const navigation = useNavigation();
    const num = 1;

    return(
        <View style = { styles.container }>
            <View style = { styles.header }>
                <Text style = { styles.textHeader }>O pai ta on kkkkk</Text>
            </View>
            <Text style = { styles.title }>Home page:</Text>

        </View>
    );
} 

