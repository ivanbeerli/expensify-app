import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test('should setup remove expense action object', () => {
    const action = removeExpense('123abc');
    expect(action).toEqual({
        type:  'REMOVE_EXPENSE',
        id: '123abc'
    });
});


test('should setup edit expense action object', () => {
    const action = editExpense('123abc', {note: 'note'});
    expect(action).toEqual({
        id: '123abc',
        type:  'EDIT_EXPENSE',
        updates: {note:'note'}
    });
});

test('should setup add expense action object with provided values', () => {
    const expenseData = { 
        description:'Rent', 
        amount: 109500,
        createdAt: 1000,
        note: 'This was last month rent'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type:  'ADD_EXPENSE',
        expense:{
            ...expenseData,
            id: expect.any(String)
        }
    }

    );

});

test('should setup add expense action object with dafult values', () => {
    const defaultExpenseData = {
        description: '', 
        note: '', 
        amount: 0, 
        createdAt: 0
    };
    
    const action = addExpense();
    expect(action).toEqual({
        type:  'ADD_EXPENSE',
        expense:{
            ...defaultExpenseData,
            id: expect.any(String)
        }
    })
    
});