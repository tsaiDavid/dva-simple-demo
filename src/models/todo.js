export default {
    
  namespace: 'todo',

  state: {
    todos: []
  },

  subscriptions: {

  },

  reducers: {
    addTodo(state, action) {
      return {
        ...state,
        todos: state.todos.concat(action.payload)
      }
    }

  }

}