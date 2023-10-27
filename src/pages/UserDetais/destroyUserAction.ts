import { redirect } from "react-router-dom"
import type { LoaderFunction } from 'react-router-dom'

import JsonPlaseholderAPI from "../../api/JsonPlaseholderAPI/JsonPlaseholderAPI"

export const destroyUserAction = async ({ params: { userId }, request: { signal } }: Parameters<LoaderFunction>[number]) => {
  if(!userId) throw new Error('No iser ID provided')

  await JsonPlaseholderAPI.deleteUser({ signal, userId: Number(userId) });

  return redirect('/users')
}
