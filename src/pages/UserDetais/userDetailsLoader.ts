import type { LoaderFunction } from 'react-router-dom'

import JsonPlaseholderAPI from "../../api/JsonPlaseholderAPI/JsonPlaseholderAPI"

export const userDetailsLoader = async ({ params: { userId }, request: { signal } }: Parameters<LoaderFunction>[number]) => {
    //console.log(params)
    if(!userId) throw new Error('No iser ID provided')
    return await JsonPlaseholderAPI.getUser({ signal, userId: Number(userId) })
}