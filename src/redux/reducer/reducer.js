
import { combineReducers } from "redux";
import todoListReducer from "../../components/TodoList/todoListSlice";
import filtersReduce from "../../components/filter/filterSlice";


const rootReducer = combineReducers ({
  filters: filtersReduce,
  todoList: todoListReducer,
});

export default rootReducer;