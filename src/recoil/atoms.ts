import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export interface IToDos {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}

export const toDoState = atom({
  key: 'toDoList',
  default: [{ title: '', content: '', id: '', createdAt: '', updatedAt: 'string' }],
  effects_UNSTABLE: [persistAtom],
});
