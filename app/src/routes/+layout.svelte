<script lang="ts">
  import '../app.css';
  import Navbar from './navbar.svelte';
  import Sidebar from './sidebar.svelte';
</script>

<div class="relative max-h-screen w-full overflow-auto">
  <header
    class="fixed sticky top-0 z-40 mx-auto h-16 w-full flex-none border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-800"
  >
    <Navbar />
  </header>
  <Sidebar />
  <main class="ml-64">
    <slot />
  </main>
</div>
