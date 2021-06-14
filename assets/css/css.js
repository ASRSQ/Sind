import { StyleSheet} from 'react-native';
const css = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    backgroundColor: 'white',
    },
    textPage:{
        backgroundColor: 'orange',
        padding: 20
    },
    area_title:{
      position:  'absolute',
      flexDirection: 'row',
      paddingTop: 40,
      paddingBottom: 10,
      width: "100%",
      backgroundColor: 'red',
      alignSelf: 'flex-start',
      justifyContent:'flex-start',
      top:0,

    },
    area_footer:{
      position:  'absolute',
      flexDirection: 'row',
      paddingTop: 40,
      paddingBottom: 10,
      width: "100%",
      backgroundColor: 'red',
      alignSelf: 'flex-end',
      justifyContent:'flex-end',
      bottom: 0,

    },
    button: {
      margin:40,
     width:240,
     height:40,
     backgroundColor: 'red',
     borderRadius: 30,


    }, 
    buttonContainer:{
      margin: 20,
      justifyContent:'flex-end', 
      alignSelf: 'center',
      paddingTop: 500,

    },
    buttonContainer1:{
      margin: 20,
      justifyContent:'center', 
      alignSelf: 'center',

    },
    login__form:{
      width: "80%"
    },
    login__input:{
        backgroundColor: "#fff",
        fontSize: 19,
        padding: 7,
        marginBottom: 15
    },
    login__button:{
        padding: 12,
        backgroundColor: "#F58634",
        alignSelf:"center",
        borderRadius:5
    },
    login__buttonText:{
        fontWeight:"bold",
        fontSize: 22,
        color:"#333"
    },
    textarea:{
      resizeMode:"center",

    },
  });
  export{css};