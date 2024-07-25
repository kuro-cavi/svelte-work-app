<script lang="ts">
  import TodoForm from './todo-form.svelte';
  import TodoItem from './todo-item.svelte';
  import TodoItems from './todo-items.svelte';
</script>

<div>
  <TodoForm class="m-auto mb-4 max-w-2xl" />
  <TodoItems class="m-auto" let:todo>
    <TodoItem {...todo} />
  </TodoItems>
</div>
