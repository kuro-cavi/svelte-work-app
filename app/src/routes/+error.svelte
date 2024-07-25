<script lang="ts">
  import { page } from '$app/stores';
</script>

<svelte:head>
  <title>Error</title>
  <meta name="description" content="Error Page" />
</svelte:head>

<div class="flex h-[calc(100vh-4rem)] items-center justify-center">
  <p>{$page.error?.message ?? 'Error'}</p>
</div>
