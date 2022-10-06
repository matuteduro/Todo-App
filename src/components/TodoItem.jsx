import { format } from 'date-fns';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { MdDelete, MdEdit } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../reducers/todoReducer';
import styles from '../styles/modules/todoItem.module.scss';
import { getClasses } from '../utils/getClasses';
import TodoModal from './TodoModal';

function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
    toast.success('Task Deleted Succesfully');
  };
  const handleUpdate = () => {
    setUpdateModalOpen(true);
    toast.success('Task Updated Succesfully');
  };
  return (
    <>
      <div className={styles.item}>
        <div className={styles.todoDetails}>
          [ ]
          <div className={styles.texts}>
            <p
              className={getClasses([
                styles.todoText,
                todo.status === 'completed' &&
                  styles.todo['todoText--completed'],
              ])}
            >
              {todo.title}
            </p>
            <p className={styles.time}>{todo.time}</p>
            <p className={styles.time}>
              {format(new Date(todo.time), 'p, dd/mm/yyyy')}
            </p>
          </div>
        </div>
        <div className={styles.todoActions}>
          <div
            className={styles.icon}
            onClick={handleDelete}
            onKeyDown={handleDelete}
            role="button"
            tabIndex={0}
          >
            <MdDelete />
          </div>
          <div
            className={styles.icon}
            onClick={handleUpdate}
            onKeyDown={handleUpdate}
            role="button"
            tabIndex={0}
          >
            <MdEdit />
          </div>
        </div>
      </div>
      <TodoModal
        todo={todo}
        type="update"
        ModalOpen={updateModalOpen}
        setModalOpen={setUpdateModalOpen}
      />
    </>
  );
}

export default TodoItem;
