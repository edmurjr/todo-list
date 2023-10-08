import { Check, Circle, Trash } from 'phosphor-react';
import styles from './Task.module.css';

export interface TaskType {
  id: number;
  content: string;
  createdAt: Date;
  status: string;
}

interface TaskProps {
  task: TaskType;
  onDeleteTask: (task: number) => void;
  onCheckUpdate: (task: number) => void;
}

export function Task({ task, onDeleteTask, onCheckUpdate }: TaskProps) {
  function handleDeleteTask() {
    onDeleteTask(task.id);
  }

  function handleCheckTask() {
    onCheckUpdate(task.id);
  }

  return (
    <article className={styles.tasks}>
      <div className={styles.tasksList}>
        <button
          onClick={handleCheckTask}
          disabled={task.status === 'Done'}
          title="Atualizar status da Task"
        >
          {task.status !== 'Done' ? (
            <Circle className={styles.circle} size={20} />
          ) : (
            <Check className={styles.check} size={18} />
          )}
        </button>
      </div>
      <div className={styles.tasksList}>
        {task.status === 'Done' ? (
          <p className={styles.textCheck}>{task.content}</p>
        ) : (
          <p className={styles.textCircle}>{task.content}</p>
        )}
      </div>
      <div className={styles.tasksList}>
        <button onClick={handleDeleteTask} title="Deletar Task">
          <Trash size={20} />
        </button>
      </div>
    </article>
  );
}
