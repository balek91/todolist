import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  FlatList,
  ListItem,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';
import { StackNavigator } from 'react-navigation';

export default class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.handlePress = this.handlePress.bind(this);
    this.state = {
      posts: [],
      isLoading: true
    }
  }

  static navigationOptions = {
    title: 'Ma Liste',
    headerTitleStyle: {
      textAlign: 'left'
    }
  };

  componentDidMount() {
    axios.get('http://formation-roomy.inow.fr/api/todoitems',{ headers: {
      'Authorization': 'Bearer UvEKE5U6FX8Iwdc9PBCYqsVuvNbFskPHdC-tDAkOlMV4Bgv8E7umAJVtNBwpjWSEFiZ9dyeqVkJfyXp8Ma-1G631JHzxhdKWoWcvxP7Mzun_iyDPPhRlkVDTuHAEnBbUjI44GxSDBZY-n_KRT8zBxSZhVIkHFAyjqHPPjEn7NT7sq-rgOGzVIkfFforMDqVuLfZvIMfsoZ1WppbXxgH7QsdfKyY4HGTq3SncUytXlzE',
  }})
      .then(response => this.setState({
        posts: response.data,
        isLoading: false
      }));
  }

  async handlePress(id) {
    this.props.navigation.navigate('Item',{
      id: id
    });
  }

  async handlePressNew()
{
  this.props.navigation.navigate('Create');

} 
 render() {
    let { posts } = this.state
    return (
      <ScrollView style={{ flex: 1 }}>
        <Button title='New ToDo' onPress={() => this.handlePressNew()}></Button>
        {
          posts.map((item, index) => {
            if (item.isDone === true) {
              let id = item.id;
              return (
                <TouchableOpacity key={item.id} onPress={() => this.handlePress({id})} style={{ borderWidth: 0.5, borderColor: '#d6d7da' }}>
                  <Text key={index+'text'} style={{ fontSize: 30 }}>{item.text}</Text>
                  <Text key={index+'desc'} style={{ fontSize: 15 }}>{item.description}</Text>
                  <Ionicons style={{textAlign : 'right'}} name="md-checkmark-circle" size={32} color="green" />
                </TouchableOpacity>
              )
            }
            else {
              let id = item.id;
              return(
              <TouchableOpacity key={item.id} onPress={() => this.handlePress({id})} style={{ borderWidth: 0.5, borderColor: '#d6d7da' }}>
                  <Text key={index+'text'} style={{ fontSize: 30 }}>{item.text}</Text>
                  <Text key={index+'desc'} style={{ fontSize: 15 }}>{item.description}</Text>
              </TouchableOpacity>
              )
            }
          })
        }
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
