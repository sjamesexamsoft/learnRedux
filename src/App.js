//import "./styles.css";
//import ReactDOM from "react-dom";
import React, { memo } from "react";
import { useAddInputValue, useTodos } from "./custom-hooks";
import Layout from "./components/Layout";
import AddTodo from "./components/AddToDo";
import TodoList from "./components/ToDoList";
import FilterToDo from "./components/FilterToDo";

const TodoApp = memo(props => {
  const { inputAddValue, changeAddInput, clearInput, keyInput } = useAddInputValue();
  const {
    inputAddValue: filterValue,
    changeAddInput: changeFilterInput,
    clearInput: clearFilterInput,
    keyInput: keyFilterInput
  } = useAddInputValue();
  const { todos, addTodo, checkTodo, removeTodo } = useTodos();

  const clearInputAndAddTodo = () => {
    clearInput();
    addTodo(inputAddValue);
  };

  const clearFilter = () => {
    clearFilterInput();
  };

  return (
    <Layout>
      <AddTodo
        inputValue={inputAddValue}
        onInputChange={changeAddInput}
        onButtonClick={clearInputAndAddTodo}
        onInputKeyPress={event => keyInput(event, clearInputAndAddTodo)}
      />
      <FilterToDo
        inputValue={filterValue}
        onInputChange={changeFilterInput}
        onButtonClick={clearFilter}
        onInputKeyPress={event => keyFilterInput(event, clearFilter)}
      />
      <TodoList
        items={
          filterValue
            ? todos.filter(t =>
                t.text.toLowerCase().includes(filterValue.toLowerCase())
              )
            : todos
        }
        onItemCheck={idx => checkTodo(idx)}
        onItemRemove={idx => removeTodo(idx)}
      />
    </Layout>
  );
});

export default TodoApp;
