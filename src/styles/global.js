import { StyleSheet, Dimensions } from 'react-native';
const global = StyleSheet.create({
    bloco: {
        backgroundColor: '#2E8B57',
        paddingHorizontal: 15,
        paddingVertical: 15,
        marginVertical: 5,
        color: "#FFF",
        fontSize: 18,

    },
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 20,
        justifyContent:'center',
        backgroundColor: '#282828',
        alignItems: 'stretch',
        
    },
    title: {
        fontSize: 30,
        color: '#00FA9A',
    },
});
export default global;