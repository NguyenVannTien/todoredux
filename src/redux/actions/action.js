

export const addTodo = (data) =>{
  return{
    type: 'todoList/addTodo',
    payload: data,
  }
}

export const handleToggleTodo = (todoId) =>{
  return{
    type: 'todoList/toggleTodo',
    payload: todoId
  }
}

export const searchFilterChange = (text) =>{
  return{
    type: 'filters/searchFilterChange',
    payload: text
  }
}

export const statusFilterChange = (status) =>{
  return{
    type: 'filters/statusFilterChange',
    payload: status
  }
}


export const prioriryFilterChange  = (prioriry) =>{
  return{
    type: 'filters/prioriryFilterChange',
    payload: prioriry
  }
}