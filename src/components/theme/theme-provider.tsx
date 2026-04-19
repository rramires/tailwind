import { useLayoutEffect, useState } from 'react'

import { type Theme, ThemeContext } from './theme-context'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [theme, setTheme] = useState<Theme>(() => {
		const saved = localStorage.getItem('theme') as Theme | null
		if (saved) {
			return saved
		}
		return window.matchMedia('(prefers-color-scheme: dark)').matches
			? 'dark'
			: 'light'
	})

	useLayoutEffect(() => {
		updateDOM(theme)
	}, [theme])

	const toggleTheme = () => {
		setTheme((t) => {
			const newTheme = t === 'light' ? 'dark' : 'light'
			localStorage.setItem('theme', newTheme)
			return newTheme
		})
	}

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}

function updateDOM(theme: Theme) {
	const root = document.documentElement
	if (theme === 'dark') {
		root.classList.add('dark')
	} else {
		root.classList.remove('dark')
	}
}
