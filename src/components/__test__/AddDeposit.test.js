import React from 'react';
import { ADD_AMT, RMV_AMT } from '../../actiontype';
import actions from '../../actions/action';
import rootReducer from '../../reducers';
import {render, fireEvent, screen, getByLabelText} from '@testing-library/react';
import AddDeposit from '../../components/AddDeposit';
import '@testing-library/jest-dom/extend-expect';

describe('actions', () => {

    const today = new Date();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const date = today.toISOString().slice(0, 10) + " " + time;

    // action testing
    it('add amount action', () => {
        const checktext = 100;
        const amouttext = 200;
        const expectedAction = {
            type: ADD_AMT,
            date: date,
            addtype: 'credit',
            checktext,
            amouttext
        }
        expect(actions.depositAmount(checktext, amouttext)).toEqual(expectedAction)
    })


    // reducers - for intitial test
    it('should return the initial state', () => {
        expect(rootReducer(undefined, {})).toEqual([])
    })

    // reducers - handle add amount
    it('add amountte', () => {
        const actionAdd = { 
            type: ADD_AMT,
            date: date,
            addtype: 'credit',
            checktext: 10,
            amouttext: 24,
            balance: 24
        };

        const expectedState = [{ 
            date: date, 
            type: 'credit',
            check: 10,
            amount: 24,
            balance: 24
        }];
        expect(rootReducer(undefined, actionAdd)).toEqual(expectedState);
    })

    // component testing
    test('component tsting', () => {
      const { getByLabelText } = render(<AddDeposit />);

      // By default button is disabled
      expect(screen.getByRole('button')).toBeDisabled();

      // Button enabled when both values are true
      const input = getByLabelText("Check Number");
      const input2 = getByLabelText("Amount");
      fireEvent.change(input, { target: { value: 5 } });
      fireEvent.change(input2, { target: { value: 8 } });
      expect(screen.getByRole('button')).toBeEnabled();

      // Validate label and its type
      expect(input).toHaveAttribute("type", "number");
      expect(input2).toHaveAttribute("type", "number");

    });

})


