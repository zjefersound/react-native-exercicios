import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const NavBar = props => {
    return(
        <View style = { styles.header }>
            <Text style = { styles.textHeader }>{ props.texto }</Text>
        </View>
    );
}
export default NavBar;