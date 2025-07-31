import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

//git add . pra mandar todos os arquivos alterados pra stage prontos para o commit

const App = () => {
  return(
     <View style={styles.container}>
      <Text>Pessoas no restaurante</Text>

      <View>
        <Text>0</Text>
      </View>

      <View>
          <TouchableOpacity>
            <Text>Adicionar</Text>
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
  }
})

export default App
