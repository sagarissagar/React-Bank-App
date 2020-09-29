import React, { useState } from 'react';

const RemoveDeposit = ({ allActions }) => {
  
  const [checktext, setCheckText] = useState('');
  const [amouttext, setAmtText] = useState('');

  const handlesetCheckText = (event) => {
    setCheckText(event.target.value);
  }

  const handlesetAmtText = (event) => {
    setAmtText(event.target.value);
  }

  const removeAmount = (checktext, amouttext) => {
    allActions.withdrawAmount(checktext, amouttext);
    setAmtText(''); 
    setCheckText('');
    document.getElementById("myForm-rm").reset();
  }

    return(
        <form id="myForm-rm">
            <div className="remove-deposit-tbl">
              <h4 className="text-center">Remove Deposit</h4>
              <div className="row">
                <div className="col-md-6">
                  <label>Check Number</label>
                </div>
                <div className="col-md-6">
                  <input type="number" placeholder="Remove Deposit here.." onChange={handlesetCheckText}></input>
                </div>
                <div className="col-md-6">
                  <label>Amount</label>
                </div>
                <div className="col-md-6">
                  <input type="number" onChange={handlesetAmtText}></input>
                </div>
                <div className="btn-wrap">
                  <button type="button" onClick={() => removeAmount(checktext, amouttext)} disabled={!checktext || !amouttext}>Submit</button>
                </div>
              </div>
            </div>
          </form>
    )
}

export default RemoveDeposit;