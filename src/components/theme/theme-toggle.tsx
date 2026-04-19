import { Moon, Sun } from 'lucide-react'
import { useContext } from 'react'

import { Button } from '../ui/button'
import { ThemeContext } from './theme-context'

export function ThemeToggle() {
	const context = useContext(ThemeContext)

	if (!context) {
		throw new Error('ThemeToggle must be used within ThemeProvider')
	}

	return (
		<Button type='button' variant='ghost' onClick={context.toggleTheme}>
			{context.theme === 'light' ? (
				<Moon className='h-6 w-6' />
			) : (
				<Sun className='h-6 w-6' />
			)}
		</Button>
	)
}
