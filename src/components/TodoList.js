import React, { PureComponent } from 'react';
import { Card, Icon, Form, Input } from 'antd';
import { connect } from 'dva';

class TodoList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      item: ''
    }
  }

  handleAddTodo = () => {
    this.props.dispatch({
      // This action type is namespaced, look at `models/todos.js`
      type: 'todos/addTodo',
      text: this.state.item
    })
    this.setState({ item: '' })
  }

  handleDeleteTodo = (id) => () => {
    this.props.dispatch({
      type: 'todos/deleteTodo',
      id
    })
  }

  renderTodos = () => {
    return this.props.todos.map((todo, index) => {
      return (
        <Card
          key={`${todo.id}-${index}`}
          actions={[<Icon type="delete" onClick={this.handleDeleteTodo(todo.id)} />]}
        >
          {todo.text}
        </Card>
      )
    })
  }

  render () {
    return (
      <div>
        <h1>Todos</h1>
        <Form onSubmit={this.handleAddTodo}>
          <Input
            value={this.state.item}
            placeholder="Enter a todo item"
            onChange={(e) => {
              this.setState({ item: e.target.value })
            }}
          />
          <Input type="submit" value="Submit" />
        </Form>
        {this.renderTodos()}
      </div>
    )
  }
}

export default connect(({ todos }) => ({
  todos
}))(TodoList);

/**
 * The above is the shorthand equivalent of writing the following:
 * 
 * function mapStateToProps({ todos }) {
 *   return {
 *     todos: todos
 *   }
 * }
 * 
 * export default connect(mapStateToProps)(TodoList)
 */