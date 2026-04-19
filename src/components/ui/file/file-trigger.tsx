import { CloudUpload } from 'lucide-react'
import { type ComponentProps } from 'react'

type FileTriggerProps = ComponentProps<'label'>
export function FileTrigger({ children, ...props }: FileTriggerProps) {
	return (
		<label
			className='group flex flex-1 cursor-pointer flex-col items-center gap-3 rounded-lg border border-zinc-300 px-6 py-4 text-zinc-500 shadow-sm focus-within:border-violet-300 focus-within:ring-4 focus-within:ring-violet-100 hover:border-violet-200 hover:bg-zinc-50 hover:text-violet-50 dark:border-zinc-800 dark:hover:border-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-violet-300'
			{...props}
		>
			<div className='flex h-14 w-14 items-center justify-center rounded-full border-8 border-zinc-50 bg-zinc-100 group-hover:border-violet-50 group-hover:bg-violet-100 dark:border-zinc-700 dark:bg-zinc-800 dark:group-hover:border-zinc-600 dark:group-hover:bg-zinc-700'>
				<CloudUpload className='h-6 w-6 text-zinc-600 group-hover:text-violet-600 dark:text-zinc-500 dark:group-hover:text-violet-300' />
			</div>

			<div className='flex flex-col items-center gap-1'>
				<span className='text-sm'>
					<span className='font-semibold text-violet-700 dark:text-violet-400'>
						{' '}
						Click to upload
					</span>{' '}
					or drag and drop
				</span>

				<span className='text-xs'>
					SVG, PNG, JPG or GIF (max. 800x400px)
				</span>
			</div>

			{children}
		</label>
	)
}
