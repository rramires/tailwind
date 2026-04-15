import { Outlet } from 'react-router'

import { Sidebar } from '@/components/sidebar/sidebar'

export function AppLayout() {
	return (
		<div className='grid-cols-layout grid min-h-screen w-full overflow-hidden antialiased'>
			<Sidebar />
			<main className='overflow-x-hidden overflow-y-auto px-8 pt-8 pb-12'>
				{/* Content will change here */}
				<Outlet />
			</main>
		</div>
	)
}
