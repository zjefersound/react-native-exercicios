import React, { Component } from 'react';
import { StatusBar, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createDrawerNavigator, DrawerItems } from '@react-navigation/drawer';

import ParImpar from './pages/ParImpar';
import MegaSena from './pages/MegaSena';
import Home from './pages/Home';
import ValidarProps from './pages/ValidarProps';
import Eventos from './pages/Eventos';
import ComunicacaoDireta from './pages/ComunicacaoDireta';
import ComunicacaoIndireta from './pages/ComunicacaoIndireta';
import Calculadora from './pages/Calculadora';
import ListaAlunos from './pages/ListaAlunos';

import GreenTheme from './Themes/GreenTheme';

const AppDrawer = createDrawerNavigator();

export default function Routes() {
    return(      
      <NavigationContainer theme = { GreenTheme }>
        <StatusBar barStyle="light-content" backgroundColor='#2F6F4F' />
        <AppDrawer.Navigator initialRouteName="Home">
          <AppDrawer.Screen  name="Home" component = { Home } />
          <AppDrawer.Screen  name="Eventos" component = { Eventos } />
          <AppDrawer.Screen  name="Comunicação Direta" component = { ComunicacaoDireta } />
          <AppDrawer.Screen  name="Comunicação Indireta" component = { ComunicacaoIndireta } />
          <AppDrawer.Screen  name="MegaSena" component = { MegaSena } />
          <AppDrawer.Screen  name="ParImpar" component = { ParImpar } />
          <AppDrawer.Screen  name="ValidarProps" component = { ValidarProps } />
          <AppDrawer.Screen  name="Calculadora" component = { Calculadora } />
          <AppDrawer.Screen  name="Lista de alunos" component = { ListaAlunos } />

        </AppDrawer.Navigator>
      </NavigationContainer>
    );
} 
