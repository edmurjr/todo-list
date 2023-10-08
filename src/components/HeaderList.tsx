import styles from './HeaderList.module.css';

interface HeaderListProps {
  count: number;
  countDone: number;
}

export function HeaderList({ count, countDone }: HeaderListProps) {
  const textStatusDone =
    countDone === 0 && count === 0 ? '0' : countDone + ' de ' + count;

  return (
    <div className={styles.taskList}>
      <div className={styles.taskStatus}>
        <span className={styles.taskAll}>Tarefas criadas</span>
        <div className={styles.countToDos}>{count}</div>
      </div>
      <div className={styles.taskStatus}>
        <span className={styles.taskDone}>Concluídas</span>
        <div className={styles.countDone}>
          <span>{textStatusDone}</span>
        </div>
      </div>
    </div>
  );
}
