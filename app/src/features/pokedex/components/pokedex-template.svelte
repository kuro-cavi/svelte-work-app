<script lang="ts">
  import { Tabs, TabItem } from 'flowbite-svelte';
  import { GENERATIONS, type GenerationsType } from '$lib/constans/pokemon';
  import PokemonCard from './pokemon-card.svelte';

  interface Pokemon {
    number: number;
    name: string;
  }

  interface Props {
    generationPokemons: Record<GenerationsType, Pokemon[]>;
  }

  let { generationPokemons }: Props = $props();
</script>

<div>
  <Tabs tabStyle="underline" contentClass="p-4">
    {#each GENERATIONS as generation}
      <TabItem open={generation === GENERATIONS[0]} title="generation {generation}">
        <div class="flex flex-wrap justify-center gap-4">
          {#each generationPokemons[generation] as pokemon (pokemon.number)}
            <PokemonCard {...pokemon} />
          {/each}
        </div>
      </TabItem>
    {/each}
  </Tabs>
</div>
