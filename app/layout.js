import {Advent_Pro} from 'next/font/google'
import {NavBar} from '@/components/navbar/NavBar'
import '@/css/globals.css'

// Different Styles of Fonts
const headingFont = Advent_Pro({
	subsets: ['latin'],
	display: 'swap',
})

export const metadata = {
	title: 'To Do List App',
	description: 'Best to do list of the year in DMIT',
}

export default function RootLayout({children}) {
	return (
		<html lang="en">
			<body>
				<NavBar className="bg-blue-100" />
				{children}
			</body>
		</html>
	)
}
