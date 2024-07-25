<script lang="ts">
  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';

  interface Post {
    id: number;
    title: string;
    body: string;
  }

  export let posts: Post[] = [];

  const truncateChar = (char: string) => {
    return char.length > 50 ? char.slice(0, 50) + ` ...` : char;
  };

  const handleClick = (id: number) => {
    window.location.href = `/posts/${id}`;
  };
</script>

<Table hoverable shadow>
  <TableHead>
    <TableHeadCell>ID</TableHeadCell>
    <TableHeadCell>Title</TableHeadCell>
    <TableHeadCell>Body</TableHeadCell>
  </TableHead>
  <TableBody>
    {#each posts as { id, title, body } (id)}
      <TableBodyRow on:click={() => handleClick(id)} class="cursor-pointer">
        <TableBodyCell>{id}</TableBodyCell>
        <TableBodyCell>{title}</TableBodyCell>
        <TableBodyCell>{truncateChar(body)}</TableBodyCell>
      </TableBodyRow>
    {:else}
      <TableBodyRow>
        <td class="px-6 py-4 whitespace-nowrap font-medium text-center" colspan="3">no data</td>
      </TableBodyRow>
    {/each}
  </TableBody>
</Table>
