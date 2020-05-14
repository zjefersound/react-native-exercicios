import React, { Component } from 'react';
import { View, ScrollView, FlatList, Text } from 'react-native';

const alunos = [
    { id: 1, nome: 'Jeferson', nota: 10.0 },
    { id: 2, nome: 'Charles', nota: 3.9 },
    { id: 3, nome: 'Edson', nota: 6.3 },
    { id: 4, nome: 'Milena', nota: 8.8 },
    { id: 5, nome: 'Yasmin', nota: 9.2 },
    { id: 6, nome: 'Renato', nota: 7.4 },
    { id: 7, nome: 'João', nota: 9.4 },
    { id: 8, nome: 'Samantha', nota: 8.4 },
    { id: 9, nome: 'Olívia', nota: 6.4 },
    { id: 10, nome: 'Evelyn', nota: 9.5 },
    { id: 11, nome: 'Marcus', nota: 7.4 },
    { id: 12, nome: 'Jonatas', nota: 8.6 },
    { id: 13, nome: 'Edmilson', nota: 6.3 },
    { id: 14, nome: 'Sofia', nota: 8.8 },
    { id: 15, nome: 'Iasmin', nota: 9.2 },
    { id: 16, nome: 'Renata', nota: 7.4 },
    { id: 17, nome: 'Joana', nota: 9.4 },
    { id: 18, nome: 'Flávio', nota: 8.4 },
    { id: 19, nome: 'Rebeca', nota: 6.4 },
];

//Estilos
import styles from './styles';
import global from './../../styles/global';

//Componentes
import NavBar from './../../components/NavBar';

export default function ListaAlunos({ navigation }){

    return(
        <View style = { global.container }>
            <NavBar texto = 'Lista de alunos'/>

        </View>
    );
} 
