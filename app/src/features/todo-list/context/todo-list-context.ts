import { writable, type Readable } from 'svelte/store';
import { getContext, setContext } from 'svelte';
import { CONTEXT_KEY } from '$lib/constans/context-key';

interface State {
  id: number;
  title: string;
  completed: boolean;
}

interface TodoList extends Readable<State[]> {
  append: (title: string) => void;
  toggle: (id: number) => void;
  remove: (id: number) => void;
  reset: () => void;
}

const todoList = (): TodoList => {
  const { subscribe, set, update } = writable<State[]>([]);

  const append = (title: string) => {
    const id = new Date().valueOf(); //TODO::uuid
    update((current) => [...current, { id, title, completed: false }]);
  };

  const toggle = (id: number) => {
    update((current) => {
      return current.map((value) => {
        if (value.id === id) {
          return { ...value, completed: !value.completed };
        }
        return value;
      });
    });
  };

  const remove = (id: number) => {
    update((current) => {
      return current.filter((value) => value.id !== id);
    });
  };

  return {
    subscribe,
    append,
    toggle,
    remove,
    reset: () => set([])
  };
};

export const setTodoListContext = () => setContext(CONTEXT_KEY.TODO_LIST, todoList());
export const getTodoListContext = () => getContext<TodoList>(CONTEXT_KEY.TODO_LIST);
