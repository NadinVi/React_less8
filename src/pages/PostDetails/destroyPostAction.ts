import { redirect } from 'react-router-dom'
import type { LoaderFunction } from 'react-router-dom'

import JsonPlaseholderAPI from '../../api/JsonPlaseholderAPI/JsonPlaseholderAPI'

export const destroyPostAction = async ({
  params: { postId },
  request: { signal },
}: Parameters<LoaderFunction>[number]) => {
  await JsonPlaseholderAPI.deletePost({ signal, postId })

  return redirect('/posts')
}
