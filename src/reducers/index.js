import uuid from 'uuid/v4';

const initialState = {
  todos: [
    {
      id: uuid(),
      name: 'Coding',
      complete: false
    },
    {
      id: uuid(),
      name: 'Go Ken house',
      complete: false
    }
  ]
};

const reducer = (state = initialState, action) => {
  switch(action.type){
    case 'ADD_TODO':
      return {
        ...state, 
        todos: [...state.todos, action.payload]
      }
    case 'TOGGLE_TODO':
      return {
          ...state,
          todos: state.todos.map(todo => (todo.id === action.payload) ? {
            ...todo, complete: !todo.complete
          }: todo)
      }
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      }
    default:
      return state;
  }
}

export default reducer;