import { type ComponentProps, useId, useState } from 'react'

import { FileContainerContext } from './file-container-context'

type FileContainerProps = ComponentProps<'div'>
export function FileContainer(props: FileContainerProps) {
	const id = useId()
	const [files, setFiles] = useState<File[]>([])

	function onFilesSelected(files: File[], multiple: boolean) {
		if (multiple) {
			setFiles((state) => [...state, ...files])
		} else {
			setFiles(files)
		}
	}

	function onFileRemove(index: number) {
		setFiles((state) => state.filter((_, i) => i !== index))
	}

	return (
		<FileContainerContext.Provider
			value={{ id, files, onFilesSelected, onFileRemove }}
		>
			<div {...props} />
		</FileContainerContext.Provider>
	)
}
