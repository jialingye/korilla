function Receipt({receipt}){
    return(
        <>
            <h1>{receipt.person}</h1>
            <h3>{receipt.order.main}</h3>
            <hr />
            <h3>Protein: {receipt.order.protein}</h3>
            <h3>Rice: {receipt.order.rice}</h3>
            <h3>Sauce: {receipt.order.sauce}</h3>
            <h3>Drink: {receipt.order.drink}</h3>
            <h3>Cost: {receipt.order.cost}</h3>
            <h3>Paid: {receipt.paid?"True":"False"}</h3>
            
        </>
    )
}

export default Receipt;