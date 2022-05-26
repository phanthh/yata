import { createContext } from "react";
import { Todo } from "../../../lib/types";
import { Action } from "./reducer";

type TodoContextType = {
  todos: Todo[];
  dispatch: React.Dispatch<Action>;
};

export const TodoContext = createContext<TodoContextType>({
  todos: [],
  dispatch: () => {},
});
