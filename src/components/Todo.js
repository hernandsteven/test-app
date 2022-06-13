import styles from './Todo.module.css';
const Todo = ({ title, completed, id }) => {
  return (
    <div className={styles.todo_container}>
      <label for={id}>{title}</label>
      {completed ? (
        <>
          <input type="checkbox" id={id} name={title} value={title} checked />
        </>
      ) : (
        <>
          <input type="checkbox" id={id} name={title} value={title} />
        </>
      )}
    </div>
  );
};

export default Todo;
