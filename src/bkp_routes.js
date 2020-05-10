/**
 * 
 * 
 * BACKUP DO ARQUIVO ROUTES ANTES DE ADD NAVEGAÇÃO
 * 
 * 
 */

import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import global from './styles/global';
import Parimpar from './components/ParImpar';
import { Inverter, MegaSena } from './components/Multi';
//1 componente 
import Simples from './components/Simples';
//array de componentes
import ManySimples from './components/ManySimples';


const AppStack = createStackNavigator();
const num = 1;

export default function Routes() {
    return(
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor='#2F6F4F' />
        <View style = { global.container }>
          <View style = { global.header }>
            <Text style = { global.textHeader }>O pai ta on kkkkk VAPOVAPOVAPO</Text>
          </View>
          <Simples texto = { num+' é par sou ímpar?' } />
          <Parimpar numero = { num } />
          {/* <Inverter texto = {'subi no onibus'} /> */}
          <Text style = { global.title }>MegaSena:</Text>
          <MegaSena numeros = {6} />
          
        </View>
      </NavigationContainer>
    );
} 
