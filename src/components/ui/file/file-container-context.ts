import { createContext, useContext } from 'react'

type FileContainerContextType = {
	id: string
	files: File[]
	onFilesSelected: (files: File[], multiple: boolean) => void
	onFileRemove: (index: number) => void
}
export const FileContainerContext = createContext(
	{} as FileContainerContextType,
)

export const useFileContext = () => useContext(FileContainerContext)
