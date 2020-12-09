import './Modal.css';

export default function Modal (props) {
    const handleClose = () => {
       props.handleClose();
    };

    return (
        <div className="modal-container">
            <div className="modal">
                <div className="modal-header">
                    <button onClick={handleClose}>Close</button>
                </div>
                <div className="modal-content">
                    {props.children}
                </div>
            </div>
        </div>
    )
}
