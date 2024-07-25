<script lang="ts">
  import { page } from '$app/stores';

  import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper } from 'flowbite-svelte';
  import { BookSolid, RectangleListSolid, UserSolid } from 'flowbite-svelte-icons';
  import Pokeball from '$lib/images/pokeball.svelte';

  interface Menu {
    label: string;
    href: string;
    icon: typeof RectangleListSolid | typeof BookSolid;
  }

  const menus: Menu[] = [
    { label: 'TodoList', href: '/todo-list', icon: RectangleListSolid },
    { label: 'Posts', href: '/posts', icon: BookSolid },
    { label: 'Profile', href: '/profile', icon: UserSolid },
    // @ts-ignore
    { label: 'Pokedex', href: '/pokedex', icon: Pokeball }
  ];

  $: activeUrl = $page.url.pathname;
</script>

<Sidebar {activeUrl} asideClass="fixed flex-none h-full w-64 lg:h-auto border-e border-gray-200 dark:border-gray-600">
  <SidebarWrapper divClass="h-[calc(100vh-4rem)] overflow-y-auto py-4 px-3 bg-white rounded dark:bg-gray-800">
    <SidebarGroup>
      {#each menus as menu (menu.label)}
        <SidebarItem label={menu.label} href={menu.href} active={activeUrl === menu.href}>
          <svelte:fragment slot="icon">
            <svelte:component
              this={menu.icon}
              class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
            />
          </svelte:fragment>
        </SidebarItem>
      {/each}
    </SidebarGroup>
  </SidebarWrapper>
</Sidebar>
