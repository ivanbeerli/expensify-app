import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from "../fixtures/expenses";

let wrapper, history, editExpense, removeExpense;

beforeEach(() => {
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = {push: jest.fn()};
    wrapper = shallow(<EditExpensePage editExpense={editExpense} expense={expenses[1]} removeExpense={removeExpense} history={history} />);
});

test('should render EditExpensePage', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () =>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1]);
});

test('should handle onRemove', () =>{
    wrapper.find('button').prop('onClick')(expenses[1].id);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith(expenses[1].id);
});