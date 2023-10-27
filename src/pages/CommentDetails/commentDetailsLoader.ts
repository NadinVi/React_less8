import type { LoaderFunction } from 'react-router-dom'

import JsonPlaseholderAPI from "../../api/JsonPlaseholderAPI/JsonPlaseholderAPI"

export const commentDetailsLoader = async ({ params: { commentId }, request: { signal } }: Parameters<LoaderFunction>[number]) => {
  //console.log(params)
  return await JsonPlaseholderAPI.getComment({ signal, commentId })
}