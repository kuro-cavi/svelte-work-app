<script lang="ts">
  import PostsTemplate from '$features/posts/components/posts-template.svelte';
  import type { PageData } from './$types';

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();
</script>

<svelte:head>
  <title>Posts</title>
  <meta name="description" content="Posts Page" />
</svelte:head>

<div class="px-4 pt-6">
  <PostsTemplate {...data} />
</div>
