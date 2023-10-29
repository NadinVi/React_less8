import { redirect } from 'react-router-dom'
import type { LoaderFunction } from 'react-router-dom'

import JsonPlaseholderAPI from '../../api/JsonPlaseholderAPI/JsonPlaseholderAPI'

export async function editUserAction({ request, params }: Parameters<LoaderFunction>[number]) {
  const formData = await request.formData()
  const updates = Object.fromEntries(formData)

  if (!params.userId) throw new Error('No iser ID provided')

  await JsonPlaseholderAPI.updateUser({ signal: request.signal, userId: Number(params.userId), updates })

  return redirect(`/users/${params.userId}`)
}
