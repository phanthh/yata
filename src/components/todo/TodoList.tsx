import useTodos from "./lib/hook";
import TodoBlock from "./TodoBlock";

export default function TodoList() {
  const { todos } = useTodos();
  return (
    <div className="mt-4 w-full flex flex-col justify-start items-center gap-y-2">
      {todos.length > 0 ? (
        todos.map((todo) => <TodoBlock key={todo.id} todo={todo} />)
      ) : (
        <h4 className="text-xl text-gray-400">No todo found :(</h4>
      )}
    </div>
  );
}
