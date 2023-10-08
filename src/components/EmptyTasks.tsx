import { ClipboardText } from 'phosphor-react';
import styles from './EmptyTasks.module.css';

export function EmptyTasks() {
  return (
    <div className={styles.emptyTasks}>
      <div className={styles.line} />
      <div className={styles.icon}>
        <ClipboardText size={56} />
      </div>
      <span>Você ainda não tem tarefas cadastradas</span>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}
