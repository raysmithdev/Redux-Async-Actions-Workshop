import React from 'react'
import Avatar from 'material-ui/Avatar'
import {List, ListItem} from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import Divider from 'material-ui/Divider'
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble'

const UserList = () => (
  <List>
    <Subheader>User list</Subheader>
    <ListItem
      primaryText="Brendan Lim"
      leftAvatar={<Avatar src="https://byuc.files.wordpress.com/2012/07/avat-2.jpg" />}
    />
    <ListItem
      primaryText="Eric Hoffman"
      leftAvatar={<Avatar src="https://byuc.files.wordpress.com/2012/07/avat-2.jpg" />}
    />
    <ListItem
      primaryText="Grace Ng"
      leftAvatar={<Avatar src="https://byuc.files.wordpress.com/2012/07/avat-2.jpg" />}
    />
    <ListItem
      primaryText="Kerem Suer"
      leftAvatar={<Avatar src="https://byuc.files.wordpress.com/2012/07/avat-2.jpg" />}
    />
  </List>
)

export default UserList
