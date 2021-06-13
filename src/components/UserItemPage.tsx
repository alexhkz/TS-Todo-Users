import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FC } from 'react';
import { IUser } from '../Types/types';
import { useParams, useHistory } from 'react-router';

interface UserItemPageParams {
	id: string;
}

const UserItemPage: FC = () => {

	const [user, setUser] = useState<IUser | null>(null);
	const params = useParams<UserItemPageParams>();
	const history = useHistory();

	useEffect(() => {
		fetchUser();
	});

	async function fetchUser() {
		try {
			const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id);
			setUser(response.data);
		} catch (e) {
			alert(e)
		}
	}

	return (
		<div>
			<button onClick={() => history.push('/users')}>Back</button>
			<h1>Страница пользователей {user?.name}</h1>
			<div>
				{user?.email}
			</div>
			<div>
				{user?.address.city} {user?.address.street} {user?.address.zipCode}
			</div>
		</div>
	);
};

export default UserItemPage;