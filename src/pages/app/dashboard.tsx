import { PageTitle } from '@components/title/page-title'

export function Dashboard() {
	// throw new Error('Simulação de erro no Dashboard')
	return (
		<>
			<PageTitle title='Dashboard' />
			<div className='text-center'>
				<h2 className='text-2xl font-bold'>Dashboard Page!</h2>
			</div>
		</>
	)
}
