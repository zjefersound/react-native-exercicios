import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';

import ParImpar from './pages/ParImpar';
import MegaSena from './pages/MegaSena';
import Home from './pages/Home';
import ValidarProps from './pages/ValidarProps';
import Eventos from './pages/Eventos';

const AppDrawer = createDrawerNavigator();

export default function Routes() {
    return(      
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor='#2F6F4F' />
        <AppDrawer.Navigator drawerStyle = {{ backgroundColor: '#CFC' }} initialRouteName="Home">
          <AppDrawer.Screen  name="Home" component = {Home} />
          <AppDrawer.Screen  name="MegaSena" component = {MegaSena} />
          <AppDrawer.Screen  name="ParImpar" component = {ParImpar} />
          <AppDrawer.Screen  name="ValidarProps" component = {ValidarProps} />
          <AppDrawer.Screen  name="Eventos" component = {Eventos} />
        </AppDrawer.Navigator>
      </NavigationContainer>
    );
} 
