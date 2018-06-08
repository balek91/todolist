import React from 'react';
import { ExpoConfigView } from '@expo/samples';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Detail Item',
  };

  constructor(props) {
    super(props);
    this.handlePress = this.handlePress.bind(this);
    this.state = {
      id : null,
      info: null,
      isLoading: true
    }
  }

  componentDidMount() {
    axios.get('http://formation-roomy.inow.fr/api/todoitems/'+this.state.id,{ headers: {
      'Authorization': 'Bearer UvEKE5U6FX8Iwdc9PBCYqsVuvNbFskPHdC-tDAkOlMV4Bgv8E7umAJVtNBwpjWSEFiZ9dyeqVkJfyXp8Ma-1G631JHzxhdKWoWcvxP7Mzun_iyDPPhRlkVDTuHAEnBbUjI44GxSDBZY-n_KRT8zBxSZhVIkHFAyjqHPPjEn7NT7sq-rgOGzVIkfFforMDqVuLfZvIMfsoZ1WppbXxgH7QsdfKyY4HGTq3SncUytXlzE',
  }})
      .then(response => this.setState({
        posts: response.data,
        isLoading: false
      }));
  }

  render() {
    let { posts } = this.state
    return (
      <ScrollView style={{ flex: 1 }}>
        {
          posts.map((item, index) => {
            if (item.isDone === true) {
              return (
                <TouchableOpacity key={index} onPress={this.handlePress} style={{ borderWidth: 0.5, borderColor: '#d6d7da' }}>
                  <Text key={index+'text'} style={{ fontSize: 30 }}>{item.text}</Text>
                  <Text key={index+'desc'} style={{ fontSize: 15 }}>{item.description}</Text>
                  <Ionicons style={{textAlign : 'right'}} name="md-checkmark-circle" size={32} color="green" />
                </TouchableOpacity>
              )
            }
            else {
              return(
              <TouchableOpacity key={index} onPress={this.handlePress} style={{ borderWidth: 0.5, borderColor: '#d6d7da' }}>
                  <Text key={index+'text'} style={{ fontSize: 30 }}>{item.text}</Text>
                  <Text key={index+'desc'} style={{ fontSize: 15 }}>{item.description}</Text>
              </TouchableOpacity>
              )
            }
          })
        }
      </ScrollView>
    )
  }
}
