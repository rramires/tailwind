import { Button } from '@/components/ui/button'

type FormActionsProps = {
	form: string
}

export function FormActions({ form }: FormActionsProps) {
	return (
		<div className='flex items-center gap-4'>
			<Button type='button' form={form} variant='outline'>
				Cancel
			</Button>
			<Button type='submit' form={form}>
				Save
			</Button>
		</div>
	)
}
