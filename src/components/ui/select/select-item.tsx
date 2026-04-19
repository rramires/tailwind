import * as Select from '@radix-ui/react-select'
import { Check } from 'lucide-react'

export type SelectItemProps = Select.SelectItemProps & {
	text: string
	icon?: React.ReactNode
}

export function SelectItem({ icon, text, ...props }: SelectItemProps) {
	return (
		<Select.Item
			className='flex items-center justify-between px-3 py-2.5 outline-none data-highlighted:bg-zinc-50 dark:data-highlighted:bg-zinc-700'
			{...props}
		>
			<div className='flex items-center gap-2'>
				{icon && <Select.Icon>{icon}</Select.Icon>}
				<Select.ItemText asChild>
					<span className='text-black dark:text-zinc-100'>
						{text}
					</span>
				</Select.ItemText>
			</div>
			<Select.ItemIndicator>
				<Check className='h-4 w-4 text-violet-500 dark:text-violet-300' />
			</Select.ItemIndicator>
		</Select.Item>
	)
}
