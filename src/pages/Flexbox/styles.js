import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#282828',
    },
    norte: {
        flex: 1,
        backgroundColor: '#55AA',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    centro: {
        flex: 1,
        backgroundColor: '#A55A',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
    sul: {
        flex: 1,
        backgroundColor: '#5A5A',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    circulo: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#F4F73B',
    }
});

export default styles;