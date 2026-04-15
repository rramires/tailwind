import { type ComponentProps } from 'react'

/* 
 Component using the React Composition Pattern
*/

/* A border that will contain the other elements. */

type InputContainerProps = ComponentProps<'div'>
export function InputContainer(props: InputContainerProps) {
	return (
		<div
			className='flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm'
			{...props}
		/>
	)
}

/* Icon or image to place before or/and after the control */

type InputAssetProps = ComponentProps<'div'>
export function InputAsset(props: InputAssetProps) {
	return <div {...props} />
}

/* Form element */

type InputControlProps = ComponentProps<'input'>
export function InputControl(props: InputControlProps) {
	return (
		<input
			className='flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600'
			{...props}
		/>
	)
}
