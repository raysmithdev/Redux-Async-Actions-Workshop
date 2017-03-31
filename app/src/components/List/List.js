import React from 'react'
import Avatar from 'material-ui/Avatar'
import {List, ListItem} from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import { connect } from 'react-redux'

const UserList = ({ users }) => (
  <List>
    <Subheader>User list</Subheader>
    {users.map((user, index) => (
      <ListItem
        key={index}
        primaryText={user.name.first + user.name.last}
        leftAvatar={<Avatar src={user.picture.medium} />}
      />
    ))}
  </List>
)

const mapStateToProps = (state) => ({
  users: state.userAPI.data
})

export default connect(mapStateToProps)(UserList)
