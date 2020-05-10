import React from 'react';
import { Text, View } from 'react-native';
import global from './../styles/global';

// export default function(props){
//     return(
//         <Text>{ props.texto }</Text>
//     );
// }
export default props => {
    return (
        <View>
            <Text style={global.title}>{ props.texto }</Text>
        </View>
        
    );
}
//Retorna vários componentes
export const ManySimples = props => {
    return [    
        <Text key={1} >Arrow 1: { props.texto }</Text>,
        <Text key={2} >Arrow 2: { props.texto }</Text>,
        <Text key={3} >Arrow 3: { props.texto }</Text>
    ]  
}