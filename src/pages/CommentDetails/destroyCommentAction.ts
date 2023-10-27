import { redirect } from "react-router-dom"
import type { LoaderFunction } from 'react-router-dom'

import JsonPlaseholderAPI from "../../api/JsonPlaseholderAPI/JsonPlaseholderAPI"

export const destroyCommentAction = async ({ params: { commentId }, request: { signal } }: Parameters<LoaderFunction>[number]) => {

  await JsonPlaseholderAPI.deleteComment({ signal, commentId });

  return redirect('/comments')
}