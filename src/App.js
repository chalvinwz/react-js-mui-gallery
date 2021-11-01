// import { Button } from '@mui/material';
// import { Send } from '@mui/icons-material';
// import { styled } from '@mui/material/styles';

// const StyledButton = styled(Button)(({ theme }) => ({
// 	width: 200,
// 	color: theme.palette.common.white,
// 	backgroundColor: theme.palette.primary.dark,
// 	boxShadow: theme.shadows[1],
// }));

import Navbar from './components/Navbar';
import Home from './pages/Home';

const App = () => {
	return (
		<>
			{/* <StyledButton variant='contained' endIcon={<Send />}>
				Send
			</StyledButton> */}
			{/* <Button variant='contained' endIcon={<Send />}>
				Sent
			</Button> */}
			<Navbar />
			<Home />
		</>
	);
};

export default App;
