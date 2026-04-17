import { Outlet } from 'react-router'

import { Sidebar } from '@/components/sidebar/sidebar'

export function AppLayout() {
	return (
		<div className='grid-cols-layout grid min-h-screen w-full overflow-hidden antialiased'>
			<Sidebar />
			<main className='px-4 pt-24 pb-12 lg:col-start-2 lg:px-8 lg:pt-8'>
				{/* Content will change here */}
				<Outlet />
			</main>
		</div>
	)
}
