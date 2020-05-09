import React, { Component } from 'react';
import { View, Button, Text, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


//import { Inverter, MegaSena } from './../../components/Multi';
import Simples from './../../components/Simples';

export default function ParImpar(){

    const navigation = useNavigation();

    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                onPress={() => navigation.navigate('Notifications')}
                title="Go to notifications"
            />
        </View>
    );
} 