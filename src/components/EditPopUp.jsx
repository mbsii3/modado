import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@mui/material';

export default function EditPopUp(props) {
    return (props.trigger) ? (
        
        <Box className="popup">
            <Box className="popup-inner">
                <CloseIcon className="close-btn" sx={{cursor: "pointer", color: "primary.main"}} onClick={() => props.setTrigger(false)} />
                { props.children }
            </Box>
        </Box>
    
    ) : '';
}