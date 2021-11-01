import { useState } from 'react';

import AddButton from './AddButton';
import ModalInput from './ModalInput';
import SuccessInput from './SuccessInput';

const Add = () => {
	const [open, setOpen] = useState(false);
	const [openSnackbar, setOpenSnackbar] = useState(false);

	const handleOpenModal = () => setOpen(true);
	const handleCloseModal = () => setOpen(false);

	const handleOpenSnackbar = () => {
		setOpenSnackbar(true);
		setOpen(false);
	};
	const handleCloseSnackbar = (e, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpenSnackbar(false);
	};

	return (
		<>
			<AddButton handleOpenModal={handleOpenModal} />
			<ModalInput
				open={open}
				handleCloseModal={handleCloseModal}
				handleOpenSnackbar={handleOpenSnackbar}
			/>
			<SuccessInput
				openSnackbar={openSnackbar}
				handleCloseSnackbar={handleCloseSnackbar}
			/>
		</>
	);
};

export default Add;
