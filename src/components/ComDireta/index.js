import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const fonte = { style: { fontSize: 25, marginVertical: 5, } };

function filhosAddProps(props){
    //Clona os componentes filhos pra add os componentes do pai 
    return React.Children.map(props.children,
        (c,i) => React.cloneElement( c, { ...props, ...c.props, num: i } )
        );
}

export const Filho = props => {
    return(
        <View style = { styles.bloco_filho }>
            <Text { ...fonte }> 
                Filho: { props.nome } {props.sobrenome} {(props.num + 1)+'º'}
            </Text>
        </View>
    );
}

export const Pai = props => {
    return(
        <View style = { styles.bloco_pai }>
            <Text { ...fonte }>
                Pai: { props.nome } { props.sobrenome }
            </Text>
            {/* { props.children } */}
            {filhosAddProps(props)}
        </View>
    );
}

export const Avo = props => {
    return(
        <View style = { styles.bloco_avo }>
            <Text { ...fonte }>
                Avo: { props.nome } { props.sobrenome }
            </Text>
            <Pai nome = 'André' sobrenome = { props.sobrenome }>
                <Filho nome = 'Peralta' />
                <Filho nome = 'Amy' />
                <Filho nome = 'Rosa' />
            </Pai>
            <Pai { ...props } nome = 'Terry'>
                <Filho nome = 'Gina' />
                <Filho nome = 'Boyle' />
            </Pai>
        </View>
    );
}