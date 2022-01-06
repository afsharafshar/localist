import { Priority } from './priority';

export interface Board {
  id?: string;
  tempId: number;
  title: string;
  body?: string;
  priority: Priority;
  fromServer: boolean;
}
