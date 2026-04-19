import { PageTitle } from '@components/title/page-title'

export function NotFound() {
	return (
		<>
			<PageTitle title='Not Found' />
			<div className='flex h-screen flex-col items-center justify-center bg-zinc-100 p-8 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100'>
				<h1 className='text-3xl font-bold'>404 - Page not found</h1>
				<h3 className='pt-3 font-bold text-zinc-400 dark:text-zinc-500'>
					<a
						className='ml-1 hover:text-zinc-900 hover:underline dark:hover:text-zinc-100'
						href='/'
					>
						Return to homepage
					</a>
				</h3>
			</div>
		</>
	)
}
