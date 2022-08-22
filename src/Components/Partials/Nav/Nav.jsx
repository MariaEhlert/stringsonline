import { Link, NavLink } from 'react-router-dom'
import { Login } from '../../Sites/Login/Login'
import './Nav.scss'

export const Nav = props => {
	return (
		<nav className='navWrapper'>
			<div className='contact'>
				<figure>
					<img src={require('../../../Assets/Images/mail-icon.png')} />
					<figcaption>
						<Link to='/'>
							<p>sales@stringsonline.com</p>
						</Link>
					</figcaption>
				</figure>
				<figure>
					<img className='phoneIcon' src={require('../../../Assets/Images/phone-icon.png')} />
					<figcaption>
						<Link to='/'>
							<p> +45 98 12 22 68</p>
						</Link>
					</figcaption>
				</figure>
				<div >
				<Link to='/'>
					<img src={require('../../../Assets/Images/cart-icon.png')} />
				</Link>
				</div>

			</div>
			<div className='navigation'>
				<ul>
					<img src={require('../../../Assets/Images/header-bg.png')} />
					<li >
						{props && props.navItems && props.navItems.map((value, index) => {
							return (
								<NavLink key={index} to={value.path}>{value.name}</NavLink>
							)
						})}
						<Link to='/login'>
							<button>Login</button>
						</Link>
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