import React from "react";
import "./App.css";
import {useState} from 'react';
import ReceiptArr from "./components/receiptData";
import Receipts from "./components/receipts"

export default function App() {
  const [receipt, setReceipt] = useState(ReceiptArr);
  return (
    <div className="App">
      <h1>Korilla Receipts</h1>
      
      <Receipts/>
      {/* <ReceiptData/> */}
    </div>
  );
}