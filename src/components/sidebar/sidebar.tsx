import * as Collapsible from '@radix-ui/react-collapsible'
import {
	BarChart,
	CheckSquare,
	Cog,
	Flag,
	Home,
	LifeBuoy,
	Menu,
	Search,
	SquareStack,
	Users,
} from 'lucide-react'

import { Button } from '../ui/button'
import { InputAsset, InputContainer, InputControl } from '../ui/input'
import { Logo } from './logo'
import { NavItem } from './nav-item'
import { Profile } from './profile'
import { UsedSpace } from './used-space'

export function Sidebar() {
	return (
		<Collapsible.Root className='fixed top-0 right-0 left-0 z-20 flex flex-col gap-6 border-b border-zinc-200 bg-white p-4 data-[state=open]:bottom-0 lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:data-[state=closed]:bottom-0'>
			<div className='flex items-center justify-between'>
				<Logo />
				<Collapsible.Trigger className='lg:hidden'>
					<Button type='button' variant='ghost'>
						<Menu className='h-6 w-6' />
					</Button>
				</Collapsible.Trigger>
			</div>

			<Collapsible.Content
				forceMount
				className='flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex'
			>
				<InputContainer>
					<InputAsset>
						<Search className='h-5 w-5 text-zinc-500' />
					</InputAsset>
					<InputControl placeholder='Search' />
				</InputContainer>

				<nav className='space-y-0.5'>
					<NavItem title='Home' icon={Home} />
					<NavItem title='Dashboard' icon={BarChart} />
					<NavItem title='Projects' icon={SquareStack} />
					<NavItem title='Tasks' icon={CheckSquare} />
					<NavItem title='Reporting' icon={Flag} />
					<NavItem title='Users' icon={Users} />
				</nav>

				<div className='mt-auto flex flex-col gap-6'>
					<div className='space-y-0.5'>
						<NavItem title='Support' icon={LifeBuoy} />
						<NavItem title='Home' icon={Cog} />
					</div>
				</div>

				<UsedSpace />

				<div className='h-px bg-zinc-200' />

				<Profile />
			</Collapsible.Content>
		</Collapsible.Root>
	)
}
