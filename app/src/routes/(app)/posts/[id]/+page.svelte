<script lang="ts">
  import PostTemplate from '$features/post/post-template.svelte';
  import type { PageData } from './$types';

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();
  let { id } = data;
</script>

<svelte:head>
  <title>Post {id}</title>
  <meta name="description" content="Post {id} Page" />
</svelte:head>

<div class="px-4 pt-6">
  <PostTemplate {...data} />
</div>
