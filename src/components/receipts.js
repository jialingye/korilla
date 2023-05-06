import {useState} from "react";
import ReceiptData from "./receiptData";
import Receipt from "./receipt";

function Receipts(){
    const [receipts, setReceipts] = useState(ReceiptData)
    const [searchTerm, setSearch] = useState("");
    const [isPaid, setPaid] = useState(false);

    const filteredReceipts = receipts.filter((receipts)=>
    receipts.person.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }

    const [receiptForm, setReceiptForm] = useState(
        {
           id: 1,
           person: "",
           order:{
                main:"",
                protein:"",
                rice:"",
                sauce:"",
                drink:"",
                cost:30
                },
           paid: false
        } 
    )
    //handleChange
    function handleChange(e){
        setReceiptForm ((previousFormState) =>({...previousFormState, [e.target.name] : e.target.value}))
    }

    function handlePaidChange(e){
        setReceiptForm ((previousFormState) =>({...previousFormState, paid : e.target.value? true : false}))
    }

    function handleOrderChange(e){
        setReceiptForm ((previousFormState) => ({...previousFormState, order:{...previousFormState.order, [e.target.name]: e.target.value}}))
    }
    function handleSubmit(e){
        e.preventDefault();
        setReceipts((form)=>([...form,{id: receipts.length+1,...receiptForm}]))
        console.log(receipts)
        e.target.reset();
    }
    return (
        <>
        <div className="search">
            <input type="text" value={searchTerm} onChange={handleSearch} />
        </div>
        <div className="container-fluid">
            <div className="row">
                    {filteredReceipts.map((receipt, idx) =>{
                        return(
                            <div key = {idx} className="card col-2">
                                <Receipt receipt={receipt}/>
                                </div>
                        )
                    })}
        
            </div>  
        </div>
        <form onSubmit={handleSubmit}>
                <label>
                    <span>Name: </span>
                    <input
                        type="text"
                        placeholder="Name"
                        name="person"
                        onChange={handleChange}
                    />
                </label>
                <label>
                    <span>Main: </span>
                    <input
                        type="text"
                        placeholder="Main Dish"
                        name="main"
                        onChange={handleOrderChange}
                    />
                </label>
                <label>
                    <span>Protein: </span>
                    <input
                        type="text"
                        placeholder="Beef"
                        name="protein"
                        onChange={handleOrderChange}
                    />
                </label>
                <label>
                    <span>Rice: </span>
                    <input
                        type="text"
                        placeholder="brown rice"
                        name="rice"
                        onChange={handleOrderChange}
                    />
                </label>
                <label>
                    <span>Sauce: </span>
                    <input
                        type="text"
                        placeholder="wasabi mayo"
                        name="sauce"
                        onChange={handleOrderChange}
                    />
                </label>
                <label>
                    <span>Drink: </span>
                    <input
                        type="text"
                        placeholder="Green Tea"
                        name="drink"
                        onChange={handleOrderChange}
                    />
                </label>
                <label>
                    <span>Cost: </span>
                    <input
                        type="number"
                        placeholder="10"
                        name="cost"
                        onChange={handleOrderChange}
                    />
                </label>
                <label>
                    <span>Paid:</span>
                        <select name="paid" onChange={handlePaidChange}>
                            <option value={true}>Paid</option>
                            <option value=""> Not Paid</option>
                        </select>
                </label>
                <button>Submit Form</button>
            </form>
        </>
    )
}

export default Receipts;