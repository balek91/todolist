import React from 'react';
import { ScrollView, StyleSheet, Text, Image } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'A Propos De',
    headerTitleStyle: {
      textAlign:'left'
    }
  };

  render() {
    return (
      <ScrollView style={styles.container}>
      <Image
              source={require('../assets/images/ynov.png')}
              style={styles.welcomeImage}
            />
        <Text style={{textAlign: 'center'}}>Todo List</Text>
        <Text style={{textAlign: 'center'}}>Version : 1.0</Text>
        <Text style={{textAlign: 'center'}}>Antoine FALLER</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
