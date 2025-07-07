import React from 'react'
import useThemeStore from '../store/theme'
import { PaletteIcon } from 'lucide-react'
import { THEMES } from '../constants'

const Theme = () => {
	const { theme, setTheme } = useThemeStore()
	return (
		<div className='dropdown dropdown-end'>
			{/* DROPDOWN TRIGGER */}
			<button tabIndex={0} className='btn btn-ghost btn-circle'>
				<PaletteIcon className='size-5' />
			</button>

			<div
				tabIndex={0}
				className='dropdown-content mt-2 p-1 shadow-2xl bg-base-200 backdrop-blur-lg rounded-2xl
        w-56 border border-base-content/10 max-h-80 overflow-y-auto'
			>
				<div className='space-y-1'>
					{THEMES.map(themeOption => (
						<button
							key={themeOption.name}
							className={`
              w-full px-4 py-3 rounded-xl flex items-center gap-3 transition-colors
              ${
								theme === themeOption.name
									? 'bg-primary/10 text-primary'
									: 'hover:bg-base-content/5'
							}
            `}
							onClick={() => setTheme(themeOption.name)}
						>
							<PaletteIcon className='size-4' />
							<span className='text-sm font-medium'>{themeOption.label}</span>
							{/* THEME PREVIEW COLORS */}
							<div className='ml-auto flex gap-1'>
								{themeOption.colors.map((color, i) => (
									<span
										key={i}
										className='size-2 rounded-full'
										style={{ backgroundColor: color }}
									/>
								))}
							</div>
						</button>
					))}
				</div>
			</div>
		</div>
	)
}

export default Theme

// {
// 	THEMES.map(theme => (
// 		<li
// 			key={theme.label}
// 			onClick={() => setTheme(theme.name)}
// 			className='flex items-center gap-2 p-2 cursor-pointer hover:bg-base-200'
// 		>
// 			{theme.name}
// 			<div className='flex items-center gap-2'>
// 				{theme.colors.map(color => (
// 					<span key={color} className={`w-2 h-2 rounded-full`} style={{ backgroundColor: color }} />
// 				))}
// 			</div>
// 		</li>
// 	))
// }
