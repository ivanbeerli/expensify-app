import moment from "moment";
import { setStartDate, setEndDate, sortByDate, sortByAmount, setTextFilter } from "../../actions/filters";

test('should generate set start date action object', ()=>{
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type:  'SET_START_DATE_FILTER',
        startDate: moment(0)
    });

});

test('should generate set start date action object', ()=>{
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type:  'SET_END_DATE_FILTER',
        endDate: moment(0)
    });
});


test('should generate sort by amount action object',()=>{
    const action = sortByAmount();
    expect(action).toEqual({
        type:  'SET_SORT_BY_FILTER',
        sortBy: 'amount'
    })
});

test('should generate sort by date action object',()=>{
    const action = sortByDate();
    expect(action).toEqual({
        type:  'SET_SORT_BY_FILTER',
        sortBy: 'date'
    })
});

test('should generate set text action object with vaules', () =>{
    const action = setTextFilter('test');
    expect(action).toEqual({
        type:  'SET_TEXT_FILTER',
        text: 'test'
    })
});

test('should generate set text action object with default vaules', () =>{
    const action = setTextFilter();
    expect(action).toEqual({
        type:  'SET_TEXT_FILTER',
        text: ''
    })
});