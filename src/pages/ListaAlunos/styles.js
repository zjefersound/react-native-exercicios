import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    itemEstilo: {
        paddingHorizontal: 15,
        paddingVertical:25,
        minHeight: 50,
        backgroundColor: '#222',
        borderColor: '#111',
        borderWidth: 0.5,

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'

    },
    painel:{
        marginTop: 60,
    }
});

export default styles;