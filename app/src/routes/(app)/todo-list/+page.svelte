<script lang="ts">
  import TodoTemplate from '$features/todo-list/components/todo-template.svelte';
  import { setTodoListContext } from '$features/todo-list/context/todo-list-context';

  setTodoListContext();
</script>

<svelte:head>
  <title>TodoList</title>
  <meta name="description" content="TodoList Page" />
</svelte:head>

<div class="pt-6">
  <TodoTemplate />
</div>
