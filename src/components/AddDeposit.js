import React, { useState } from 'react';

const AddDeposit = function ({  allActions }) {

  const [checktext, setCheckText] = useState('');
  const [amouttext, setAmtText] = useState('');

  const handlesetCheckText = (event) => {
    setCheckText(event.target.value);
  }

  const handlesetAmtText = (event) => {
    setAmtText(event.target.value);
  }

  const addAmount = (checktext, amouttext) => {
    allActions.depositAmount(checktext, amouttext);
    setAmtText(''); 
    setCheckText('');
    document.getElementById("myForm").reset();
  }

  return (
    <form id="myForm">
      <div className="add-deposit-tbl">
        <h4 className="text-center">Add Deposit</h4>
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="add-cheque">Check Number</label>
          </div>
          <div className="col-md-6">
            <input type="number" id="add-cheque" placeholder="Add Deposit here.." onChange={handlesetCheckText}></input>
          </div>
          <div className="col-md-6">
            <label htmlFor="add-deposit">Amount</label>
          </div>
          <div className="col-md-6">
            <input type="number" id="add-deposit" onChange={handlesetAmtText} ></input>
          </div>
          <div className="btn-wrap">
            <button type="button" onClick={() => addAmount(checktext, amouttext)} disabled={!checktext || !amouttext}>Submit</button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default AddDeposit;