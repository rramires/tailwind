import { CloudUpload } from 'lucide-react'

import { useFileContext } from './file-container-context'

export function FileTrigger() {
	const { id } = useFileContext()

	return (
		<label
			htmlFor={id}
			className='group flex flex-1 cursor-pointer flex-col items-center gap-3 rounded-lg border border-zinc-300 px-6 py-4 text-zinc-500 shadow-sm hover:border-violet-200 hover:bg-zinc-50 hover:text-violet-500'
		>
			<div className='flex h-14 w-14 items-center justify-center rounded-full border-8 border-zinc-50 bg-zinc-100 group-hover:border-violet-50 group-hover:bg-violet-100'>
				<CloudUpload className='h-6 w-6 text-zinc-600 group-hover:text-violet-600' />
			</div>

			<div className='flex flex-col items-center gap-1'>
				<span className='text-sm'>
					<span className='font-semibold text-violet-700'>
						{' '}
						Click to upload
					</span>{' '}
					or drag and drop
				</span>

				<span className='text-xs'>
					SVG, PNG, JPG or GIF (max. 800x400px)
				</span>
			</div>
		</label>
	)
}
