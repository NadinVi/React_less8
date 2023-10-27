import type { LoaderFunction } from 'react-router-dom'

import JsonPlaseholderAPI from "../../api/JsonPlaseholderAPI/JsonPlaseholderAPI"

export const photosLoader = async ({ request: { signal } }: Parameters<LoaderFunction>[number]) => {

  return await JsonPlaseholderAPI.getPhotos({ signal })
}
