import React from "react";
import {shallow} from "enzyme";
import { ExpenseListFilters } from "../../components/ExpenseListFilters";
import { filters, altFilters } from "../fixtures/filters";
import moment from "moment";

let setTextFilter, setStartDate, setEndDate, sortByDate, sortByAmount, wrapper;

beforeEach(()=>{
    setTextFilter = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    wrapper = shallow(
    <ExpenseListFilters 
        filters={filters}
        setTextFilter={setTextFilter}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        sortByAmount={sortByAmount}
        sortByDate={sortByDate}
    />);
});


test('should render ExpenseListFilters correctly', () =>{
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with alt data correctly', () =>{
    wrapper.setProps({
        filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {

    const value = 'New Description';
   
    wrapper.find('input').at(0).simulate('change',{
        target: {value}
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
    // expect(wrapper.state('description')).toBe(value);
});

test('should set sort by amount on select change', () => {

    const value = 'amount';
   
    wrapper.find('select').simulate('change',{
        target: {value}
    });
    expect(sortByAmount).toHaveBeenCalled();
});

test('should set sort by date on select change', () => {

    wrapper.setProps({
        filters: altFilters
    });
    const value = 'date';
    wrapper.find('select').simulate('change',{
        target: {value}
    });
    expect(sortByDate).toHaveBeenCalled();
});

test('should set date changes', () => {

    const startDate = moment(0).add(23, 'days');
    const endDate = moment(0).add(99, 'days');
    wrapper.find('DateRangePicker').prop('onDatesChange')({startDate,endDate});
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);

});

test('should set on focus change', () => {
    const calendarFocused = 'endDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});
