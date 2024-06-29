import React from 'react';
import UserComponent from '../components/UserComponent';

function UsersPage({ users }) {
	return (
		<div>
			{users.map((user) => {
				return <UserComponent key={user.id} />;
			})}
		</div>
	);
}

export default UsersPage;
