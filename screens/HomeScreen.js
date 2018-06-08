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
} from 'react-native';
import axios from 'axios';
import PropTypes from 'prop-types';

export default class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      isLoading: true
    }
}

  static navigationOptions = {
    title: 'Ma Liste',
    headerTitleStyle: {
      textAlign:'left'
    }
  };

  componentDidMount() {
    axios.get('http://formation-roomy.inow.fr/api/todoitems')
    .then(response => this.setState({
      posts: response.data,
      isLoading: false
    }));
  }

  render() {
    let {posts} = this.state
    return (
      <View style={{flex: 1}}>
        {
          posts.map((item, index) => {
            if(item.isDone === true) return (<Text key={index}>{item.text}</Text>)
            else{
              return(null)
            }
          })
        }
      </View>
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
