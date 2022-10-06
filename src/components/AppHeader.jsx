import React, { useState } from 'react';
import Button, { SelectButton } from './Button';
import TodoModal from './TodoModal';
import styles from '../styles/modules/app.module.scss';

function AppHeader() {
  const [ModalOpen, setModalOpen] = useState(false);

  return (
    <div className={styles.appHeader}>
      <Button variant="primary" onClick={() => setModalOpen(true)}>
        Add Task
      </Button>
      <SelectButton id="status">
        <option value="all">All</option>
        <option value="incomplete">Incomplete</option>
        <option value="complete">Complete</option>
      </SelectButton>
      <TodoModal type="add" ModalOpen={ModalOpen} setModalOpen={setModalOpen} />
    </div>
  );
}

export default AppHeader;
