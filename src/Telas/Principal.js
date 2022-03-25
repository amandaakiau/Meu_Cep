import React, { useState } from 'react'
import { StyleSheet,Text, Image, TextInput, TouchableOpacity} from 'react-native'

export default function Principal() {
    const [cep, setCep] = useState('');
    
    const checkCEP = (e) => {
        const cep = e.target.value.replace(/\D/g, '');
        console.log(cep);
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(res => res.json()).then(data => {
                console.log(data);

            });
    }


    return <>


    <Text style={estilos.Titulo}>Indique o seu CEP</Text>
    <TextInput color='#ffffff' placeholder='CEP' placeholderTextColor={'#ffffff'} style={estilos.textInput} onChangeText={text=>setCep(text)} onBlur={checkCEP} />
 

    <TouchableOpacity style={estilos.botaoBuscaCep}>
        <Text style={estilos.botao}>Buscar CEP</Text>
    </TouchableOpacity> 


    <Text style={estilos.dadosCEP}> </Text>

    </> 
}

const estilos = StyleSheet.create({

    botao:{
        color:'#96A7AF',
        fontSize: 16,
    
    },


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

    botaoBuscaCep:{
        position:'absolute',
        width: '30%',
        height: '4.5%',
        top: '40%',
        backgroundColor: '#286053',
        alignItems: 'center',
        borderRadius: 12,
        justifyContent: 'center'
    },

    dadosCEP:{
        position: 'absolute',    
        top: '50%',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: 21,
        color: '#96A7AF'
    },


})