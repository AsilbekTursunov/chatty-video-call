import React from 'react'
import Navbar from '../components/MainNavbar'
import Hero from '../components/Hero'
import useThemeStore from '../store/theme'

const MainPage = () => {
	return (
		<div className='font-display'>
			<Navbar />
			<Hero />
		</div>
	)
}

export default MainPage
