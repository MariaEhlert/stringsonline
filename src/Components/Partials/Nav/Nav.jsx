import { NavLink } from 'react-router-dom'
import { Search } from '../../Search/Search'

import './Nav.scss'

export const Nav = props => {
	return (
		<nav className='navWrapper'>
			<div className='navigation'>
				<ul>
					<NavLink to='/'>
						<img src={require('../../../Assets/Images/header-bg.png')} alt={'headerBg'}  />
					</NavLink>
					<li >
						{/* mapper over navigation som ligger i Header.jsx */}
						{props && props.navItems && props.navItems.map((value, index) => {
							return (
								<NavLink key={index} to={value.path}>{value.name}</NavLink>
							)
						})}
						{/* virker ikke  */}
						<NavLink to='/login'>
							<button>Login</button>
						</NavLink>
					</li>
				</ul>
				<Search/>
			</div>
		</nav>
	)
}