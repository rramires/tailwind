import { TitleProvider } from '@components/title/title-provider'
import { RouterProvider } from 'react-router'

import { router } from './routes'

export function App() {
	return (
		<TitleProvider titleTemplate='%s | Tailwind' defaultTitle='Tailwind'>
			<RouterProvider router={router} />
		</TitleProvider>
	)
}
