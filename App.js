import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    { name: 'john', id: '1' },
    { name: 'james', id: '2' },
    { name: 'jason', id: '3' },
    { name: 'jack', id: '4' },
    { name: 'jean', id: '5' },
    { name: 'jordan', id: '6' },
    { name: 'justin', id: '7' },
    { name: 'jeremy', id: '8' },
    { name: 'jake', id: '9' },
    { name: 'joel', id: '10' },
  ])


  return (
    <View style={styles.container}>

      <FlatList 
        horizontal={false}
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.name}</Text>
        )}/>

      {/* <ScrollView>
        {people.map(item => (
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        ))}
      </ScrollView> */}
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
    marginHorizontal: 10,
    marginTop: 24
  }
});
