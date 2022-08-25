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
			<article className="contactWrapper">
				<div className='contact'>
					<figure>
						<img className="mailIcon" src={require('../../../Assets/Images/mail-icon.png')} alt={'mailIcon'} />
						<figcaption>
							<a href="mailto:sales@stringsonline.com">sales@stringsonline.com</a>
						</figcaption>
					</figure>
					<figure>
						<img className='phoneIcon' src={require('../../../Assets/Images/phone-icon.png')} alt={'phoneIcon'} />
						<figcaption>
							<a href="tel:98-12-22-68">+45 98 12 22 68</a>
						</figcaption>
					</figure>
					<div>
						<Link to='/'>
							<img className="cartIcon" src={require('../../../Assets/Images/cart-icon.png')} alt={'cartIcon'} />
						</Link>
					</div>
				</div>
			</article>
			<Nav navItems={navItems} />
			<div>
				<hr></hr>
				<img src={require('../../../Assets/Images/home-icon.png')} alt={'homeIcon'} />
				<Link to='/'></Link>
				<hr></hr>
			</div>
		</header>
	)
}