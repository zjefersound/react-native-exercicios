import React, { Component } from 'react';
import { View, Text, globalheet } from 'react-native';
import global from './styles/global';
import Parimpar from './components/ParImpar';
import { Inverter } from './components/Multi';
//1 componente 
import Simples from './components/Simples';
//array de componentes
import ManySimples from './components/ManySimples';

const num = 2343421;

export default function Routes() {
    return(
      <View style={ global.container }>
        <Simples texto = { num+' é Par ou Ímpar?' } />
        <Parimpar numero = { num }/>
        <Inverter texto = {'ANA BACANA'} />
      </View>
    );
} 
