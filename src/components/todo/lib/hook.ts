import { useContext } from "react";
import { Todo } from "../../../lib/types";
import { TodoContext } from "./context";
import { ActionType } from "./reducer";

const useTodos = () => {
  const { todos, dispatch } = useContext(TodoContext);
  const updateTodo = (id: string, todo: Todo) => {
    dispatch({ type: ActionType.UPDATE, payload: { id, todo } });
  };
  const postTodo = (title: string, content: string) => {
    dispatch({ type: ActionType.POST, payload: { title, content } });
  };

  const deleteTodo = (id: string) => {
    dispatch({ type: ActionType.DELETE, payload: { id } });
  };
  return { todos, updateTodo, postTodo, deleteTodo };
};

export default useTodos;
