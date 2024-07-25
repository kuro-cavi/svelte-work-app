import { JSO_PLACEHOLDER_API_BASE_ENDPOINT } from '$lib/server/api-endpoint';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, url }) => {
  const page: string = url.searchParams.get('page') ?? '1';

  const loadPosts = async () => {
    return fetch(`${JSO_PLACEHOLDER_API_BASE_ENDPOINT}/posts?_page=${page}`)
      .then((response) => response.json())
      .catch(() => {});
  };

  return {
    currentPage: Number(page),
    totalPage: 10,
    fetchPosts: loadPosts()
  };
};
