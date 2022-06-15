import React from "react";
import eic_container_class from "./ExpenseItemStyles";

export default function ExpenseItem() {
    const expenseDate = new Date(2022, 6, 14)
    const expenseTitle = 'Car Insurance'
    const expenseAmount = 294

    return (
        <div className={eic_container_class}>
            <div>{expenseDate.toISOString()}</div>
            <div>
                <h2>{expenseTitle}</h2>
                <div>${expenseAmount}</div>
            </div>
        </div>
    );
}
