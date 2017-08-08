import React from 'react';
import { Text, View, Button } from 'react-native';


class RecentChatsScreen extends React.Component {

  render() {

    return (
      <View>
        <Text>List of recent chats</Text>
        <Button 
          onPress={() => this.props.navigation.navigate('Chat', {user: 'Cara'})}
          title='Chat with Cara'
        />
    </View>
    )
  }
}

export default RecentChatsScreen;
