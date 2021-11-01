import { Snackbar, Alert } from '@mui/material';

const SuccessInput = ({ openSnackbar, handleCloseSnackbar }) => {
	return (
		<Snackbar
			open={openSnackbar}
			autoHideDuration={3000}
			onClose={handleCloseSnackbar}
		>
			<Alert
				onClose={handleCloseSnackbar}
				severity='success'
				sx={{ width: '100%' }}
			>
				This is a success message!
			</Alert>
		</Snackbar>
	);
};

export default SuccessInput;
