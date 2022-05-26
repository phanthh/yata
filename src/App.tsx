import { useReducer, useState } from "react";
import Container from "./components/layout/Container";
import Navbar from "./components/layout/Navbar";
import AddTodo from "./components/todo/AddTodo";
import { TodoContext } from "./components/todo/lib/context";
import { reducer } from "./components/todo/lib/reducer";
import TodoList from "./components/todo/TodoList";
import { todosData } from "./lib/data";

function App() {
  const [{ todos }, dispatch] = useReducer(reducer, { todos: todosData });
  const [searchValue, setSearchValue] = useState("");

  const filteredTodos = todos.filter((todo) => {
    const query = searchValue.toLowerCase();
    return (
      todo.title.toLowerCase().includes(query) ||
      todo.author.username.toLowerCase().includes(query)
    );
  });

  return (
    <TodoContext.Provider value={{ todos: filteredTodos, dispatch }}>
      <Container>
        <Navbar />
        <div className="w-full mt-3">
          <div className="py-1 px-2 border-2 rounded border-gray-200 hover:border-gray-400">
            <svg
              className="fill-gray-500 inline-block mr-2"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
            >
              <path d="M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 20 22 L 22 20 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z"></path>
            </svg>
            <input
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search todo"
              style={{ outline: "none", width: "90%" }}
            />
          </div>
        </div>
        <AddTodo />
        <TodoList />
      </Container>
    </TodoContext.Provider>
  );
}

export default App;
