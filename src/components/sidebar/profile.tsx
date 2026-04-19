import { LogOut } from 'lucide-react'

import { Button } from '../ui/button'

export function Profile() {
	return (
		<div className='flex items-center gap-3'>
			<img
				className='h-10 w-10 rounded-full'
				src='https://avatars.githubusercontent.com/u/14129483?s=128'
				alt=''
			/>
			<div className='flex flex-1 flex-col truncate'>
				<span className='text-sm font-semibold text-zinc-700 dark:text-zinc-100'>
					Ricardo Off
				</span>
				<span className='truncate text-sm text-zinc-500 dark:text-zinc-400'>
					ricardo@email.com
				</span>
			</div>
			<Button type='button' variant='ghost'>
				<LogOut className='h-5 w-5 text-zinc-500' />
			</Button>
		</div>
	)
}
