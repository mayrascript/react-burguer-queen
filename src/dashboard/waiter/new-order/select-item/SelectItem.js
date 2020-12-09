function SelectItem() {
    return (
        <div className="new-order-select-item">
            <h1>Lunch/Dinner</h1>
            <input type="text" placeholder="Search"/>

            <div>
                <button>Burguers</button>
                <button>French Fries</button>
                <button>Onion Rings</button>
                <button>Drinks</button>
            </div>

        </div>
    )
}

export default SelectItem;
