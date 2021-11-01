import Leftbar from '../components/Leftbar';
import Feed from '../components/Feed';
import Rightbar from '../components/Rightbar';

import { Grid } from '@mui/material';

import Add from '../components/Add';

const Home = () => {
	return (
		<>
			<Grid container>
				<Grid item xs={2} sm={3} md={2}>
					<Leftbar />
				</Grid>
				<Grid item xs={10} sm={9} md={7}>
					<Feed />
				</Grid>
				<Grid item md={3} sx={{ display: { xs: 'none', md: 'flex' } }}>
					<Rightbar />
				</Grid>
			</Grid>
			<Add />
		</>
	);
};

export default Home;
