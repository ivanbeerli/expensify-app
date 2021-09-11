import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should test default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);

});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const expenseToAdd = {
        id: '4',
        description: 'Added',
        note: '',
        amount: 1950,
        createdAt: 10000
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense: expenseToAdd
    }

    const state = expensesReducer(expenses, action);

    expect(state).toEqual([...expenses, expenseToAdd]);
});

test('should edit an expense', () => {
    const expenseToEdit = {
        description: 'Edited'
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: '1',
        updates: expenseToEdit
    }

    const state = expensesReducer(expenses, action);

    expect(state[0].description).toEqual(expenseToEdit.description);
});

test('should not edit an expense not found', () => {
    const expenseToEdit = {
        description: 'Edited'
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: expenseToEdit
    }

    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses);
});
