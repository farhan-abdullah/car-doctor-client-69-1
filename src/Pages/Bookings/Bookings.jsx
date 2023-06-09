import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Bookings = () => {
	const { user } = useContext(AuthContext);
	const [booking, setBooking] = useState([]);
	const url = `http://localhost:5000/bookings?email=${user?.email}`;
	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => setBooking(data));
	}, []);
	console.log(booking);
	return <div></div>;
};

export default Bookings;
