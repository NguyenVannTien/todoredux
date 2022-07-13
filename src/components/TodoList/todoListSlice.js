

const initState = [
  {
    id: 1,
    name: 'html-css',
    completed: false,
    prioriry: 'Medium',
  },
  {
    id: 2,
    name:'javascript',
    completed: true,
    prioriry:'High',
  },
  {
    id: 3,
    name:'REACT JSS',
    completed: false,
    prioriry:'Low',
  },
]

const todoListReducer = (state = initState, action) =>{
  switch(action.type){
    case 'todoList/addTodo':
      return [
        ...state,
        action.payload
      ]

    case 'todoList/toggleTodo':
      return state.map((todo)=>
        todo.id === action.payload ?
        {...todo, completed: !todo.completed} : 
        todo
      );
    default:
      return state
    
  }
}

export default todoListReducer;