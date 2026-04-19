import { Outlet } from 'react-router'

export function AuthLayout() {
	return (
		<div className='flex h-screen flex-col antialiased'>
			<header className='flex h-8 items-center bg-zinc-200 pl-8 text-zinc-700 dark:bg-zinc-900 dark:text-zinc-400'></header>
			<main className='flex flex-1'>
				{/* Content will change here */}
				<Outlet />
			</main>
			<footer className='flex h-8 items-center bg-zinc-200 pl-8 text-zinc-700 dark:bg-zinc-900 dark:text-zinc-400'></footer>
		</div>
	)
}
