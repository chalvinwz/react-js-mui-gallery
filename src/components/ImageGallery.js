import { Typography, ImageList, ImageListItem } from '@mui/material';

const ImageGallery = () => {
	return (
		<>
			<Typography variant='h6' components='h2'>
				Gallery
			</Typography>
			<ImageList variant='masonry' cols={2} gap={8} sx={{ mb: 2 }}>
				<ImageListItem>
					<img
						src='https://mui.com/static/images/image-list/breakfast.jpg'
						srcSet='https://mui.com/static/images/image-list/breakfast.jpg'
						alt='images-list'
						loading='lazy'
					/>
				</ImageListItem>
				<ImageListItem>
					<img
						src='https://mui.com/static/images/image-list/burgers.jpg'
						srcSet='https://mui.com/static/images/image-list/burgers.jpg'
						alt='images-list'
						loading='lazy'
					/>
				</ImageListItem>
				<ImageListItem>
					<img
						src='https://mui.com/static/images/image-list/camera.jpg'
						srcSet='https://mui.com/static/images/image-list/camera.jpg'
						alt='images-list'
						loading='lazy'
					/>
				</ImageListItem>
				<ImageListItem>
					<img
						src='https://mui.com/static/images/image-list/morning.jpg'
						srcSet='https://mui.com/static/images/image-list/morning.jpg'
						alt='images-list'
						loading='lazy'
					/>
				</ImageListItem>
				<ImageListItem>
					<img
						src='https://mui.com/static/images/image-list/vegetables.jpg'
						srcSet='https://mui.com/static/images/image-list/vegetables.jpg'
						alt='images-list'
						loading='lazy'
					/>
				</ImageListItem>
				<ImageListItem>
					<img
						src='https://mui.com/static/images/image-list/breakfast.jpg'
						srcSet='https://mui.com/static/images/image-list/breakfast.jpg'
						alt='images-list'
						loading='lazy'
					/>
				</ImageListItem>
			</ImageList>
		</>
	);
};

export default ImageGallery;
