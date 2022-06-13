import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import todosSlice, { fetchTodos, addTodo } from '../reducers/todosSlice';
import styles from './Todos.module.css';
import Todo from '../components/Todo';

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector(({ todos }) => todos.todos);
  const todosFetched = useSelector(({ todos }) => todos.todosFetched);
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return todosFetched ? (
    <div className={styles.todos_container}>
      <form
        onSubmit={(e) => {
          dispatch(addTodo(inputText));
          e.preventDefault();
        }}
      >
        <div className={styles.todos_input}>
          <label>
            Todo:
            <input
              type="text"
              value={inputText}
              onChange={(e) => {
                setInputText(e.target.value);
              }}
            />
          </label>
        </div>
        <input type="submit" value="Submit" />
      </form>
      {todos.map(({ id, title, completed }) => {
        return <Todo id={id} title={title} completed={completed} />;
      })}
    </div>
  ) : (
    <>
      <h1>Loading Todos ...</h1>
    </>
  );
};

export default Todos;
