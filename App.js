import React, { useState } from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

//git add . pra mandar todos os arquivos alterados pra stage prontos para o commit

const App = () => {

  const [clients, setClients] = useState(0)
  const [limit, setLimit] = useState(false)
  const [disableBtn, setDisableBtn] = useState('')

  const setClient = (clientsCounter) => {

     if(clientsCounter >= 10){
      setClients(10)
      setLimit(true)
      return
     }

     setClients(clientsCounter)
   

  }

  const removeClient = (clientsCounter) => {

     if(clientsCounter <= 0) return

     if(clientsCounter < 10){
      setLimit(false)
     }
   
    setClient(clientsCounter)
  }

  return(
     <View style={styles.container}>
      <Text style={styles.title}>Pessoas no restaurante</Text>

      <View style={styles.counterArea}>
        <Text style={styles.counterValue}>{clients}</Text>
      </View>

       {
        limit && 

          <View style={styles.limitArea}>
           <Text style={styles.limitText}>O restaurante está no seu limite de pessoas</Text>
          </View>

       }

            

      <View style={styles.btnArea}>
          
          {limit === false ? 
         <TouchableOpacity style={styles.btn} onPress={() => setClient(clients + 1)}>
            <Text style={styles.btnText}>Adicionar</Text>
          </TouchableOpacity>
          :
          <TouchableOpacity style={[styles.btn, {backgroundColor: '#aaa'}]} disabled>
            <Text style={styles.btnText}>Adicionar</Text>
          </TouchableOpacity>
        }   

          <TouchableOpacity style={styles.btn} onPress={() => removeClient(clients - 1)}>
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
    marginVertical: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  counterValue:{
    color: '#FFF',
    fontSize: 20
  },
  limitArea: {
    paddingVertical: 8,
    paddingHorizontal: 8,
    backgroundColor: 'orange',
    borderRadius: 5,
    marginBottom: 10
  },
  limitText: {
    color: '#000',
    fontWeight: 'bold',
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
