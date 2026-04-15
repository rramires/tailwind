import { Bold, Italic, Link, List, ListOrdered } from 'lucide-react'

import { Select, SelectItem } from '../select'
import { Textarea } from './textarea'

export function Editor() {
	/* 
		To finish this editor, use: 
		https://tiptap.dev/docs
	*/

	return (
		<div className='space-y-3'>
			<div className='grid grid-cols-4 gap-3'>
				<Select placeholder='' defaultValue='normal'>
					<SelectItem value='normal' text='Normal' />
					<SelectItem value='md' text='Markdown' />
				</Select>
				<div className='flex items-center gap-1 rounded-lg border border-zinc-200 px-2 shadow-sm'>
					<button
						type='button'
						className='rounded-md p-2 hover:bg-zinc-50'
					>
						<Bold
							className='h-4 w-4 text-zinc-500'
							strokeWidth={3}
						/>
					</button>
					<button
						type='button'
						className='rounded-md p-2 hover:bg-zinc-50'
					>
						<Italic
							className='h-4 w-4 text-zinc-500'
							strokeWidth={3}
						/>
					</button>
					<button
						type='button'
						className='rounded-md p-2 hover:bg-zinc-50'
					>
						<Link
							className='h-4 w-4 text-zinc-500'
							strokeWidth={3}
						/>
					</button>
					<button
						type='button'
						className='rounded-md p-2 hover:bg-zinc-50'
					>
						<List
							className='h-4 w-4 text-zinc-500'
							strokeWidth={3}
						/>
					</button>
					<button
						type='button'
						className='rounded-md p-2 hover:bg-zinc-50'
					>
						<ListOrdered
							className='h-4 w-4 text-zinc-500'
							strokeWidth={3}
						/>
					</button>
				</div>
			</div>
			<Textarea
				id='bio'
				defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
			/>
		</div>
	)
}
