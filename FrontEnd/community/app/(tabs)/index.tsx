import { Button } from '@react-navigation/elements';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const [text, setText] = useState("");
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}>텍스트2</Text>
      </View>
      <TextInput
        value={text}
        onChangeText={(value) => setText(value)}
        style={styles.input}
      />
      <Button
        onPress={() => console.log("text")} >
        버튼이름
      </Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
    color: '',
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
