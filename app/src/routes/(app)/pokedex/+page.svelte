<script lang="ts">
  import PokedexTemplate from '$features/pokedex/components/pokedex-template.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
  let { generationPokemons } = data;
</script>

<svelte:head>
  <title>Pokedex</title>
  <meta name="description" content="Pokedex Page" />
</svelte:head>

<PokedexTemplate {generationPokemons} />
