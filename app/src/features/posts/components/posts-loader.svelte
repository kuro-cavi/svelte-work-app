<script lang="ts">
  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
  import Skeleton from '$components/skeleton.svelte';
</script>

<Table shadow>
  <TableHead>
    <TableHeadCell class="w-1/12"><Skeleton class="h-2.5" /></TableHeadCell>
    <TableHeadCell><Skeleton class="h-2.5" /></TableHeadCell>
    <TableHeadCell><Skeleton class="h-2.5" /></TableHeadCell>
  </TableHead>
  <TableBody>
    {#each { length: 10 } as _}
      <TableBodyRow>
        <TableBodyCell><Skeleton class="h-2.5" /></TableBodyCell>
        <TableBodyCell><Skeleton class="h-2.5" /></TableBodyCell>
        <TableBodyCell><Skeleton class="h-2.5" /></TableBodyCell>
      </TableBodyRow>
    {/each}
  </TableBody>
</Table>
