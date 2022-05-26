import { useState } from "react";
import { Todo } from "../../lib/types";
import useTodos from "./lib/hook";

export default function TodoBlock({ todo }: { todo: Todo }) {
  const { updateTodo, deleteTodo } = useTodos();
  const [edit, setEdit] = useState(false);
  const [newTodo, setNewTodo] = useState(todo);
  const { title, createdAt, author, content } = todo;

  return (
    <div
      className="w-full p-2 rounded border-gray-200 border-2 relative"
      style={{ minHeight: "3.5rem" }}
    >
      {edit ? (
        <h1
          className="text-xl font-bold w-fit border-2 border-green-200 border-dashed rounded px-2"
          suppressContentEditableWarning={true}
          contentEditable={true}
          onBlur={(e) => {
            setNewTodo({
              ...todo,
              title: e.currentTarget.innerHTML as string,
            });
          }}
        >
          {newTodo.title}
        </h1>
      ) : (
        <h1 className="text-xl font-bold">{title}</h1>
      )}
      <span className="text-sm text-gray-500">{`${createdAt.toDateString()} - @${
        author.username
      }`}</span>
      {edit ? (
        <div
          onBlur={(e) => {
            setNewTodo({
              ...todo,
              content: e.currentTarget.innerHTML as string,
            });
          }}
          suppressContentEditableWarning={true}
          contentEditable={true}
          className="w-full h-full overflow-hidden resize-y border-2 border-green-200 border-dashed rounded px-2"
        >
          {content}
        </div>
      ) : (
        <p className="break-words">{content}</p>
      )}
      <div className="absolute right-2 top-2">
        {edit ? (
          <>
            <button
              onClick={() => {
                setEdit(!edit);
                updateTodo(todo.id, newTodo);
              }}
              className="mr-2 p-1 shadow-md bg-green-200 rounded hover:bg-green-300 active:bg-green-400"
            >
              Commit
            </button>
            <button
              onClick={() => setEdit(!edit)}
              className="p-1 shadow-md bg-red-200 rounded hover:bg-red-300 active:bg-red-400"
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => {
                setEdit(!edit);
              }}
              className="mr-2 p-1 shadow-md bg-blue-200 rounded hover:bg-blue-300 active:bg-blue-400"
            >
              Edit
            </button>
            <button
              onClick={() => {
                window.confirm("Are you sure you want to delete this todo ?") &&
                  deleteTodo(todo.id);
              }}
              className="p-1 shadow-md bg-red-200 rounded hover:bg-red-300 active:bg-red-400"
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
}
