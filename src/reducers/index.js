import {ADD_AMT, RMV_AMT} from '../actiontype';

const initialState = [];
var initBal = 0;
var bankCheck;

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_AMT:
      initBal = initBal +  parseInt(action.amouttext); 
      bankCheck = {date: action.date, type: action.addtype, check: action.checktext, amount: action.amouttext, balance: initBal}
      return [...state, bankCheck]
      
    case RMV_AMT: 
      initBal = initBal -  parseInt(action.amouttext); 
      bankCheck = {date: action.date, type: action.addtype, check: action.checktext, amount: action.amouttext, balance: initBal}
      return [...state, bankCheck]

    default:
      return state;
  }
}

export default rootReducer;