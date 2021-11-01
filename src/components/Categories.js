import { Box, Link, Divider, Typography } from '@mui/material';

import { styled } from '@mui/material/styles';

const StyledLink = styled(Link)(({ theme }) => ({
	marginRight: theme.spacing(1),
}));

const Categories = () => {
	return (
		<Box>
			<Typography variant='h6' components='h2'>
				Categories
			</Typography>
			<StyledLink href='#' color='inherit' underline='hover'>
				Sports
			</StyledLink>
			<StyledLink href='#' color='inherit' underline='hover'>
				Food
			</StyledLink>
			<StyledLink href='#' color='inherit' underline='hover'>
				Music
			</StyledLink>
			<StyledLink href='#' color='inherit' underline='hover'>
				Movies
			</StyledLink>
			<Divider flexItem sx={{ my: 1 }} />
			<StyledLink href='#' color='inherit' underline='hover'>
				Science
			</StyledLink>
			<StyledLink href='#' color='inherit' underline='hover'>
				Technology
			</StyledLink>
		</Box>
	);
};

export default Categories;
