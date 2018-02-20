export default {
  // This is the namespace under which this reducer and its actions are registered  
  namespace: 'todos',

  // This is just `initialState`
  state: [
    {
      text: 'A DVA based todo list! Your redux-dev-tools will work just fine!',
      // Toggling completed state is not yet implemented
      completed: false,
      id: 0
    }
  ],

  // https://github.com/dvajs/dva/blob/master/docs/Concepts.md#effect
  effects: {
    /**
     * This is where you'd utilize the provided `redux-sagas` functionality
     */
  },

  // https://github.com/dvajs/dva/blob/master/docs/Concepts.md#subscription
  subscriptions: {

  },

  // https://github.com/dvajs/dva/blob/master/docs/Concepts.md#reducer
  reducers: {
    // This would be namespaced as `todos/addTodo` and you'd use that as the action type.
    addTodo(state, action) {
      return [
        ...state,
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          text: action.text
        }
      ]
    },

    // This example doesn't use Immutable.js, but this is really all normal Redux
    deleteTodo(state, action) {
      return state.filter((todo) => {
        return todo.id !== action.id
      })
    }
  }

}