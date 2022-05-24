export type User = {
  username: string;
  email: string;
};

export type Todo = {
  id: string;
  title: string;
  createdAt: Date;
  content: string;
  author: User;
};
