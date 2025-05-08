import ProfileView from '@/views/Profile';
import TasksView from '@/views/Tasks';

export interface RouteType {
  label: string;
  path: string;
  component?: React.FC;
}

export const ROUTES: RouteType[] = [
  { label: 'Mis datos', path: '/profile', component: ProfileView },
  { label: 'Mis tareas', path: '/tasks', component: TasksView },
  { label: 'Mis devoluciones', path: '/returns' },
  {
    label: 'Mis comunicaciones',
    path: '/comunications',
  },
  {
    label: 'Mis mejores amigos',
    path: '/best-friends',
  },
];
