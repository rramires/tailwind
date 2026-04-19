import { type ComponentProps } from 'react'

export type TextareaProps = ComponentProps<'textarea'>

export function Textarea(props: TextareaProps) {
	return (
		<textarea
			className='min-h-30 w-full min-w-0 resize-y rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none focus-within:border-violet-300 focus-within:ring-4 focus-within:ring-violet-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder-zinc-400 dark:focus:border-violet-500 dark:focus:ring-violet-500/20'
			{...props}
		/>
	)
}
