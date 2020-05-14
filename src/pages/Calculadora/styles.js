import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    painel: {
        paddingTop: 60,
        flex: 1,
        backgroundColor: '#222'
    },
    result_block: {
        flex: 2,
        paddingVertical: 25,
        backgroundColor: '#465',
        borderColor: '#00FA9A',
        borderBottomWidth: 1,
    },
    result_line: {
        flex: 1,
        padding: 20,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    result_number: {
        fontSize: 35,
        color: '#AEB'
    },
    keyboard_block: {
        flex: 8,
        flexDirection: 'column',
        backgroundColor: '#282828',
        paddingHorizontal: 15,
        paddingVertical: 30,
    },
    keyboard_line: {
        flex: 1,
        flexDirection: 'row',
    },
    keyboard_key: {
        margin: 5,
        flex: 3,
        borderColor: '#00FA9A',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    keyboard_button: {
        margin: 5,
        flex: 3,
        backgroundColor: '#00FA9A',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    keyboard_button_text: {
        color: '#333',
        fontSize: 50,
    }
});

export default styles;