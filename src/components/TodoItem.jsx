import { format } from 'date-fns'
import React from 'react'
import { MdDelete, MdEdit } from 'react-icons/md'
import styles from '../styles/modules/todoItem.module.scss'

function TodoItem({ todo }) {
  const handleDelete = () => {
    
  }
  const handleUpdate = () => {

  }
  return (
    <div className={styles.item}>
        <div className={styles.todoDetails}>
            [ ]
            <div className={styles.texts}>
                <p className={getClasses([styles.todoText, tood.status === 'complete' && styles.todo['todoText--complete'],])}>{todo.title}
                </p>
                <p className={styles.time}>
                    { todo.time }
                </p>
                <p className={styles.time}>
                    {format(new Date(todo.time), 'p, DD/MM/YYYY')}
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
  )
}

export default TodoItem