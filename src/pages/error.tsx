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
				className='flex h-screen flex-col items-center justify-center'
			>
				<h1 className='text-3xl font-bold'>Oops!</h1>
				<p>Desculpe, ocorreu um erro.</p>
				<p>
					<i className='font-bold text-red-600'>
						{error.statusText || error.message}
					</i>
				</p>
			</div>
		</>
	)
}
