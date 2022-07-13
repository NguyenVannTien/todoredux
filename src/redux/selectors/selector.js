import { createSelector } from 'reselect';

export const searchTextSelector = (state) => state.filters.search;
export const filterStatusSelector = (state) => state.filters.status;
export const filterPrioritiesSelector = (state) => state.filters.prioriry;
export const todoListSelector = (state) => state.todoList;

export const todosRemainingSelector = createSelector(
  todoListSelector,
  filterStatusSelector,
  searchTextSelector,
  filterPrioritiesSelector, 
  (todoList, status, searchText, prioriry)=>{
    return todoList.filter((todo)=>{
      if(status === 'All'){
        return prioriry.length
          ? todo.name.includes(searchText) && prioriry.includes(todo.prioriry) 
          : todo.name.includes(searchText)
      }
      return (
        todo.name.includes(searchText) && 
          (status === 'Completed' ? todo.completed : !todo.completed) && 
          (prioriry.length ? prioriry.includes(todo.prioriry) : true)
      );
    });
  }
);