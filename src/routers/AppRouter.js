import React from "react";

import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import ExpenseDahsboardPage from "../components/ExpenseDahsboardPage";
import Header from "../components/Header";
import HelpPage from "../components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";

import {BrowserRouter , Route , Switch} from "react-router-dom";

const AppRouter = () =>(
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={ExpenseDahsboardPage} exact={true}/>
                <Route path="/create" component={AddExpensePage}/>
                <Route path="/edit/:id" component={EditExpensePage}/>
                <Route path="/help" component={HelpPage}/>
                <Route  component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;