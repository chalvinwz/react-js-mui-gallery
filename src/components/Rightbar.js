import { Container } from '@mui/material';

import OnlineFriends from './OnlineFriends';
import ImageGallery from './ImageGallery';
import Categories from './Categories';

const Rightbar = () => {
	return (
		<Container sx={{ pt: 10, height: '100vh', position: 'sticky', top: 0 }}>
			<OnlineFriends />
			<ImageGallery />
			<Categories />
		</Container>
	);
};

export default Rightbar;
