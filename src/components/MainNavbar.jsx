import React, { useState } from 'react'
import { MessageCircle, Video, Menu, X, Users, Shield, Zap, ShipWheelIcon } from 'lucide-react'
import { Link } from 'react-router'

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	return (
		<div className='navbar bg-base-100 shadow-sm border-b border-base-300 sticky top-0 z-50'>
			<div className='navbar-start'>
				<div className='dropdown lg:hidden'>
					<label tabIndex={0} className='btn btn-ghost' onClick={toggleMenu}>
						{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</label>
				</div>
				<a className='btn btn-ghost normal-case text-xl font-bold text-primary'>
					<Link to='/' className='flex items-center space-x-2'>
						<ShipWheelIcon className='size-9 text-primary' />
						<span className='text-3xl font-bold'>Chatty</span>
					</Link>
				</a>
			</div>

			<div className='navbar-end gap-2'>
				<Link
					to='/login'
					className='btn btn-primary text-white hover:btn-primary-focus transition-all duration-200'
				>
					Get Started
				</Link>
			</div>
		</div>
	)
}

export default Navbar
