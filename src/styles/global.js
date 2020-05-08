import { StyleSheet } from 'react-native';
const global = StyleSheet.create({
    ex: {
        paddingHorizontal: 15,
        paddingVertical: 15,
        marginVertical: 5,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: '#AAA',

    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: '#EEE',
    },
    title: {
        fontSize: 30,
        color: '#2F4F4F',
    }
});
export default global;