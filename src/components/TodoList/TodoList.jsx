import { TodoInfo } from '../TodoInfo/TodoInfo';

// Add the required props
export const TodoList = ({ todos, users }) => (
  <section className="TodoList">
    {todos.map(todo => {
      return <TodoInfo user={(todo, users)} />;
    })}
  </section>
);
