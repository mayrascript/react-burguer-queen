import React, {useState} from "react";
import Modal from "../../../../shared/modal/Modal";
import NewOrderOptions from "../new-order-options/NewOrderOptions";

function SelectItem() {
    const [state, setState] = useState({});

    const handleOpen = () => {
       setState({showModal: true});
    };

    const handleClose = () => {
        setState({showModal: false});
    };

    const modal = state.showModal ? (
        <Modal handleClose={handleClose}>
            <NewOrderOptions />
        </Modal>
    ) : null;

    return (
        <div className="new-order-select-item">
            <h1>Lunch/Dinner</h1>
            <input type="text" placeholder="Search"/>

            <div>
                <button type="button" onClick={handleOpen}>Burguers</button>
                <button type="button" onClick={handleOpen}>French Fries</button>
                <button type="button" onClick={handleOpen}>Onion Rings</button>
                <button type="button" onClick={handleOpen}>Drinks</button>
            </div>

            {modal}
        </div>
    )
}

export default SelectItem;
