<script lang="ts">
  import Sidebar from '../sidebar.svelte';
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();
</script>

<Sidebar />
<div class="ml-64">
  {@render children?.()}
</div>
