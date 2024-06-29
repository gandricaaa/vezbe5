import React from 'react';
import { Link } from 'react-router-dom';

function NavbarComponent() {
	return (
		<div className='flex items-center justify-center'>
			<Link to={'/users'}>Users</Link>
		</div>
	);
}

export default NavbarComponent;
