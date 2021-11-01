import { useState, useEffect } from 'react';

import axios from 'axios';

export const useFetchImages = () => {
	const [images, setImages] = useState([]);

	useEffect(() => {
		const fetchImages = async () => {
			try {
				const { data } = await axios.get(
					`https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}`
				);
				setImages(data);
			} catch (err) {
				console.log(err);
			}
		};

		fetchImages();
	}, []);

	return { images };
};
