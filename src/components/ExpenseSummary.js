import React from "react";
import { connect } from "react-redux";
import selectedExpenses from "../selectors/expenses";
import getTotalAmount from "../selectors/expenses-total";
import numeral from 'numeral'
export const ExpenseSummary = ({expensesCount, expensesTotal}) =>{
        const wordExpenses = expensesCount === 1 ? 'expense':'expenses' ;
    return (    
    <div>
        {
            <p>Viewing {expensesCount} {wordExpenses} totalling {numeral(expensesTotal / 100).format('$0,0.00')} </p>

        }
    </div>
    )
};

const mapStateToProps = (state)=>{
    const visibleExpenses =selectedExpenses(state.expenses, state.filters);
    return {
        expensesCount:visibleExpenses.length,
        expensesTotal: getTotalAmount(visibleExpenses)
    };
};
export default connect(mapStateToProps)(ExpenseSummary);
