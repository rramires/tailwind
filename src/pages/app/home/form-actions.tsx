type FormActionsProps = {
	form: string
}

export function FormActions({ form }: FormActionsProps) {
	return (
		<div className='flex items-center gap-4'>
			<button
				className='rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50'
				type='button'
			>
				Cancel
			</button>
			<button
				className='rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700'
				type='submit'
				form={form}
			>
				Save
			</button>
		</div>
	)
}
