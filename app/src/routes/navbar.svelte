<script lang="ts">
  import { Navbar, NavBrand, NavLi, NavUl, DarkMode } from 'flowbite-svelte';
</script>

<Navbar fluid color="default">
  <NavBrand href="/">
    <img src="/images/svelte-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">SvelteKit Flowbite App</span>
  </NavBrand>
  <DarkMode />
</Navbar>
