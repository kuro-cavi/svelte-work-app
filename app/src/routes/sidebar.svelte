<script lang="ts">
  import { page } from '$app/stores';

  import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper } from 'flowbite-svelte';
  import { ChartPieSolid, RectangleListSolid } from 'flowbite-svelte-icons';

  $: activeUrl = $page.url.pathname;
</script>

<Sidebar {activeUrl} asideClass="fixed flex-none h-full w-64 lg:h-auto border-e border-gray-200 dark:border-gray-600">
  <div class="h-[calc(100vh-4rem)] overflow-y-auto bg-white px-3 dark:bg-gray-800">
    <SidebarWrapper>
      <SidebarGroup>
        <SidebarItem label="Dashboard" href="/" active={activeUrl === '/'}>
          <svelte:fragment slot="icon">
            <ChartPieSolid
              class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
            />
          </svelte:fragment>
        </SidebarItem>
        <SidebarItem label="TodoList" href="/todolist" active={activeUrl === '/todolist'}>
          <svelte:fragment slot="icon">
            <RectangleListSolid
              class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
            />
          </svelte:fragment>
        </SidebarItem>
      </SidebarGroup>
    </SidebarWrapper>
  </div>
</Sidebar>
