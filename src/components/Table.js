import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Table = function ({items}) {    

  const dispBal = Object.assign({}, items[items.length - 1]);
  
  return (
      <div className="col-md-12 table-section">
        <h2 className="text-center">Ledger</h2>

        <div className="balance">
          Balance: <span className="balance-section">{dispBal.balance}</span>
        </div>

        <table className="table table-striped">
        <tbody>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Check</th>
            <th>Amount</th>
          </tr>
          {items.map((item) => (
            <tr key={item.type}>
              <th>{item.date}</th>
              <th>{item.type}</th>
              <th>{item.check}</th>
              <th>${item.amount}</th>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    )
}

export default Table;