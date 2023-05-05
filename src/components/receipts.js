import {useState} from "react";
import ReceiptData from "./receiptData";
import Receipt from "./receipt";

function Receipts(){
    const [receipts, setReceipts] = useState(ReceiptData)

    return (
        <>
        <div className="container">
            {receipts.map((receipt, idx) =>{
                return(
                    <div key = {idx} className="card">
                        <Receipt receipt={receipt}/>
                        </div>
                )
            })}
        </div>
        </>
    )
}

export default Receipts;