import React, { Component, useState , useEffect} from 'react';
import { KeyboardAvoidingView, TextInput, Image, Text, View} from 'react-native';
import { Button } from 'react-native-elements';
import {css} from '../assets/css/css';
import Titulo from "../assets/components/Titulo";
import Final from "../assets/components/Final";
import { registerRootComponent } from 'expo';

export default function Login()
{   

    const [display, setDisplay]=useState('none');
    const [user, setUser]=useState(null);
    const [password, setPassword]=useState(null);
    const [login, setLogin]=useState(null);
    async function sendForm()
    {
      let response=await fetch('http://127.0.0.1:8080/login',{
              method: 'POST',
              headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                  name: user,
                  password: password
              })
          });
          let json=await response.json();
          if(json === 'error'){
              setDisplay('flex');
              setTimeout(()=>{
                  setDisplay('none');
              },5000);
          }
      }
    return(
          <View style={css.container} > 
          <Titulo/>
          <Final/>
            <View style={css.buttonContainer1}>
              <TextInput style={css.login__input} placeholder='Usuário:' onChangeText={text=>setUser(text)} />
              <TextInput style={css.login__input} placeholder='Senha:' onChangeText={text=>setPassword(text)} secureTextEntry={true} />
              <Button buttonStyle={css.button} title="CONTINUAR" onPress={()=>sendForm() }/>
            </View>
          </View>
        
    );
}
