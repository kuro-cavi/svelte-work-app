<script lang="ts">
  import { Button, Input } from 'flowbite-svelte';
  import { PlusOutline } from 'flowbite-svelte-icons';
  import { getTodoListContext } from '../context/todo-list-context';

  const todoList = getTodoListContext();

  let className = '';
  let value: string = '';
  export { className as class };

  const handleKeydownInput = (e: KeyboardEvent) => {
    if (e.key !== 'Enter' || !value) {
      return;
    }
    todoList.append(value);
    value = '';
  };

  const handleBtnClick = () => {
    if (!value) {
      return;
    }
    todoList.append(value);
    value = '';
  };
</script>

<div class="flex {className}">
  <Input type="text" class="mr-3 w-full" size="lg" placeholder="Create new todo" bind:value on:keydown={handleKeydownInput} />
  <Button slot="right" on:click={handleBtnClick}><PlusOutline /></Button>
</div>
