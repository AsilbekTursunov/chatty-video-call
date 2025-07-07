import { Bell, LogOut, Palette, ShipWheelIcon } from 'lucide-react'
import { Link, useLocation } from 'react-router'
import { useAuthUser } from '../hooks/useAuthUser'
import CButton from './CButton'
import { useLogout } from '../hooks/useLogout'
import Theme from './Theme'

const Navbar = () => {
	const { authUser } = useAuthUser()
	const location = useLocation()
	const currentPath = location.pathname
	const isChatPage = currentPath.startsWith('/chat')
	const { logoutMutation } = useLogout()
	if (!authUser) return null
	return (
		<div
			className={`flex items-center ${
				isChatPage ? 'justify-between' : 'justify-end'
			} p-4 h-20 border-b border-base-300`}
		>
			{isChatPage && (
				<Link to='/' className='flex items-center space-x-2'>
					<ShipWheelIcon className='size-9 text-primary' />
					<span className='text-3xl font-bold'>Chatty</span>
				</Link>
			)}
			<div className='flex items-center gap-1'>
				<CButton className='mx-2 px-2'>
					<Bell />
				</CButton>
				<CButton className='mx-2 '>
					<Theme />
				</CButton>
				<CButton className='mx-2 '>
					<img
						src={authUser?.profilePic}
						alt={authUser?.fullName}
						className='w-8 h-8 rounded-full'
					/>
				</CButton>
				<CButton className='mx-2 '>
					<LogOut onClick={logoutMutation} />
				</CButton>
			</div>
		</div>
	)
}

export default Navbar
