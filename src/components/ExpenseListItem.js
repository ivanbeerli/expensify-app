import React from "react";
import {NavLink} from "react-router-dom";

const ExpenseListItemPage = ({id, description, createdAt, amount = 0}) => (
    <div>
        <NavLink to={`/edit/${id}`} ><h3>{description}</h3></NavLink>
        <p>{amount} - {createdAt}</p>
    </div>);

export default ExpenseListItemPage;