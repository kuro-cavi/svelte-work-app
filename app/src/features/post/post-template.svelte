<script lang="ts">
  import { Card, Heading } from 'flowbite-svelte';
  import { UserSolid } from 'flowbite-svelte-icons';

  interface Post {
    id: number;
    title: string;
    body: string;
  }

  interface Comment {
    id: number;
    name: string;
    email: string;
    body: string;
  }

  interface Props {
    id: number;
    post: Post;
    comments: Comment[];
  }

  let { id, post, comments }: Props = $props();
</script>

<div>
  <Card class="mb-4 w-full max-w-none">
    <div class="flex justify-between justify-between">
      <Heading tag="h2" class="mb-4 w-auto">{post.title}</Heading>
      <p class="vertical">No {id}</p>
    </div>
    <p>{post.body}</p>
  </Card>

  <Card class="w-full max-w-none">
    <Heading tag="h5" class="mb-4">Comments</Heading>
    {#each comments as comment (comment.id)}
      <div class="mb-3">
        <div class="flex items-center gap-2">
          <UserSolid />
          <p class="font-semibold text-gray-900 dark:text-white">{comment.name}</p>
        </div>
        <div>
          <p>{comment.body}</p>
        </div>
      </div>
    {:else}
      <p>No Coment</p>
    {/each}
  </Card>
</div>
