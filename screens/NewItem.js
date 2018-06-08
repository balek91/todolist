import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import axios from 'axios';
import t from 'tcomb-form-native'; // 0.6.9

const Form = t.form.Form;

const User = t.struct({
  text: t.String,
  description: t.String
});


const options = {
  fields: {
    text: {
      error: 'add a text'
    },
    description: {
      error: 'add a description'
    }
  },

};

export default class App extends Component {

  
  handleSubmit = () => {
    const value = this._form.getValue();
    console.log('value: ', value);
    if(value!= null){
      console.log(value.description);
      console.log(value.text);
      let body = {
        text: value.text,
        description: value.description
        }
      axios.post('http://formation-roomy.inow.fr/api/todoitems',body, {
        headers: {
          'Authorization': 'Bearer UvEKE5U6FX8Iwdc9PBCYqsVuvNbFskPHdC-tDAkOlMV4Bgv8E7umAJVtNBwpjWSEFiZ9dyeqVkJfyXp8Ma-1G631JHzxhdKWoWcvxP7Mzun_iyDPPhRlkVDTuHAEnBbUjI44GxSDBZY-n_KRT8zBxSZhVIkHFAyjqHPPjEn7NT7sq-rgOGzVIkfFforMDqVuLfZvIMfsoZ1WppbXxgH7QsdfKyY4HGTq3SncUytXlzE',
        }}).then(response =>
        this.props.navigation.goBack())

    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Form 
          ref={c => this._form = c}
          type={User} 
          options={options}
        />
        <Button
          title="Add"
          onPress={this.handleSubmit}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
});