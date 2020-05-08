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