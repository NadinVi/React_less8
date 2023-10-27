import type { LoaderFunction } from 'react-router-dom'

import JsonPlaseholderAPI from "../../api/JsonPlaseholderAPI/JsonPlaseholderAPI"

export const postsLoader = async ({ request: { signal } }: Parameters<LoaderFunction>[number]) => {

  return await JsonPlaseholderAPI.getPosts({ signal })
}
