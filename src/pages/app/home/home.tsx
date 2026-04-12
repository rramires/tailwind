import { PageTitle } from '@components/title/page-title'

import { FormActions } from './form-actions'
import { SettingsTabs } from './tabs'

export function Home() {
	return (
		<>
			<PageTitle title='Home' />
			<h1 className='to-zinc-900 text-3xl font-medium'>Settings</h1>

			<SettingsTabs />

			<div className='mt-6 flex flex-col'>
				<div className='flex items-center justify-between border-b border-zinc-200 pb-5'>
					<div className='space-y-1'>
						<h2 className='text-lg font-medium text-zinc-900'>
							Personal info
						</h2>
						<span className='text-sm text-zinc-500'>
							Update your photo and personal details here.
						</span>
					</div>

					<FormActions form='settings' />
				</div>

				<form id='settings' className='mt-6 flex w-full flex-col gap-5'>
					form
				</form>
			</div>
		</>
	)
}
