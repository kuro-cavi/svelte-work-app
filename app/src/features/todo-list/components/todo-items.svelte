<script lang="ts">
  import { Card } from 'flowbite-svelte';
  import { getTodoListContext } from '../context/todo-list-context';

  const todoList = getTodoListContext();

  interface Props {
    class?: string;
    children?: import('svelte').Snippet<[any]>;
  }

  let { class: className = '', children }: Props = $props();
</script>

{#if $todoList.length}
  <Card rounded size="lg" class={className}>
    <div class="relative overflow-x-auto">
      {#each $todoList as todo (todo.id)}
        <div class="border-b px-6 py-4 last:border-b-0 dark:border-gray-700">
          {@render children?.({ todo })}
        </div>
      {/each}
    </div>
  </Card>
{/if}
