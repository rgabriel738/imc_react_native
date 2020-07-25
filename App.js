import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  TextInput, 
  View, 
  TouchableOpacity,
} from 'react-native';

type Props = {};
export default class App extends Component<Props> {

  constructor(props){
    super(props)
    this.state = {altura:0, massa:0, resultado:0, resultadoText:""}
    this.calcular = this.calcular.bind(this)
  }

  calcular(){

    let imc = this.state.massa/ (this.state.altura * this.state.altura)
    let s = this.state
    s.resultado = imc
    
    if(s.resultado < 16){
      s.resultadoText = "Magreza grave"

    }else if(s.resultado < 17){
      s.resultadoText = "Magreza moderada"
    }
    else if(s.resultado < 18.5){
      s.resultadoText = "Magreza leve"
    }
    else if(s.resultado < 25){
      s.resultadoText = "Saudável"
    }
    else if(s.resultado < 30){
      s.resultadoText = "Sobrepeso"
    }
    else if(s.resultado < 35){
      s.resultadoText = "Obesidade Grau I"
    }
    else if(s.resultado < 40){
      s.resultadoText = "Obesidade Grau II (severa)"
    }
    else{
      s.resultadoText = "Obesidade Grau III (mórbida)"
    }

    this.setState(s)
  }
  

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.info}>Cálculo de IMC</Text>
        <Text style={styles.resultado}>{this.state.resultado.toFixed(2)}</Text>  
        <Text style={[styles.resultado, {fontSize:35}]}>{this.state.resultadoText}</Text>
        <Text style={[styles.info, {fontSize:15}, {backgroundColor:'#89ffa5'}]}>Digite seu peso em kg e altura em metros</Text>
        <View style={styles.entradas}>
            <TextInput placeholder="Peso" keyboardType="numeric" style={styles.input} onChangeText={(massa)=>{this.setState({massa})}}/>
            <TextInput placeholder="Altura" keyboardType="numeric" style={styles.input} onChangeText={(altura)=>{this.setState({altura})}}/>
        </View>
         <TouchableOpacity style={styles.button} onPress={this.calcular}><Text style={styles.buttonText}>Calcular</Text></TouchableOpacity>
           
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  entradas:{
    flexDirection: 'row',
  },
  input:{
    height:100,
    textAlign:'center',
    width:'50%',
    fontSize:40,
    marginTop:24,
    color:'gray',
  },
  button:{
    backgroundColor:'#89ffa5',
  },
  buttonText:{
    alignSelf:'center',
    padding:30,
    fontSize:25,
    color:'#6dc4a4',
    fontWeight:'bold',
  },
  resultado:{
    alignSelf:'center',
    color:'lightgray',
    fontSize:45,
    padding:15,
  },
  info:{
    textAlign:'center',
    color:'gray',
    backgroundColor:'#89cff0',
    fontSize:25,
    padding:15,
  }
});
