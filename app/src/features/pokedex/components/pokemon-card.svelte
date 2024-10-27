<script lang="ts">
  import { Card } from 'flowbite-svelte';

  const POKEMON_IMG_URL = 'https://raw.githubusercontent.com';

  interface Props {
    number: number;
    name: string;
  }

  let { number, name }: Props = $props();
</script>

<Card class="flex w-48 items-center">
  <img src="{POKEMON_IMG_URL}/PokeAPI/sprites/master/sprites/pokemon/{number}.png" alt={name} width="96" height="96" />
  <p>{name}</p>
</Card>
