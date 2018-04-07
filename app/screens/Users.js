import React, {Component} from 'react'
import {
  Container, Content, List,
  ListItem, Text, Spinner, Fab, Icon
} from 'native-base'
import {connect} from 'react-redux'

import {allUsers} from '../actions/users'

class Users extends Component{

  componentWillMount(){
    // store.dispatch
    // this.props.dispatch({type: 'ALL_USERS', payload: []})
    this.props.dispatch(allUsers())
  }

  componentDidMount(){
    // console.log(this.props.usersReducer);
  }

  render(){
    return (
      <Container>
        <Content>
          {this.props.usersReducer.isLoading? (
            <Spinner/>
          ): (
            <List>
              {this.props.usersReducer.users.map((user)=>(
                <ListItem key={user.id}>
                  <Text>{user.username}</Text>
                </ListItem>
              ))}
            </List>
          )}

        </Content>
        <Fab
          style={{ backgroundColor: '#5067FF' }}
          position="bottomRight"
          onPress={()=> this.props.navigation.navigate('UsersCreate')}
        >
          <Icon name="add" />
        </Fab>
      </Container>
    )
  }
}

const mapStateToProps = (state)=>{
  return {
    usersReducer: state.usersReducer
  }
}

export default connect(mapStateToProps)(Users)
