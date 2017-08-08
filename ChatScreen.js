import React from 'react';
import { Text, View } from 'react-native';


class ChatScreen extends React.Component {
  static navigationOptions = ({navigation}) => ( {
    title: `Chat with ${navigation.state.params.user}`
  });
  render() {
    const {params} = this.props.navigation.state
    return (
      <View>
        <Text>Chat with {params.user}</Text>
      </View>
    )
  }
}

export default ChatScreen;
