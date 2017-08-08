// import React from 'react';
// import { AppRegistry, Text } from 'react-native'
import { StackNavigator, TabNavigator } from 'react-navigation'
import HomeScreen from './HomeScreen'
import ChatScreen from './ChatScreen'
import RecentChatsScreen from './RecentChatsScreen'
import AllContactsScreen from './AllContactsScreen'


const MainScreenNavigator = TabNavigator({
  Recent: { screen: RecentChatsScreen },
  All: { screen: AllContactsScreen },
})

MainScreenNavigator.navigationOptions = {
  title: 'My Chats',
}

const App = StackNavigator({
  Home: {screen: MainScreenNavigator},
  Chat: {screen: ChatScreen}

})

export default App
