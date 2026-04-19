import { PageTitle } from '@components/title/page-title'
import { useRouteError } from 'react-router'

interface RouteError {
	statusText?: string
	message?: string
}

export function ErrorPage() {
	const error = useRouteError() as RouteError
	console.error(error)

	return (
		<>
			<PageTitle title='Error' />
			<div
				id='error-page'
				className='flex h-screen flex-col items-center justify-center bg-zinc-100 p-8 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100'
			>
				<h1 className='text-3xl font-bold'>Oops!</h1>
				<p className='pt-1'>Sorry, an error occurred:</p>
				<p className='pt-3'>
					<i className='text-red-600'>
						{error.statusText || error.message}
					</i>
				</p>
			</div>
		</>
	)
}
