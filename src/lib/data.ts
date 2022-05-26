import { Todo, User } from "./types";

export const usersData: User[] = [
  {
    username: "Alice",
    email: "alice@mail.com",
  },
  {
    username: "Bob",
    email: "bob@mail.com",
  },
];

export const todosData: Todo[] = [
  {
    id: "0",
    title: "Do laundry",
    createdAt: new Date(),
    content:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    author: usersData[0],
  },
  {
    id: "1",
    title: "Take Bear out for a walk",
    createdAt: new Date(),
    content:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    author: usersData[1],
  },
  {
    id: "2",
    title: "Replace the lightbulb in the living room",
    createdAt: new Date(),
    content:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    author: usersData[1],
  },
  {
    id: "3",
    title: "Go Shopping",
    createdAt: new Date(),
    content:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    author: usersData[1],
  },
];
