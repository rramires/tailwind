import { ThemeProvider } from '@components/theme/theme-provider'
import { TitleProvider } from '@components/title/title-provider'
import { RouterProvider } from 'react-router'

import { router } from './routes'

export function App() {
	return (
		<ThemeProvider>
			<TitleProvider
				titleTemplate='%s | Tailwind'
				defaultTitle='Tailwind'
			>
				<RouterProvider router={router} />
			</TitleProvider>
		</ThemeProvider>
	)
}
