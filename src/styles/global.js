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
    input: {
        marginTop: 20,
        height: 70,
        fontSize: 30,
        color: '#00FA9A',
        backgroundColor: '#444',
        borderRadius: 35,
        paddingHorizontal: 40,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    input_btn: {
        marginTop: 20,
        height: 70,
        backgroundColor: '#00FA9A',
        borderRadius: 35,
        paddingHorizontal: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input_btn_text: {
        color: '#282828',
        fontSize: 25,
    },
    font40: {
        fontSize: 40
    }, 
});
export default global;