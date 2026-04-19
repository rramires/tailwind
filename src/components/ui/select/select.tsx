import * as SelectPrimitive from '@radix-ui/react-select'
import { ChevronDown } from 'lucide-react'
import type { ReactNode } from 'react'

export interface SelectProps extends SelectPrimitive.SelectProps {
	placeholder: string
	children: ReactNode
}

export function Select({ placeholder, children, ...props }: SelectProps) {
	return (
		<SelectPrimitive.Root {...props}>
			<SelectPrimitive.Trigger className='flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none focus-within:border-violet-300 focus-within:ring-4 focus-within:ring-violet-100 data-placeholder:text-zinc-500 dark:border-zinc-700 dark:bg-zinc-800 dark:focus-within:border-violet-500 dark:focus-within:ring-violet-500/20 dark:data-placeholder:text-zinc-400'>
				<SelectPrimitive.Value
					placeholder={placeholder}
					className='text-black'
				/>
				<SelectPrimitive.Icon>
					<ChevronDown className='text-zinc-500' />
				</SelectPrimitive.Icon>
			</SelectPrimitive.Trigger>

			<SelectPrimitive.Portal>
				<SelectPrimitive.Content
					side='bottom'
					position='popper'
					sideOffset={8}
					className='animate-slideDownAndFade animate-slide z-10 w-(--radix-select-trigger-width) overflow-hidden rounded-lg border border-zinc-200 bg-white dark:border-zinc-700 dark:bg-zinc-800'
				>
					<SelectPrimitive.Viewport>
						{children}
					</SelectPrimitive.Viewport>
				</SelectPrimitive.Content>
			</SelectPrimitive.Portal>
		</SelectPrimitive.Root>
	)
}
