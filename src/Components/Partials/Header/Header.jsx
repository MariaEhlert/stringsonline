import { Link } from "react-router-dom";
import { Nav } from "../Nav/Nav"
import './Header.scss';

const navItems = [
	{ name: 'Forside', path: '/' },
	{ name: 'Salgs- og handelsbetingelser', path: '/tradingConditions' }
]

export const Header = () => {

	return (
		<header className='headerWrapper'>
			<Nav navItems={navItems} />
			<div>
				<img src={require('../../../Assets/Images/home-icon.png')} />
				<Link to='/'></Link>
			</div>
		</header>
	)
}