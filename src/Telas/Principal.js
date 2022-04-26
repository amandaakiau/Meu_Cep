import React, { useState } from 'react'
import { StyleSheet,Text, Image, TextInput, TouchableOpacity, Button} from 'react-native'

export default function Principal() {
    const [cep, setCep] = useState('')
    const [endereco, setEndereco] = useState(null)


    const buscarCEP = () => {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(resposta => resposta.json())
        .then(obj => setEndereco(obj))
        .catch(erro => alert(erro))
    }

    return <>


    <Text style={estilos.Titulo}>Digite o CEP</Text>
    <TextInput color='#ffffff' placeholder='CEP' placeholderTextColor={'#ffffff'} style={estilos.textInput} onChangeText={input=>setCep(input)} />
 



    <Button title="Buscar endereço" onPress={buscarCEP}/>


    {endereco != null && (
    
            <Text style={estilos.texto}>CEP : {JSON.stringify(endereco)} </Text>
        
    )}


    </> 
}

const estilos = StyleSheet.create({


    Titulo:{
        position: 'absolute',    
        top: '27.7%',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 24,
        lineHeight: 21,
        color: '#96A7AF'
    },


    textInput:{  //CEP input
        position: 'absolute',
        width: '60%',
        height: '4%',
        top: '33.3%',
       
        backgroundColor: '#ffffff',
        paddingLeft: 55,
        fontSize: 18,
    
    },

    texto:{
        position: 'absolute',
        left: '3%',
        right: '3%',
        width: 'auto',    
        top: '57.7%',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 20,
        color: '#96A7AF'

    },

    

})