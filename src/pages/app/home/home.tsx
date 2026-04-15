import { PageTitle } from '@components/title/page-title'
import { Mail } from 'lucide-react'

import {
	FileContainer,
	FileControl,
	FileList,
	FilePreview,
	FileTrigger,
} from '@/components/ui/file'
import { InputAsset, InputContainer, InputControl } from '@/components/ui/input'
import { Select } from '@/components/ui/select'

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

				<form
					id='settings'
					className='mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200'
				>
					<div className='grid-cols-form grid gap-3 pb-5'>
						<label
							htmlFor='firstName'
							className='text-sm font-medium text-zinc-700'
						>
							Name
						</label>
						<div className='grid grid-cols-2 gap-6'>
							<InputContainer>
								<InputControl
									id='firstName'
									placeholder='Your First Name'
								/>
							</InputContainer>
							<InputContainer>
								<InputControl
									id='lastName'
									placeholder='Your Last Name'
								/>
							</InputContainer>
						</div>
						<div />
					</div>

					<div className='grid-cols-form grid gap-3 pb-5'>
						<label
							htmlFor='email'
							className='text-sm font-medium text-zinc-700'
						>
							Email address
						</label>
						<div className=''>
							<InputContainer>
								<InputAsset>
									<Mail className='h-5 w-5 text-zinc-500' />
								</InputAsset>
								<InputControl
									id='email'
									placeholder='email@example.com'
								/>
							</InputContainer>
						</div>
						<div />
					</div>

					<div className='grid-cols-form grid gap-3 pb-5'>
						<label
							htmlFor='photo'
							className='text-sm font-medium text-zinc-700'
						>
							Your photo
							<span className='mt-0.5 block text-sm font-normal text-zinc-500'>
								This will be displayed on yout profile.
							</span>
						</label>
						<FileContainer className='flex items-start gap-6'>
							<FilePreview />
							<FileTrigger />
							<FileControl />
						</FileContainer>
					</div>

					<div className='grid-cols-form grid gap-3 pb-5'>
						<label
							htmlFor='role'
							className='text-sm font-medium text-zinc-700'
						>
							Role
						</label>
						<div className=''>
							<InputContainer>
								<InputControl id='role' placeholder='ADMIN' />
							</InputContainer>
						</div>
					</div>

					<div className='grid-cols-form grid gap-3 pb-5'>
						<label
							htmlFor='country'
							className='text-sm font-medium text-zinc-700'
						>
							Country
						</label>

						<Select />
					</div>

					<div className='grid-cols-form grid gap-3 pb-5'>
						<label
							htmlFor='timezone'
							className='text-sm font-medium text-zinc-700'
						>
							Timezone
						</label>
						<div className=''>{/* TODO: Implement this */}</div>
					</div>

					<div className='grid-cols-form grid gap-3 pb-5'>
						<label
							htmlFor='bio'
							className='text-sm font-medium text-zinc-700'
						>
							Bio
							<span className='mt-0.5 block text-sm font-normal text-zinc-500'>
								Write a short introduction.
							</span>
						</label>
						<div className=''>{/* TODO: Implement this */}</div>
					</div>

					<div className='grid-cols-form grid gap-3 pb-5'>
						<label
							htmlFor='projects'
							className='text-sm font-medium text-zinc-700'
						>
							Portfolio Projects
							<span className='mt-0.5 block text-sm font-normal text-zinc-500'>
								Share a few snippets of your work
							</span>
						</label>
						<div className=''>
							<FileContainer>
								<FileTrigger />
								<FileList />
								<FileControl multiple />
							</FileContainer>
						</div>
					</div>
				</form>
				<div className='flex justify-end pt-5'>
					<FormActions form='settings' />
				</div>
			</div>
		</>
	)
}
