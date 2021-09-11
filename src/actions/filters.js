
export const setTextFilter = ( text = '') => ({
    type:  'SET_TEXT_FILTER',
    text
});

export const sortByDate = ( ) => ({
    type:  'SET_SORT_BY_FILTER',
    sortBy: 'date'
});

export const sortByAmount = ( ) => ({
    type:  'SET_SORT_BY_FILTER',
    sortBy: 'amount'
});

export const setStartDate = (startDate ) => ({
    type:  'SET_START_DATE_FILTER',
    startDate
});

export const setEndDate = (endDate ) => ({
    type:  'SET_END_DATE_FILTER',
    endDate
});
