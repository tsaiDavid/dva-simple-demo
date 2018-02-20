import React, { PureComponent } from 'react';
import { connect } from 'dva'

class TodoList extends PureComponent {
  render () {
    return (
      <div>
        <h1>Todos</h1>
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