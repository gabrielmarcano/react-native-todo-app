import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    { name: 'john', key: '1' },
    { name: 'james', key: '2' },
    { name: 'jason', key: '3' },
    { name: 'jack', key: '4' },
    { name: 'jean', key: '5' },
    { name: 'jordan', key: '6' },
    { name: 'justin', key: '7' },
    { name: 'jeremy', key: '8' },
    { name: 'jake', key: '9' },
    { name: 'joel', key: '10' },
  ])


  return (
    <View style={styles.container}>
      <ScrollView>
        {people.map(item => (
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingLeft: 20,
    paddingRight: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
  }
});
