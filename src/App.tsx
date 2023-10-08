import './globals.css';
import styles from './App.module.css';

import { TaskType } from './components/Task';
import { Header } from './components/Header';
import { EmptyTasks } from './components/EmptyTasks';
import { FormTasks } from './components/FormTasks';

const tasks: TaskType[] = [
  {
    id: 1,
    content:
      'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    createdAt: new Date('2023-10-01 09:00:00'),
    status: 'Open',
  },
  {
    id: 2,
    content:
      'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    createdAt: new Date('2023-10-01 09:30:00'),
    status: 'Open',
  },
  {
    id: 3,
    content:
      'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    createdAt: new Date('2023-10-01 09:30:00'),
    status: 'Open',
  },
  {
    id: 4,
    content:
      'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    createdAt: new Date('2023-10-01 09:30:00'),
    status: 'Done',
  },
  {
    id: 5,
    content:
      'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    createdAt: new Date('2023-10-01 09:30:00'),
    status: 'Done',
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <main>
          {tasks.length > 0 ? <FormTasks listTasks={tasks} /> : <EmptyTasks />}
        </main>
      </div>
    </div>
  );
}
