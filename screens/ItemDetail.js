import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import {
  Image,
  Platform,
  ScrollView,
  FlatList,
  ListItem,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  View,
} from 'react-native';
import axios from 'axios';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Detail Item',
  };

  constructor(props) {
    super(props);
    this.handlePress = this.handlePress.bind(this);
    this.state = {
      id: null,
      text: null,
      description : null,
      doneDate : null,
      isDone  : false,
      createDate : null,
      priority : null,
      isLoading: true
    }
  }

  componentDidMount() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('id', 'NO-ID');
    console.log(itemId.id);
    this.setState({
      id : itemId.id
    });

    axios.get('http://formation-roomy.inow.fr/api/todoitems/' + itemId.id, {
      headers: {
        'Authorization': 'Bearer UvEKE5U6FX8Iwdc9PBCYqsVuvNbFskPHdC-tDAkOlMV4Bgv8E7umAJVtNBwpjWSEFiZ9dyeqVkJfyXp8Ma-1G631JHzxhdKWoWcvxP7Mzun_iyDPPhRlkVDTuHAEnBbUjI44GxSDBZY-n_KRT8zBxSZhVIkHFAyjqHPPjEn7NT7sq-rgOGzVIkfFforMDqVuLfZvIMfsoZ1WppbXxgH7QsdfKyY4HGTq3SncUytXlzE',
      }
    })
      .then(response => this.setState({
        text: response.data.text,
        description : response.data.description,
        doneDate : response.data.doneDate,
        isDone : response.data.isDone,
        createDate : response.data.createDate,
        priority : response.data.priority,
        isLoading: false
      }));
  }

  async handlePress() {
    console.log('handle')
    console.log(this.state.id);
    console.log(this.state.text);
    console.log(this.state.description);
    console.log(this.state.doneDate);
    console.log(this.state.priority);
    console.log(this.state.isDone);

    let body = {
      id: this.state.id,
      text: this.state.text,
      createdDate: this.state.createDate,
      description: this.state.description,
      isDone: true,
      doneDate: this.state.doneDate,
      priority: this.state.priority
      }
console.log(body);
    axios.put('http://formation-roomy.inow.fr/api/todoitems/' + this.state.id,body,{
      headers: {
        'Authorization': 'Bearer UvEKE5U6FX8Iwdc9PBCYqsVuvNbFskPHdC-tDAkOlMV4Bgv8E7umAJVtNBwpjWSEFiZ9dyeqVkJfyXp8Ma-1G631JHzxhdKWoWcvxP7Mzun_iyDPPhRlkVDTuHAEnBbUjI44GxSDBZY-n_KRT8zBxSZhVIkHFAyjqHPPjEn7NT7sq-rgOGzVIkfFforMDqVuLfZvIMfsoZ1WppbXxgH7QsdfKyY4HGTq3SncUytXlzE',
      }}
    ) .then(response => console.log(response)
    );
  }

  render() {
    let { text, description, doneDate, isDone } = this.state
    console.log(this.state.id);
    console.log(this.state.text);
    console.log(this.state.description);
    console.log(this.state.doneDate);
    if (isDone === true) {
    return (
      <ScrollView style={{ flex: 1 }}>
         <Text>Text :</Text>
        <Text>{text}</Text>
        <Text>Description :</Text>
        <Text>{description}</Text>
        <Text>Date :</Text>
        <Text>{doneDate}</Text> 
        
      </ScrollView>
    )
  }else{
    return (
      <ScrollView style={{ flex: 1 }}>
         <Text>Text :</Text>
        <Text>{text}</Text>
        <Text>Description :</Text>
        <Text>{description}</Text>
        <Text>Date :</Text>
        <Text>{doneDate}</Text> 
        <Button title="Done" onPress={() => this.handlePress()}></Button>
      </ScrollView>
    )

  }
  }
}
