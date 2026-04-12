import { createBrowserRouter } from 'react-router'

import { AppLayout } from './pages/_layouts/app'
import { AuthLayout } from './pages/_layouts/auth'
import { Home } from './pages/app/home/home'
import { SignIn } from './pages/auth/sign-in'
import { NotFound } from './pages/e404'
import { ErrorPage } from './pages/error'

export const router = createBrowserRouter([
	{
		path: '/',
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <AppLayout />,
				children: [{ index: true, element: <Home /> }],
			},
			{
				path: '/sign-in',
				element: <AuthLayout />,
				children: [{ index: true, element: <SignIn /> }],
			},
		],
	},
	{
		path: '*',
		element: <NotFound />,
	},
])
