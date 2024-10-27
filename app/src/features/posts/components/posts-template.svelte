<script lang="ts">
  import PostsLoader from './posts-loader.svelte';
  import PostsPagination from './posts-pagination.svelte';
  import PostsTable from './posts-table.svelte';

  interface Props {
    currentPage?: number;
    totalPage?: number;
    fetchPosts?: Promise<any>;
  }

  let { currentPage = 1, totalPage = 1, fetchPosts = Promise.reject() }: Props = $props();
</script>

<div>
  {#await fetchPosts}
    <PostsLoader />
  {:then posts}
    <PostsTable {posts} />
    <div class="mt-4 flex">
      <div class="m-auto">
        <PostsPagination {currentPage} {totalPage} />
      </div>
    </div>
  {/await}
</div>
