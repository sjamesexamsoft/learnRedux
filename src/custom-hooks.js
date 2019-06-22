import { useState } from "react";

export const useAddInputValue = (initialValue = "") => {
  console.log("here")
  const [inputAddValue, setInputValue] = useState(initialValue);

  return {
    inputAddValue,
    changeAddInput: event => setInputValue(event.target.value),
    clearInput: () => setInputValue(""),
    keyInput: (event, callback) => {
      if (event.which === 13 || event.keyCode === 13) {
        callback(inputAddValue);
        return true;
      }

      return false;
    }
  };
};

export const useTodos = (initialValue = []) => {
  const [todos, setTodos] = useState(initialValue);

  return {
    todos,
    addTodo: text => {
      if (text !== "") {
        setTodos(
          todos.concat({
            text,
            checked: false
          })
        );
      }
    },
    checkTodo: idx => {
      setTodos(
        todos.map((todo, index) => {
          if (idx === index) {
            todo.checked = !todo.checked;
          }

          return todo;
        })
      );
    },
    removeTodo: idx => {
      setTodos(todos.filter((todo, index) => idx !== index));
    }
  };
};

//Add another search bar underneath that will filter for any matches