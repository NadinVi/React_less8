import type { LoaderFunction } from 'react-router-dom'

import JsonPlaseholderAPI from '../../api/JsonPlaseholderAPI/JsonPlaseholderAPI'

export const postDetailsLoader = async ({
  params: { postId },
  request: { signal },
}: Parameters<LoaderFunction>[number]) => {
  return await JsonPlaseholderAPI.getPost({ signal, postId })
}
