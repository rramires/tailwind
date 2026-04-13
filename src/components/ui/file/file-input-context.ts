import { createContext } from 'react'

export type FileInputContextType = { id: string }
export const FileInputContext = createContext({} as FileInputContextType)
