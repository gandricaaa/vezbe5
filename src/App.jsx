import axios from 'axios';
import NavbarComponent from './components/NavbarComponent';
import { Outlet } from 'react-router-dom';
import UsersPage from './pages/UsersPage';
import { useState, useEffect } from 'react';
import UserService from './services/userService';

axios.defaults.baseURL = 'https://dummyjson.com/';
function App() {
	const [users, setUsers] = useState([]);
	useEffect(() => {
		UserService.getAllUsers()
			.then((res) => {
				setUsers(res.data);
			})
			.catch((err) => console.log(err));
	}, []);
	return (
		<div>
			<NavbarComponent />
			<UsersPage users={users} />
			<Outlet />
		</div>
	);
}

export default App;
