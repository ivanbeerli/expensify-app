import React from "react";
import {shallow} from "enzyme";
import { ExpenseSummary } from "../../components/ExpenseSummary";
import expenses from "../fixtures/expenses";

test('should render ExpenseSummary with expenses', () => {

    const wrapper = shallow(<ExpenseSummary expensesCount={3} expensesTotal={114195}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseSummary with empty message', () => {

    const wrapper = shallow(<ExpenseSummary expensesCount={0} expensesTotal={0}/>);
    expect(wrapper).toMatchSnapshot();
});