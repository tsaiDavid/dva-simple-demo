import React, { PureComponent } from 'react';
import { Card, Icon, Form, Input } from 'antd';
import { connect } from 'dva';

class TodoList extends PureComponent {
  constructor() {
    super();
    this.state = {
      item: ''
    }
  }

  renderTodos() {
    return this.props.todos.map((el) => {
      return (
        <Card
          actions={[<Icon type="delete" />]}
        >
          {el}
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
          <input type="submit" value="Submit" />
        </Form>
      </div>
    )
  }
}

export default connect(({ todo }) => {
  todos: todo.todos
})(TodoList);

/**
 * The above is the shorthand equivalent of writing the following:
 * 
 * function mapStateToProps({ todo }) {
 *   return {
 *     todos: todo.todos
 *   }
 * }
 * 
 * export default connect(mapStateToProps)(TodoList)
 */