import { PageTitle } from '@components/title/page-title'

export function SignIn() {
	const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
		e.preventDefault()
		// Add login logic here
	}

	return (
		<>
			<PageTitle title='Sign In' />
			<div className='flex flex-1 items-center justify-center bg-zinc-100 px-8 py-4 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100'>
				<div className='w-full max-w-md rounded-lg bg-white p-8 shadow-lg dark:bg-zinc-800'>
					<h2 className='mb-6 text-center text-2xl font-bold'>
						Login
					</h2>

					<form onSubmit={handleSubmit} className='space-y-4'>
						<div>
							<label
								htmlFor='username'
								className='mb-1 block text-sm font-medium'
							>
								Username
							</label>
							<input
								id='username'
								type='text'
								placeholder='Enter your username'
								className='w-full rounded-md border border-zinc-300 bg-white px-4 py-2 text-zinc-900 placeholder-zinc-400 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 focus:outline-none dark:border-zinc-600 dark:bg-zinc-700 dark:text-zinc-100 dark:placeholder-zinc-500 dark:focus:border-zinc-500 dark:focus:ring-zinc-500'
								required
							/>
						</div>

						<div>
							<label
								htmlFor='password'
								className='mb-1 block text-sm font-medium'
							>
								Password
							</label>
							<input
								id='password'
								type='password'
								placeholder='Enter your password'
								className='w-full rounded-md border border-zinc-300 bg-white px-4 py-2 text-zinc-900 placeholder-zinc-400 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 focus:outline-none dark:border-zinc-600 dark:bg-zinc-700 dark:text-zinc-100 dark:placeholder-zinc-500 dark:focus:border-zinc-500 dark:focus:ring-zinc-500'
								required
							/>
						</div>

						<button
							type='submit'
							/* disabled */
							className='mt-6 w-full rounded-md bg-violet-600 px-4 py-2 font-semibold text-white transition-colors enabled:cursor-pointer enabled:hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-60'
						>
							Login
						</button>
					</form>
				</div>
			</div>
		</>
	)
}
