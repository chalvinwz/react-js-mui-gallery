import { Container } from '@mui/material';

import Posts from './Posts';

import { useFetchImages } from '../hooks/useFetchImages';

const Feed = () => {
	const { images } = useFetchImages();

	return (
		<Container sx={{ pt: 10, border: 1, borderColor: 'grey.300' }}>
			<Posts images={images} />
		</Container>
	);
};

export default Feed;
