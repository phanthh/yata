import { Todo } from "../lib/types";
import TodoBlock from "./TodoBlock";

export default function TodoList({
  todos,
  deleteTodo,
  updateTodo,
}: {
  todos: Todo[];
  deleteTodo: (id: string) => void;
  updateTodo: (id: string, newTodo: Todo) => void;
}) {
  return (
    <div className="mt-4 w-full flex flex-col justify-start items-center gap-y-2">
      {todos.length > 0 ? (
        todos.map((todo) => (
          <TodoBlock
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
          />
        ))
      ) : (
        <h4 className="text-xl text-gray-400">No todo found :(</h4>
      )}
    </div>
  );
}
