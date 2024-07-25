<script lang="ts">
  import PostsTemplate from '$features/posts/components/posts-template.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<svelte:head>
  <title>Posts</title>
  <meta name="description" content="Posts Page" />
</svelte:head>

<div class="px-4 pt-6">
  <PostsTemplate {...data} />
</div>
