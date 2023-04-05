import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';


export default function App() {

  var [F, setf] = useState(" ");
  var [C, setc] = useState(" ");
  var [K, setk] = useState(" ");

  function ConverterCelsius(){
    C = (parseFloat(F)-32)/1.8;
    if(parseFloat(C)<= 35){
      alert("A temperatura em Celsius é: " + C + " graus, e você está HIPOTÉRMICO(A)!");
    }else if(parseFloat(C)>35 && parseFloat(C)<=37.5 ){
      alert("A temperatura em Celsius é: " + C + " graus, sua temperatura está NORMAL!");
    }else{
      alert("A temperatura em Celsius é: " + C + " graus, e voê está com FEBRE!");
    }
  }

  function ConverterKelvin(){
    K = (parseFloat(F) + 459.67)/1.8;
    if(parseFloat(K)<= 308.15){
      alert("A temperatura em kelvin é: " + K + " , e você está HIPOTÉRMICO(A)!");
    }else if(parseFloat(K)>308.15 && parseFloat(K)<=310.65 ){
      alert("A temperatura em kelvin é: " + K + " , sua temperatura está NORMAL!");
    }else{
      alert("A temperatura em kelvin é: " + K + " , e voê está com FEBRE!");
    }
  }

  return (
    <View style={styles.container}>
    <Text style = {styles.titulo}>Conversor De Temperatura</Text>

    <TextInput style = {styles.corpo}
    placeholder="Temperatura em Fahrenheit:" 
    keyboardType = "numeric"
    onChangeText = {(F) =>setf(F)}
    />

    <TouchableOpacity style={styles.botao_celsius} onPress = {ConverterCelsius}>
      <Text style ={styles.calcular_celsius}>Converter para Celsius?</Text>
      </TouchableOpacity>

    <TouchableOpacity style={styles.botao_kelvin} onPress = {ConverterKelvin}>
      <Text style ={styles.calcular_kelvin}>Converter para kelvin?</Text>
      </TouchableOpacity>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff4d00"
  },
  calcular_celsius:{
    fontSize:24,
  },
  calcular_kelvin:{
    fontSize:24,
  },
  titulo:{
    textAlign: "center",
    marginTop: 45,
    marginBottom: 45,
    fontSize:38,
    color: "#FFF"
    
  },
  corpo:{
    backgroundColor: "#FFF",
    margin: 12,
    padding: 15,
    fontSize:22,
    borderRadius: 40,
  },
  botao_celsius:{
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
    padding: 10,
    backgroundColor: "#0099ff"
  },
    botao_kelvin:{
    alignItems: "center",
    justifyContent:"center",
    margin:20,
    padding:10,
    backgroundColor:"#0099ff"
  },




});
