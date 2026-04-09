import { PageTitle } from '@components/title/page-title'

export function Dashboard() {
	//throw new Error('Dashboard error simulation')

	return (
		<>
			<PageTitle title='Dashboard' />
			<div className='flex-1 bg-slate-900 px-8 py-4 text-slate-100'>
				<h2 className='text-3xl font-bold'>Dashboard Page!</h2>
			</div>
		</>
	)
}
