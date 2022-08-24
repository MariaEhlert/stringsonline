import { NavLink } from 'react-router-dom'
import './Nav.scss'

export const Nav = props => {
	return (
		<nav className='navWrapper'>
			<div className='navigation'>
				<ul>
					{/* skal linke til forsiden */}
					<NavLink to='/'>
						<img src={require('../../../Assets/Images/header-bg.png')} alt={'headerBg'}  />
					</NavLink>
					<li >
						{props && props.navItems && props.navItems.map((value, index) => {
							return (
								<NavLink key={index} to={value.path}>{value.name}</NavLink>
							)
						})}
						<NavLink to='/login'>
							<button>Login</button>
						</NavLink>
					</li>

				</ul>
				<div className='seachWrapper'>
					<input type="text" placeholder='Indtast søgeord' />
					<button><span className="material-symbols-outlined">arrow_forward</span></button>
				</div>
			</div>
		</nav>
	)
}