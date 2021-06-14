import React from 'react';
import { Text, View,StyleSheet } from 'react-native';
import {Button} from 'react-native-elements'
import {css} from '../assets/css/css';
import Titulo from "../assets/components/Titulo";
import Final from "../assets/components/Final";
export default function Home({navigation})
{
    const ListHeader = () => {
    //View to set in Header
        return (
        <View style={styles.headerFooterStyle}>
            <Text style={styles.textStyle}>This is Header</Text>
        </View>
        );
    };

    return( 
        <View style={styles.container}>
            <Titulo/>
            <Final/>
            <View style={styles.buttonContainer}>
                    <Button
                        buttonStyle={css.button}
                        title="JÁ SOU FILIADO"
                        onPress={()=> navigation.navigate('Login')}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        title="NOVO FILIADO"
                        buttonStyle={css.button}
                        onPress={()=> navigation.navigate('Page')}
                    />
                </View>

            
        </View>
        
    );
}


const styles =StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        backgroundColor: 'white',

    },
    buttonContainer:{
        flexDirection: 'row',
        margin: 20,
        justifyContent:'center', 

    },
})