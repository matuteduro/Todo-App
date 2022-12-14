import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button, { SelectButton } from './Button';
import TodoModal from './TodoModal';
import styles from '../styles/modules/app.module.scss';
import { updateFilterStatus } from '../reducers/todoReducer';

function AppHeader() {
  const [ModalOpen, setModalOpen] = useState(false);
  const filterStatus = useSelector((state) => state.todo.filterStatus);
  const dispatch = useDispatch();

  const updateFilter = (e) => {
    dispatch(updateFilterStatus(e.target.value));
  };
  return (
    <div className={styles.appHeader}>
      <Button variant="primary" onClick={() => setModalOpen(true)}>
        Add Task
      </Button>
      <SelectButton id="status" value={filterStatus} onChange={updateFilter}>
        <option value="all">All</option>
        <option value="incomplete">Incomplete</option>
        <option value="complete">Completed</option>
      </SelectButton>
      <TodoModal type="add" ModalOpen={ModalOpen} setModalOpen={setModalOpen} />
    </div>
  );
}

export default AppHeader;
