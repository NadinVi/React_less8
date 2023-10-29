import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { RootLayout } from '../layouts/RootLayout/RootLayout'
import { CommentDetails } from '../pages/CommentDetails/CommentDetails'
import { commentDetailsLoader } from '../pages/CommentDetails/commentDetailsLoader'
import { destroyCommentAction } from '../pages/CommentDetails/destroyCommentAction'
import { Comments } from '../pages/Comments/Comments'
import { commentsLoader } from '../pages/Comments/commentsLoader'
import { EditPost } from '../pages/EditPost/EditPost'
import { editPostAction } from '../pages/EditPost/editPostAction'
import { EditUser } from '../pages/EditUser/EditUser'
import { editUserAction } from '../pages/EditUser/editUserAction'
import { PageNotFound } from '../pages/PageNotFound/PageNotFound'
import { Photos } from '../pages/Photos/Photos'
import { photosLoader } from '../pages/Photos/photosLoader'
import { PostDetails } from '../pages/PostDetails/PostDetail'
import { destroyPostAction } from '../pages/PostDetails/destroyPostAction'
import { postDetailsLoader } from '../pages/PostDetails/postDetailsLoader'
import { Posts } from '../pages/Posts/Posts'
import { postsLoader } from '../pages/Posts/postsLoader'
import { UserDetails } from '../pages/UserDetais/UserDetails'
import { destroyUserAction } from '../pages/UserDetais/destroyUserAction'
import { userDetailsLoader } from '../pages/UserDetais/userDetailsLoader'
import { Users } from '../pages/Users/Users'
import { usersLoader } from '../pages/Users/usersLoader'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        element: <Photos />,
        loader: photosLoader,
      },
      {
        path: 'posts',
        element: <Posts />,
        loader: postsLoader,
      },
      {
        path: 'posts/:postId',
        element: <PostDetails />,
        loader: postDetailsLoader,
      },
      {
        path: 'posts/:postId/destroy',
        action: destroyPostAction,
      },
      {
        path: 'posts/:postId/edit',
        element: <EditPost />,
        loader: postDetailsLoader,
        action: editPostAction,
      },
      {
        path: 'comments',
        element: <Comments />,
        loader: commentsLoader,
      },
      {
        path: 'comments/:commentId',
        element: <CommentDetails />,
        loader: commentDetailsLoader,
      },
      {
        path: 'comments/:commentId/destroy',
        action: destroyCommentAction,
      },
      {
        path: 'users',
        element: <Users />,
        loader: usersLoader,
      },
      {
        path: 'users/:userId',
        element: <UserDetails />,
        loader: userDetailsLoader,
      },
      {
        path: 'users/:userId/destroy',
        action: destroyUserAction,
      },
      {
        path: 'users/:userId/edit',
        element: <EditUser />,
        loader: userDetailsLoader,
        action: editUserAction,
      },
    ],
  },
])

const Router = () => <RouterProvider router={router} />

export { Router }
