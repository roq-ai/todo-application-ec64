import { UserInterface } from 'interfaces/user';
import { CategoryInterface } from 'interfaces/category';
import { GetQueryInterface } from 'interfaces';

export interface TaskInterface {
  id?: string;
  title: string;
  description?: string;
  due_date?: any;
  status: string;
  priority?: number;
  user_id?: string;
  category_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  category?: CategoryInterface;
  _count?: {};
}

export interface TaskGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  status?: string;
  user_id?: string;
  category_id?: string;
}
