import {
	BarChart,
	CheckSquare,
	Cog,
	Flag,
	Home,
	LifeBuoy,
	Search,
	SquareStack,
	Users,
} from 'lucide-react'

import { InputAsset, InputContainer, InputControl } from '../ui/input'
import { Logo } from './logo'
import { NavItem } from './nav-item'
import { Profile } from './profile'
import { UsedSpace } from './used-space'

export function Sidebar() {
	return (
		<aside className='flex flex-col gap-6 border-r border-zinc-200 px-5 py-8'>
			<Logo />

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
		</aside>
	)
}
