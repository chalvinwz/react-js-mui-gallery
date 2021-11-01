import {
	Modal,
	Box,
	TextField,
	MenuItem,
	FormControl,
	FormLabel,
	RadioGroup,
	FormControlLabel,
	Radio,
	Button,
} from '@mui/material';

const styleModal = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: { xs: 300, sm: 400, md: 450, lg: 500 },
	// height: 500,
	bgcolor: 'background.paper',
	boxShadow: 8,
	p: 4,
	borderRadius: 4,
};

const ModalInput = ({ open, handleCloseModal, handleOpenSnackbar }) => {
	return (
		<Modal open={open} onClose={handleCloseModal}>
			<Box sx={styleModal}>
				<TextField
					label='Title'
					variant='standard'
					size='small'
					fullWidth
					sx={{ mb: 3 }}
				/>
				<TextField
					label='Description'
					variant='outlined'
					size='small'
					fullWidth
					multiline
					rows={4}
					sx={{ mb: 3 }}
				/>
				<TextField
					select
					size='small'
					label='Visibility'
					value='Public'
					fullWidth
					sx={{ mb: 3 }}
				>
					<MenuItem value='Public'>Public</MenuItem>
					<MenuItem value='Private'>Private</MenuItem>
					<MenuItem value='Unlisted'>Unlisted</MenuItem>
				</TextField>
				<FormControl component='fieldset' sx={{ mb: 3 }}>
					<FormLabel component='legend'>Who can comment</FormLabel>
					<RadioGroup name='radio-buttons-group'>
						<FormControlLabel
							value='Everybody'
							control={<Radio size='small' />}
							label='Everybody'
						/>
						<FormControlLabel
							value='My Friends'
							control={<Radio size='small' />}
							label='My Friends'
						/>
						<FormControlLabel
							value='Nobody'
							control={<Radio size='small' />}
							label='Nobody'
						/>
					</RadioGroup>
				</FormControl>
				<Box>
					<Button
						variant='contained'
						sx={{ mr: 1 }}
						onClick={handleOpenSnackbar}
					>
						Create
					</Button>
					<Button variant='outlined' onClick={handleCloseModal}>
						Cancel
					</Button>
				</Box>
			</Box>
		</Modal>
	);
};

export default ModalInput;
