import { PageTitle } from '@components/title/page-title'

export function SignIn() {
	// throw new Error('Simulação de erro no SignIn')
	return (
		<>
			<PageTitle title='Sign In' />
			<div className='text-center'>
				<h2 className='text-2xl font-bold'>SignIn Page!</h2>
			</div>
		</>
	)
}
