import React, { useState } from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

//git add . pra mandar todos os arquivos alterados pra stage prontos para o commit

const App = () => {
  return(
     <View style={styles.container}>
      <Text style={styles.title}>Pessoas no restaurante</Text>

      <View style={styles.counterArea}>
        <Text style={styles.counterValue}>10</Text>
      </View>

      <View style={styles.btnArea}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Adicionar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Remover</Text>
          </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold'
  },
  counterArea:{
    backgroundColor: '#222',
    width: 50,
    height: 50,
    borderRadius: 5,
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  counterValue:{
    color: '#FFF',
    fontSize: 20
  },
  btnArea: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '50%'
  },
  btn:{
    backgroundColor: '#0088ff',
    height: 40,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  btnText: {
    color: '#fff',
    fontSize: 16
  }
})

export default App
