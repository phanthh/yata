import { usersData } from "../../../lib/data";
import { Todo } from "../../../lib/types";

type State = {
  todos: Todo[];
};

export enum ActionType {
  UPDATE,
  POST,
  DELETE,
}

export type Action =
  | {
      type: ActionType.UPDATE;
      payload: { id: string; todo: Todo };
    }
  | {
      type: ActionType.POST;
      payload: { title: string; content: string };
    }
  | {
      type: ActionType.DELETE;
      payload: { id: string };
    };

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case ActionType.UPDATE: {
      const { id, todo } = action.payload;
      const newTodos = [...state.todos];
      newTodos[newTodos.findIndex((todo) => todo.id === id)] = todo as Todo;
      return { todos: newTodos };
    }
    case ActionType.POST: {
      const { title, content } = action.payload;
      const newTodos = [
        {
          id: String(
            Number(
              state.todos.reduce((prev, curr) =>
                Number(prev.id) > Number(curr.id) ? prev : curr
              ).id
            ) + 1
          ),
          title,
          content,
          createdAt: new Date(),
          author: usersData[0],
        },
        ...state.todos,
      ];
      console.log(newTodos);
      return { todos: newTodos };
    }
    case ActionType.DELETE: {
      const { id } = action.payload;
      return { todos: state.todos.filter((todo) => todo.id !== id) };
    }
    default:
      throw new Error("Unknown action type!");
  }
}
