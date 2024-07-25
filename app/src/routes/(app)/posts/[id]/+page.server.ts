import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { JSO_PLACEHOLDER_API_BASE_ENDPOINT } from '$lib/server/api-endpoint';

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

export const load: PageServerLoad = async ({ params }) => {
  const fetchPost = async () => {
    const res = await fetch(`${JSO_PLACEHOLDER_API_BASE_ENDPOINT}/posts/${params.id}`);
    if (res.ok) {
      return await res.json();
    }
    if (res.status === 404) {
      error(404, 'Not found');
    }

    throw new Error();
  };

  const fetchPostComments = async () => {
    return fetch(`${JSO_PLACEHOLDER_API_BASE_ENDPOINT}/posts/${params.id}/comments`).then((response) => response.json());
  };

  const [post, comments]: [Post, Comment[]] = await Promise.all([fetchPost(), fetchPostComments()]);

  return {
    id: Number(params.id),
    post,
    comments
  };
};
