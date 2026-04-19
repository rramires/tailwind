import { PageTitle } from '@components/title/page-title'
import { Mail } from 'lucide-react'

import BrFlag from '@/assets/br.svg'
import UsFlag from '@/assets/us.svg'
import { Editor } from '@/components/ui/editor/editor'
import {
	FileContainer,
	FileControl,
	FileList,
	FilePreview,
	FileTrigger,
} from '@/components/ui/file'
import { InputAsset, InputContainer, InputControl } from '@/components/ui/input'
import { Select, SelectItem } from '@/components/ui/select'

import { FormActions } from './form-actions'
import { SettingsTabs } from './tabs'

export function Home() {
	return (
		<>
			<PageTitle title='Home' />
			<h1 className='to-zinc-900 text-3xl font-medium dark:text-zinc-100'>
				Settings
			</h1>

			<SettingsTabs />

			<div className='mt-6 flex flex-col'>
				<div className='flex flex-col justify-between gap-4 border-b border-zinc-200 pb-5 lg:flex-row lg:items-center dark:border-zinc-700'>
					<div className='space-y-1'>
						<h2 className='text-lg font-medium text-zinc-900'>
							Personal info
						</h2>
						<span className='text-sm text-zinc-500 dark:text-zinc-400'>
							Update your photo and personal details here.
						</span>
					</div>

					<FormActions form='settings' />
				</div>

				<form
					id='settings'
					className='mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200 dark:divide-zinc-700'
				>
					<div className='lg:grid-cols-form flex flex-col gap-3 pb-5 lg:grid'>
						<label
							htmlFor='firstName'
							className='text-sm font-medium text-zinc-700 dark:text-zinc-300'
						>
							Name
						</label>
						<div className='flex flex-col gap-6 lg:grid lg:grid-cols-2'>
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

					<div className='lg:grid-cols-form flex flex-col gap-3 pb-5 lg:grid'>
						<label
							htmlFor='email'
							className='text-sm font-medium text-zinc-700 dark:text-zinc-300'
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

					<div className='lg:grid-cols-form flex flex-col gap-3 pb-5 lg:grid'>
						<label
							htmlFor='photo'
							className='text-sm font-medium text-zinc-700 dark:text-zinc-300'
						>
							Your photo
							<span className='mt-0.5 block text-sm font-normal text-zinc-500'>
								This will be displayed on yout profile.
							</span>
						</label>
						<FileContainer className='flex flex-col gap-5 lg:flex-row lg:items-start'>
							<FilePreview />
							<FileTrigger>
								<FileControl />
							</FileTrigger>
						</FileContainer>
					</div>

					<div className='lg:grid-cols-form flex flex-col gap-3 pb-5 lg:grid'>
						<label
							htmlFor='role'
							className='text-sm font-medium text-zinc-700 dark:text-zinc-300'
						>
							Role
						</label>
						<div className=''>
							<InputContainer>
								<InputControl id='role' placeholder='ADMIN' />
							</InputContainer>
						</div>
					</div>

					<div className='lg:grid-cols-form flex flex-col gap-3 pb-5 lg:grid'>
						<label
							htmlFor='country'
							className='text-sm font-medium text-zinc-700 dark:text-zinc-300'
						>
							Country
						</label>

						<Select placeholder='Select a country...'>
							<SelectItem
								value='br'
								text='Brazil'
								icon={
									<img
										src={BrFlag}
										alt='Brazil'
										className='h-5 w-5'
									/>
								}
							/>
							<SelectItem
								value='us'
								text='EUA'
								icon={
									<img
										src={UsFlag}
										alt='USA'
										className='h-5 w-5'
									/>
								}
							/>
						</Select>
					</div>

					<div className='lg:grid-cols-form flex flex-col gap-3 pb-5 lg:grid'>
						<label
							htmlFor='timezone'
							className='text-sm font-medium text-zinc-700 dark:text-zinc-300'
						>
							Timezone
						</label>
						<div className=''>
							<Select placeholder='Select a timezone...'>
								<SelectItem
									value='utc-3'
									text='Brazil (UTC-3)'
								/>
								<SelectItem value='utc8' text='EUA (UTC-8)' />
							</Select>
						</div>
					</div>

					<div className='lg:grid-cols-form flex flex-col gap-3 pb-5 lg:grid'>
						<label
							htmlFor='bio'
							className='text-sm font-medium text-zinc-700 dark:text-zinc-300'
						>
							Bio
							<span className='mt-0.5 block text-sm font-normal text-zinc-500'>
								Write a short introduction.
							</span>
						</label>

						<Editor />
					</div>

					<div className='lg:grid-cols-form flex flex-col gap-3 pb-5 lg:grid'>
						<label
							htmlFor='projects'
							className='text-sm font-medium text-zinc-700 dark:text-zinc-300'
						>
							Portfolio Projects
							<span className='mt-0.5 block text-sm font-normal text-zinc-500'>
								Share a few snippets of your work
							</span>
						</label>
						<div className=''>
							<FileContainer>
								<FileTrigger>
									<FileControl multiple />
								</FileTrigger>
								<FileList />
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
