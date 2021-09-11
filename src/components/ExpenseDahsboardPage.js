import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";

const ExpenseDahsboardPage = () => (
    <div>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default ExpenseDahsboardPage;