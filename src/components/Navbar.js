import { useState } from 'react';

import {
	Box,
	AppBar,
	Toolbar,
	Typography,
	TextField,
	InputAdornment,
	Badge,
	Avatar,
} from '@mui/material';
import { Search, Mail, Notifications, Close } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const ToolbarFlex = styled(Toolbar)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
}));

const LogoSm = styled(Typography)(({ theme }) => ({
	display: 'block',
	[theme.breakpoints.up('md')]: {
		display: 'none',
	},
}));

// const LogoMd = styled(Typography)(({ theme }) => ({
// 	display: 'none',
// 	[theme.breakpoints.up('md')]: {
// 		display: 'block',
// 	},
// }));

const StyledTextField = styled(TextField)(({ theme }) => ({
	width: 500,
	[theme.breakpoints.down('lg')]: {
		width: 400,
	},
	[theme.breakpoints.down('md')]: {
		width: 300,
	},
	[theme.breakpoints.down('sm')]: {
		width: 200,
	},
	// [theme.breakpoints.down('sm')]: {
	// 	display: none,
	// },
	paddingBottom: theme.spacing(2),
}));

const BoxIcons = styled(Box)(({ theme }) => ({
	alignItems: 'center',
	display: 'flex',
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
	marginRight: theme.spacing(3),
	[theme.breakpoints.down('md')]: {
		marginRight: theme.spacing(2),
	},
	[theme.breakpoints.down('sm')]: {
		marginRight: theme.spacing(1),
	},
	cursor: 'pointer',
}));

const StyledSearchIcon = styled(Search)(({ theme }) => ({
	[theme.breakpoints.up('sm')]: {
		display: 'none',
	},
	marginRight: theme.spacing(2),
	[theme.breakpoints.down('sm')]: {
		marginRight: theme.spacing(1),
	},
	cursor: 'pointer',
}));

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Box>
			<AppBar position='fixed'>
				<ToolbarFlex>
					<Typography
						variant='h6'
						sx={{ display: { xs: 'none', md: 'block' } }}
					>
						Chalvin Wiradhika
					</Typography>
					<LogoSm variant='h6'>Chalvin</LogoSm>
					<Box sx={{ display: 'flex', alignItems: 'center' }}>
						<StyledTextField
							InputProps={{
								endAdornment: (
									<InputAdornment position='end'>
										{isOpen ? (
											<Close
												onClick={() => setIsOpen(false)}
												sx={{ cursor: 'pointer' }}
											/>
										) : (
											<Search />
										)}
									</InputAdornment>
								),
							}}
							label='Search here'
							size='small'
							variant='standard'
							sx={{
								display: { xs: isOpen ? 'flex' : 'none', sm: 'flex' },
								mr: 1,
							}}
						/>
					</Box>
					<BoxIcons sx={{ display: isOpen ? 'none' : 'flex' }}>
						<StyledSearchIcon onClick={() => setIsOpen(true)} />
						<StyledBadge badgeContent={4} color='secondary'>
							<Mail />
						</StyledBadge>
						<StyledBadge badgeContent={2} color='secondary'>
							<Notifications />
						</StyledBadge>
						<Avatar
							alt='Amy'
							src='https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80'
							sx={{ cursor: 'pointer' }}
						/>
					</BoxIcons>
				</ToolbarFlex>
			</AppBar>
		</Box>
	);
};

export default Navbar;
