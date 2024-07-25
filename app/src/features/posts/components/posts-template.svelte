<script lang="ts">
  import PostsLoader from './posts-loader.svelte';
  import PostsPagination from './posts-pagination.svelte';
  import PostsTable from './posts-table.svelte';

  export let currentPage: number = 1;
  export let totalPage: number = 1;
  export let fetchPosts: Promise<any> = Promise.reject();
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
