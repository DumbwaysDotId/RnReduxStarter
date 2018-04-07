import React, { Component } from 'react';
import { Button, StyleSheet } from 'react-native';
import { NavigationActions } from 'react-navigation';
import {
  Container,
  Text,
  Form,
  Item,
  Input
} from 'native-base';
import { connect } from 'react-redux';

class TodoCreate extends Component {

  handleTodoCreate = () => {
    // action TodoCreate api
    // -----
    // end action TodoCreate api

    const resetToTodos = NavigationActions.reset({
      index: 0,
      actions:[
        NavigationActions.navigate({routeName: 'Todos'})
      ]
    });
    this.props.dispatch(resetToTodos);
  }

  render() {
    return (
      <Container style={styles.container} >
        <Form>
          <Item>
            <Input placeholder="Name" />
          </Item>
          <Item>
            <Input placeholder="Address" />
          </Item>
          <Button
            onPress={this.handleTodoCreate}
            title="Create" />
        </Form>
      </Container>
    )
  }
}

export default connect()(TodoCreate);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  }
})