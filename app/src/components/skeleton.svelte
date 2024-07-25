<!-- ----------------------------------------
Flowbite Skeleton
component https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/skeleton/Skeleton.svelte
see https://flowbite-svelte.com/
---------------------------------------- -->

<script lang="ts">
  let className: string = '';
  export {className as class}
</script>

<div role="status" class="animate-pulse">
  <div class="bg-gray-200 rounded-full dark:bg-gray-700 {className}"></div>
  <span class="sr-only">Loading...</span>
</div>
