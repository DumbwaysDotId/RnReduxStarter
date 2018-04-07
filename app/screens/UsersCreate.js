import React, {Component} from 'react'
import {Container, Content, Form, Label, Item, Input, Button, Text} from 'native-base'
import {connect} from 'react-redux'

import {createUser, allUsers} from '../actions/users'

class UsersCreate extends Component{

  state = {
    username: "",
    email: ""
  }

  handleSubmit(){
    this.props.dispatch(createUser(this.state))
    .then(()=>{
      this.props.dispatch(allUsers())
      this.props.navigation.goBack()
    })
  }

  render(){
    return (
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input onChangeText={(username)=>this.setState({username})}/>
            </Item>
            <Item floatingLabel last>
              <Label>Email</Label>
              <Input onChangeText={(email)=>this.setState({email})}/>
            </Item>
            <Button onPress={()=> this.handleSubmit()}>
              <Text>Submit</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    )
  }
}


export default connect()(UsersCreate)
