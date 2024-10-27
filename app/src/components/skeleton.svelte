<!-- ----------------------------------------
Flowbite Skeleton
component https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/skeleton/Skeleton.svelte
see https://flowbite-svelte.com/
---------------------------------------- -->

<script lang="ts">
  interface Props {
    class?: string;
  }

  let { class: className = '' }: Props = $props();
</script>

<div role="status" class="animate-pulse">
  <div class="rounded-full bg-gray-200 dark:bg-gray-700 {className}"></div>
  <span class="sr-only">Loading...</span>
</div>
