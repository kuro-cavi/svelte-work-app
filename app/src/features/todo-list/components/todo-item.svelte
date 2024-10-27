<script lang="ts">
  import { Button } from 'flowbite-svelte';
  import { TrashBinOutline } from 'flowbite-svelte-icons';
  import { P, A } from 'flowbite-svelte';
  import { getTodoListContext } from '../context/todo-list-context';

  const todoList = getTodoListContext();

  interface Props {
    id: number;
    title: string;
    completed: boolean;
  }

  let { id, title, completed }: Props = $props();
</script>

<div class="flex items-center justify-between" role="listitem">
  <A
    class="mr-3 w-full cursor-pointer bg-white px-6 py-4 font-medium text-gray-900
    hover:bg-gray-50 hover:no-underline dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-600
    "
    on:click={() => todoList.toggle(id)}
  >
    <P class={completed && 'text-gray-300 line-through dark:text-gray-500'}>{title}</P></A
  >
  <Button outline class="p-2" color="red" on:click={() => todoList.remove(id)}>
    <TrashBinOutline color="red" />
  </Button>
</div>
