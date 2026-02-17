import { Button } from '@react-navigation/elements';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View style={styles.parent}>
        <View style={styles.container}>
          <Text style={styles.text}>텍스트1</Text>
        </View>
        <View style={styles.container2}>
          <Text style={styles.text}>텍스트2</Text>
          <Text style={styles.text}>텍스트2</Text>
          <Text style={styles.text}>텍스트2</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  parent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'yellow',
  },
  container2: {
    backgroundColor: 'blue',
  },
  text: {
    color: 'red',
    fontSize: 30,
  },
  input: {
    backgroundColor: 'gray',
    fontSize: 30,
    padding: 10,
  }
});
