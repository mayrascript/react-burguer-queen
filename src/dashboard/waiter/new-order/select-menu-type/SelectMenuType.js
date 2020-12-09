import NewOrder from "../NewOrder";

function SelectMenuType() {
    return (
        <div className="new-order">
            <h1>Burguer Queen</h1>
            <p>Order System Management</p>
            <h2>New Order</h2>

            <p>Choose an Option</p>

            <div>
                <button>Breakfast</button>
                <button>Lunch/Dinner</button>
            </div>

        </div>
    )
}

export default SelectMenuType;
