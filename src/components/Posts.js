import {
	Card,
	CardMedia,
	CardContent,
	CardActions,
	Typography,
	Button,
} from '@mui/material';

const Posts = ({ images }) => {
	return (
		<>
			{images.hits?.map((image) => (
				<Card sx={{ mb: 4 }} key={image.id}>
					<CardMedia
						component='img'
						image={image.webformatURL}
						alt='random photo'
						sx={{ height: { xs: 300, md: 350, lg: 400 } }}
					/>
					<CardContent>
						<Typography gutterBottom variant='h4' component='h1'>
							Heading
						</Typography>
						<Typography variant='body3' component='p'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
							commodi iusto officia rem quas minima quod reiciendis fugiat
							asperiores veritatis!
						</Typography>
					</CardContent>
					<CardActions>
						<Button size='small'>Share</Button>
						<Button size='small'>Learn More</Button>
					</CardActions>
				</Card>
			))}
		</>
	);
};

export default Posts;
