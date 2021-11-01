import { Tooltip, IconButton } from '@mui/material';

import { Add as AddIcon } from '@mui/icons-material';

const AddButton = ({ handleOpenModal }) => {
	return (
		<Tooltip title='Add' variant='contained' onClick={handleOpenModal}>
			<IconButton
				sx={{
					position: 'fixed',
					bottom: 10,
					right: 10,
					color: 'primary.main',
				}}
			>
				<AddIcon color='white' sx={{ fontSize: 40 }} />
			</IconButton>
		</Tooltip>
	);
};

export default AddButton;
