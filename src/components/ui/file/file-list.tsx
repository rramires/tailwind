import { useAutoAnimate } from '@formkit/auto-animate/react'

import { useFileContext } from './file-container-context'
import { FileItem } from './file-item'

export function FileList() {
	const { files, onFileRemove } = useFileContext()
	const [parent] = useAutoAnimate()

	return (
		<div ref={parent} className='mt-4 space-y-3'>
			{files.map((file, index) => {
				return (
					<FileItem
						state='progress'
						key={`id_${index}`}
						index={index}
						name={file.name}
						size={file.size}
						onRemove={onFileRemove}
					/>
				)
			})}
			{/* Examples from other states: */}
			<FileItem
				state='error'
				key={`id_${100}`}
				index={100}
				name='ErrorFile'
				size={100000}
				onRemove={onFileRemove}
			/>
			<FileItem
				state='complete'
				key={`id_${101}`}
				index={100}
				name='CompleteFile'
				size={111111}
				onRemove={onFileRemove}
			/>
		</div>
	)
}
