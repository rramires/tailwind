import { Outlet } from 'react-router'

import { Sidebar } from '@/components/sidebar/sidebar'

export function AppLayout() {
	return (
		<div className='grid min-h-screen w-screen grid-cols-[minmax(18rem,20rem)_1fr] antialiased'>
			<Sidebar />
			<main className='px-8 pt-8 pb-12'>
				{/* Content will change here */}
				<Outlet />
			</main>
		</div>
	)
}
