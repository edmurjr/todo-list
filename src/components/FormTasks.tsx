import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react';
import { PlusCircle } from 'phosphor-react';
import styles from './FormTasks.module.css';
import { HeaderList } from './HeaderList';
import { EmptyTasks } from './EmptyTasks';
import { Task } from './Task';

export interface TaskType {
  id: number;
  content: string;
  createdAt: Date;
  status: string;
}

interface TaskProps {
  listTasks: TaskType[];
}

export function FormTasks({ listTasks }: TaskProps) {
  const [tasks, setTasks] = useState([...listTasks]);
  const [newTaskText, setNewTaskText] = useState('');
  const [countTasks, setCountTasks] = useState(listTasks.length);
  const [countDone, setCountDone] = useState(
    tasks.filter((listTasks) => listTasks.status === 'Done').length
  );

  // const isNewTaskEmpty = newTaskText.length === 0;

  function handleCreateNewTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newTask: TaskType = {
      id: tasks.length + 1,
      content: newTaskText,
      createdAt: new Date(),
      status: 'Open',
    };
    setTasks([...tasks, newTask]);
    setNewTaskText('');
    if (newTask.status === 'Done') {
      setCountDone(countDone + 1);
    }
    setCountTasks(tasks.length + 1);
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setNewTaskText(event.target.value);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!');
  }

  function deleteTask(taskIdToDelete: number) {
    const tasksWithoutDeleteOne = tasks.filter((task) => {
      return task.id !== taskIdToDelete;
    });
    setTasks(tasksWithoutDeleteOne);
    const statusTaskDeleteOne = tasks.filter((task) => {
      return task.id === taskIdToDelete;
    })[0].status;
    if (statusTaskDeleteOne === 'Done') {
      setCountDone(countDone === 0 ? 0 : countDone - 1);
    }
    setCountTasks(tasks.length - 1);
  }

  function taskCheckUpdate(taskIdToUpdateCheck: number) {
    const taskToUpdate = tasks.filter((task) => {
      return task.id === taskIdToUpdateCheck;
    })[0];
    taskToUpdate.status = 'Done';
    const tasksWithoutUpdateOne = tasks.filter((task) => {
      return task.id !== taskIdToUpdateCheck;
    });
    const newTasks = [...tasksWithoutUpdateOne, taskToUpdate];
    setTasks(newTasks);
    setCountDone(countDone + 1);
  }

  function getCountTasks() {
    return countTasks;
  }
  function getCountDone() {
    return countDone;
  }

  return (
    <article className={styles.task}>
      <HeaderList count={getCountTasks()} countDone={getCountDone()} />

      <form onSubmit={handleCreateNewTask}>
        <div className={styles.container}>
          <input
            name="task"
            placeholder="Adicione uma nova tarefa"
            type="text"
            onChange={handleNewTaskChange}
            required
            onInvalid={handleNewTaskInvalid}
            value={newTaskText}
          />
          <button type="submit">
            Criar <PlusCircle size={20} />
          </button>
        </div>
      </form>

      {tasks.length > 0 ? (
        tasks.map((task) => {
          return (
            <Task
              key={task.id}
              task={task}
              onDeleteTask={deleteTask}
              onCheckUpdate={taskCheckUpdate}
            />
          );
        })
      ) : (
        <EmptyTasks />
      )}
    </article>
  );
}
