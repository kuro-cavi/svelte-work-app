<script lang="ts">
  import { Pagination, type LinkType } from 'flowbite-svelte';
  import { ChevronLeftOutline, ChevronRightOutline } from 'flowbite-svelte-icons';

  export let currentPage: number = 1;
  export let totalPage: number = 1;
  let pages: LinkType[] = [];

  $: {
    let result: LinkType[] = [];
    for (let i = 1; i <= totalPage; i++) {
      result.push({
        name: `${i}`,
        href: `/posts?page=${i}`,
        active: i === currentPage
      });
    }
    pages = result;
  }

  const previous = () => {
    if (currentPage > 1) {
      window.location.href = `/posts?page=${currentPage - 1}`;
    }
  };
  const next = () => {
    if (currentPage < totalPage) {
      window.location.href = `/posts?page=${currentPage + 1}`;
    }
  };
</script>

<Pagination {pages} large on:previous={previous} on:next={next} icon>
  <svelte:fragment slot="prev">
    <span class="sr-only">Previous</span>
    <ChevronLeftOutline class="h-6 w-6" />
  </svelte:fragment>
  <svelte:fragment slot="next">
    <span class="sr-only">Next</span>
    <ChevronRightOutline class="h-6 w-6" />
  </svelte:fragment>
</Pagination>
