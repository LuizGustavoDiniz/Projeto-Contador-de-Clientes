import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

const App = () => {
  return(
     <View style={styles.container}>
      <Text>Contador de Clientes</Text>

      <View>
          <TouchableOpacity>
            <Text></Text>
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