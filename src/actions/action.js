import { ADD_AMT, RMV_AMT } from '../actiontype';

function depositAmount(checktext, amouttext) {

  const today = new Date();
  const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  const date = today.toISOString().slice(0,10) + " " + time;

  return {
    type: ADD_AMT,
    date: date,
    addtype: 'credit',
    checktext,
    amouttext
  }
}

function withdrawAmount(checktext, amouttext) {

  const today = new Date();
  const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  const date = today.toISOString().slice(0,10) + " " + time;

  return {
    type: RMV_AMT,
    date: date,
    addtype: 'debit',
    checktext,
    amouttext
  }
}

export default { depositAmount, withdrawAmount }

