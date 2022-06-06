import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [name, setName] = useState('Gabriel')
  const [age, setAge] = useState('21')


  return (
    <View style={styles.container}>
      <Text>Enter name: </Text>
      <TextInput
        multiline
        style={styles.input}
        placeholder='e.g. John Doe'
        onChangeText={(value) => setName(value)} />
      
      <Text>Enter age: </Text>
      <TextInput
        keyboardType='numeric'
        style={styles.input}
        placeholder='e.g. 45'
        onChangeText={(value) => setAge(value)} />

      <Text>My name is {name} and I am {age}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200
  }
});
