import { Typography, AvatarGroup, Avatar } from '@mui/material';

const OnlineFriends = () => {
	return (
		<>
			<Typography variant='h6' components='h1' gutterBottom>
				Online Friends
			</Typography>
			<AvatarGroup
				max={9}
				sx={{ display: 'flex', flexDirection: 'row', mb: 2 }}
			>
				<Avatar
					alt='Remy Sharp'
					src='https://mui.com/static/images/avatar/1.jpg'
				/>
				<Avatar
					alt='Travis Howard'
					src='https://mui.com/static/images/avatar/2.jpg'
				/>
				<Avatar
					alt='Cindy Baker'
					src='https://mui.com/static/images/avatar/3.jpg'
				/>
				<Avatar
					alt='Agnes Walker'
					src='https://mui.com/static/images/avatar/4.jpg'
				/>
			</AvatarGroup>
		</>
	);
};

export default OnlineFriends;
