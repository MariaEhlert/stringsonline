import { Nav } from "../Nav/Nav"

const navItems = [
	{ name: 'Forside', path: '/' }
]

export const Header = () => {

	return (
		<div>
			<header>
				<Nav navItems={navItems} />
			</header>
		</div>
	)
}