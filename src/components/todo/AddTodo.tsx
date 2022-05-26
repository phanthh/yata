import { useState } from "react";
import useTodos from "./lib/hook";

type FormState = {
  title: string;
  content: string;
};

export default function AddTodo() {
  const { postTodo } = useTodos();
  const [active, setActive] = useState(false);
  const [state, setState] = useState<FormState>({ title: "", content: "" });
  return (
    <div className="w-full mt-3">
      {active ? (
        <form className="relative w-full rounded border-2 border-gray-200 p-2">
          <label className="text-xl font-bold underline">Add todo</label>
          <br />
          <input
            className="mt-2 text-xl font-bold w-fit border-gray-200 border-dashed border-2 px-2 rounded"
            type="text"
            placeholder="Title"
            value={state.title}
            onChange={(e) => {
              setState({ ...state, title: e.target.value });
            }}
          />
          <textarea
            className="w-full mt-2 break-words h-32 border-gray-200 border-dashed border-2 px-2 rounded"
            placeholder="Content"
            value={state.content}
            onChange={(e) => {
              setState({ ...state, content: e.target.value });
            }}
          />

          <div className="absolute right-2 top-2">
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                postTodo(state.title, state.content);
                setState({ title: "", content: "" });
              }}
              className="mr-2 p-1 shadow-md bg-green-200 rounded hover:bg-green-300 active:bg-green-400"
            >
              Commit
            </button>
            <button
              onClick={() => setState({ title: "", content: "" })}
              type="reset"
              className="mr-2 p-1 shadow-md bg-blue-200 rounded hover:bg-blue-300 active:bg-blue-400"
            >
              Reset
            </button>
            <button
              onClick={() => setActive(!active)}
              className="p-1 shadow-md bg-red-200 rounded hover:bg-red-300 active:bg-red-400"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <button
          className="rounded shadow-md px-2 bg-yellow-200 hover:bg-yellow-300 active:bg-yellow-400"
          onClick={() => setActive(!active)}
        >
          +
        </button>
      )}
    </div>
  );
}
