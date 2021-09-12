import moment from "moment";

// export default (expenses, {text, startDate, endDate}) => {
//     return expenses.filter((expense)=>{
//         const createdAtMoment = moment(expense.createdAt);
//         const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day'): true;
//         const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') :true;
//         const textMatch = expense.description.toLowerCase().includes( text.toLowerCase());

//         return textMatch && startDateMatch && endDateMatch;
//     }).map((expense) => {expense.amount}).reduce((a,b) => { a + b}, 0);
// };


export default (expenses) => {
    return expenses.map((expense) => (expense.amount)).reduce((a,b) => ( a + b), 0);
};

// export default (expenses) => {
//     return 114195;
// };