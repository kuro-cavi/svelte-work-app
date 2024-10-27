<script lang="ts">
  import { run } from 'svelte/legacy';

  import { Pagination, type LinkType } from 'flowbite-svelte';
  import { ChevronLeftOutline, ChevronRightOutline } from 'flowbite-svelte-icons';

  interface Props {
    currentPage?: number;
    totalPage?: number;
  }

  let { currentPage = 1, totalPage = 1 }: Props = $props();
  let pages: LinkType[] = $state([]);

  run(() => {
    let result: LinkType[] = [];
    for (let i = 1; i <= totalPage; i++) {
      result.push({
        name: `${i}`,
        href: `/posts?page=${i}`,
        active: i === currentPage
      });
    }
    pages = result;
  });

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
  {#snippet prev()}
    <span class="sr-only">Previous</span>
    <ChevronLeftOutline class="h-6 w-6" />
  {/snippet}
  {#snippet next()}
    <span class="sr-only">Next</span>
    <ChevronRightOutline class="h-6 w-6" />
  {/snippet}
</Pagination>
