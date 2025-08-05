import { LOGO_URL } from '../utils/constants';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	const [btnName, SetBtnName] = useState('login');
	return (
		<div className='header'>
			<div className='logo'>
				<img className='logo' src={LOGO_URL} />
			</div>
			<div className='nav-items'>
				<ul>
					<li>
						<Link to='/Body'>Home</Link>
					</li>
					<li>
						<Link to='/About'>About Us</Link>
					</li>
					<li>
						<Link to='/Contact'>Contact Us</Link>
					</li>
					<li>Cart</li>
					<button
						className='login'
						onClick={() => {
							btnName === 'Login' ? SetBtnName('Logout') : SetBtnName('Login');
						}}
					>
						{btnName}
					</button>
				</ul>
			</div>
		</div>
	);
};

export default Header;
