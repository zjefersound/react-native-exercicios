import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

import styles from './styles';

const ValidarPropsFunc = (props) => {
    return(
        <View style = { styles.validarbox }>
            <Text style = { styles.title }>
                { props.label }
                { props.ano + 2000 }
            </Text>
        </View>
    );
}
    
ValidarPropsFunc.defaultProps = {
    label: 'Ano: '
}

ValidarPropsFunc.propTypes = {
    ano: PropTypes.number.isRequired
}

export default ValidarPropsFunc;