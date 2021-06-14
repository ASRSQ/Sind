import React,{useState} from 'react';
import { View, CheckBox, Text} from 'react-native';
import {Button} from 'react-native-elements'
import {css} from '../assets/css/css';
import Titulo from "../assets/components/Titulo";
import Final from "../assets/components/Final";
export default function Page(){
  const [isSelected, setSelection] = useState(false);
  return(
    <View style={css.container}>
      <Titulo/>
      <Final/>
      <View style={css.buttonContainer}>
        <CheckBox
            value={isSelected}
            onValueChange={setSelection}
        />
        { isSelected ?<Button
          title="CONTINUAR"
          buttonStyle= {css.button}/> : <Button
          disabled ='true'
          title="CONTINUAR"
          buttonStyle= {css.button}/>  }
          </View>
    </View>

  );
}