<script lang="ts">
  import { A, Card } from 'flowbite-svelte';
  import { BookSolid, RectangleListSolid, UserSolid } from 'flowbite-svelte-icons';
  import Pokeball from '$lib/images/pokeball.svelte';

  interface Item {
    title: string;
    href: string;
    icon: typeof RectangleListSolid | typeof BookSolid | typeof UserSolid;
  }
  const items: Item[] = [
    { title: 'TodoList', href: '/todo-list', icon: RectangleListSolid },
    { title: 'Posts', href: '/posts', icon: BookSolid },
    { title: 'Profile', href: '/profile', icon: UserSolid },
    // @ts-ignore
    { title: 'Pokedex', href: '/pokedex', icon: Pokeball }
  ];
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="mx-auto mt-16 max-w-5xl">
  <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
    {#each items as item (item.title)}
      <A class="hover:no-underline" href={item.href}>
        <Card class="hover:border-primary-500 dark:hover:border-primary-500">
          <div class="just flex items-center justify-center gap-3">
            <item.icon size="lg" />{item.title}
          </div>
        </Card>
      </A>
    {/each}
  </div>
</div>
