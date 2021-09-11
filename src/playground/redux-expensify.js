import { createStore, combineReducers } from "redux";
import  uuid  from "uuid";

//ADD_EXPENSE

const addExpense = (
    {
        description = '', 
        note = '', 
        amount = 0, 
        createdAt = 0
    } = {}
) => ({
    type:  'ADD_EXPENSE',
    expense: {
        id:uuid(),
        description,
        note,
        amount,
        createdAt
    }

});

//REMOVE_EXPENSE

const removeExpense = ({id } = {} ) => ({
    type:  'REMOVE_EXPENSE',
    id
});

const editExpense = (id, updates) => ({
    type:  'EDIT_EXPENSE',
    id ,
    updates
});

const setTextFilter = ( text = '') => ({
    type:  'SET_TEXT_FILTER',
    text
});

const sortByDate = ( ) => ({
    type:  'SET_SORT_BY_FILTER',
    sortBy: 'date'
});

const sortByAmount = ( ) => ({
    type:  'SET_SORT_BY_FILTER',
    sortBy: 'amount'
});

const setStartDate = (startDate ) => ({
    type:  'SET_START_DATE_FILTER',
    startDate
});

const setEndDate = (endDate ) => ({
    type:  'SET_END_DATE_FILTER',
    endDate
});

const expenseReducerDefaultState = [];

const expensesReducer = (state = expenseReducerDefaultState, action) => {

    switch(action.type){
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter( ({id}) => id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) =>{
                if(expense.id === action.id){
                    return {
                        ...expense,
                        ...action.updates    };
                }else{
                    return expense;
                }
            });
        default:
            return state;
    }
};


const filterReducerDefaultState ={
    text: '',
    sortBy: 'date', 
    startDate: undefined,
    endDate: undefined
};


const filterReducer = (state = filterReducerDefaultState, action) => {

    switch(action.type){
        case 'SET_TEXT_FILTER':
            return {...state,
                    text: action.text};
        case 'SET_SORT_BY_FILTER':
            return {...state,
                sortBy: action.sortBy};
        case 'SET_START_DATE_FILTER':
            return {...state,
                startDate: action.startDate};
        case 'SET_END_DATE_FILTER':
            return {...state,
                endDate: action.endDate};
                            
        default:
            return state;
        }
    };
    
const store = createStore(
    combineReducers({
            expenses: expensesReducer,
            filters: filterReducer
        }
        )
    );

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense)=>{
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes( text.toLowerCase());

        return textMatch && startDateMatch && endDateMatch;
    }).sort((a ,b)=>{
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        if(sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1;
        }

    });
};

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 100, createdAt:150}));
const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 200, createdAt: 80}));

// store.dispatch(removeExpense({id: expenseOne.expense.id}));

// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500}));

// store.dispatch(setTextFilter('e'));
// store.dispatch(setTextFilter());
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));

const demoState = {
    expenses: [
        {
            id:'owierq',
            description: 'January rent',
            note: 'This is the final payment for the address',
            amount: 54500,
            createdAt:0
        }
    ],
    filter: {
        text: 'rent',
        sortBy: 'date', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};


// const user = {
//     name: 'Lucas',
//     age: 23
// };

// console.log({
//     ...user,
//     location: 'Philadelphia',
//     age:29
// });