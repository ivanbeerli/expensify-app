import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter values', ()=>{
    const state = filtersReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
});

test('should set sort by amount', ()=>{

    const state = filtersReducer(undefined, {type: 'SET_SORT_BY_FILTER', sortBy: 'amount' });
    expect(state.sortBy).toEqual('amount');

});

test('should set sort by date', () => {

    const currentState ={
        text: '',
        sortBy: 'amount', 
        startDate: undefined,
        endDate: undefined
    };
    const action = {type: 'SET_SORT_BY_FILTER', sortBy: 'date' };
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toEqual('date');
});


test('should set text', ()=>{

    const state = filtersReducer(undefined, {type: 'SET_TEXT_FILTER', text: 'the value' });
    expect(state.text).toEqual('the value');

});

test('should set startDate', ()=>{

    const state = filtersReducer(undefined, {type: 'SET_START_DATE_FILTER', startDate: moment(0) });
    expect(state.startDate).toEqual(moment(0));

});

test('should set endDate', ()=>{

    const state = filtersReducer(undefined, {type: 'SET_END_DATE_FILTER', endDate: moment(0) });
    expect(state.endDate).toEqual(moment(0));

});
