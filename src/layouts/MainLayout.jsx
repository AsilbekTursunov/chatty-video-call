import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const MainLayout = ({ children, showSidebar = false }) => {
	return (
		<div className='min-h-screen flex flex-row'>
			{showSidebar && <Sidebar />}
			<div className='flex flex-1 flex-col'>
				<Navbar />
				<main className='flex-1'>{children}</main>
			</div>
		</div>
	)
}

export default MainLayout
