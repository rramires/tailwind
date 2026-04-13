import { type ChangeEvent, type ComponentProps } from 'react'

import { useFileContext } from './file-container-context'

type FileControlProps = ComponentProps<'input'>
export function FileControl({ multiple = false, ...props }: FileControlProps) {
	const { id, onFilesSelected } = useFileContext()

	function handleFilesSelected(event: ChangeEvent<HTMLInputElement>) {
		if (!event.target.files?.length) {
			return
		}

		const files = Array.from(event.target.files)
		onFilesSelected(files, multiple)
	}

	return (
		<input
			id={id}
			type='file'
			className='sr-only'
			multiple={multiple}
			{...props}
			onChange={handleFilesSelected}
		/>
	)
}
