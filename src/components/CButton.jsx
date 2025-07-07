import React from 'react'

const CButton = ({ children, className }) => {
	return (
		<div
			className={`cursor-pointer bg-transparent p-0 m-0 border-none hover:bg-transparent btn ${className}`}
		>
			{children}
		</div>
	)
}

export default CButton
