import moment from 'moment';
import totalExpenses from '../../selectors/expenses-total';

import expenses from '../fixtures/expenses';

test('should sum all', () =>{
    const filters = {
        text:'',
        startDate: undefined,
        endDate: undefined
    }
    const result = totalExpenses(expenses);
    expect(result).toEqual(114195);
});

test('should sum empty', () =>{
    const filters = {
        text:'',
        startDate: undefined,
        endDate: undefined
    }
    const result = totalExpenses([]);
    expect(result).toEqual(0);
});
