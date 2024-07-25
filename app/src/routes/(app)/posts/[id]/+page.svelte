<script lang="ts">
  import PostTemplate from '$features/post/post-template.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
  let { id } = data;
</script>

<svelte:head>
  <title>Post {id}</title>
  <meta name="description" content="Post {id} Page" />
</svelte:head>

<div class="px-4 pt-6">
  <PostTemplate {...data} />
</div>
