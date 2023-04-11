import CloseIcon from '@mui/icons-material/Close';

export default function EditPopUp(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <CloseIcon className="close-btn" onClick={() => props.setTrigger(false)} />
                { props.children }
            </div>
        </div>
    
    ) : '';
}