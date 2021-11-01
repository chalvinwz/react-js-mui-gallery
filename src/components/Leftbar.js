import { Box, Container, Typography } from '@mui/material';
import {
	Home,
	Person,
	List,
	CameraAlt,
	PlayCircleOutline,
	PhoneAndroid,
	Bookmark,
	Storefront,
	Settings,
	ExitToApp,
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const IconBox = styled(Box)(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	marginBottom: theme.spacing(4),
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
	[theme.breakpoints.down('sm')]: {
		display: 'none',
	},
	marginLeft: theme.spacing(1),
}));

const Leftbar = () => {
	return (
		<Container
			sx={{
				bgcolor: { xs: 'primary.main', sm: 'white' },
				color: { xs: 'white', sm: 'black' },
				pt: 10,
				height: '100vh',
				position: 'sticky',
				top: 0,
			}}
		>
			<IconBox>
				<Home />
				<StyledTypography>Homepage</StyledTypography>
			</IconBox>
			<IconBox>
				<Person />
				<StyledTypography>Friends</StyledTypography>
			</IconBox>
			<IconBox>
				<List />
				<StyledTypography>Lists</StyledTypography>
			</IconBox>
			<IconBox>
				<CameraAlt />
				<StyledTypography>Camera</StyledTypography>
			</IconBox>
			<IconBox>
				<PlayCircleOutline />
				<StyledTypography>Videos</StyledTypography>
			</IconBox>
			<IconBox>
				<PhoneAndroid />
				<StyledTypography>Apps</StyledTypography>
			</IconBox>
			<IconBox>
				<Bookmark />
				<StyledTypography>Collections</StyledTypography>
			</IconBox>
			<IconBox>
				<Storefront />
				<StyledTypography>Market Place</StyledTypography>
			</IconBox>
			<IconBox>
				<Settings />
				<StyledTypography>Settings</StyledTypography>
			</IconBox>
			<IconBox>
				<ExitToApp />
				<StyledTypography>Log Out</StyledTypography>
			</IconBox>
		</Container>
	);
};

export default Leftbar;
