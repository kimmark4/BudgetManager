import { useState } from "react";

const AddMoney = ({ addExpense }) => {
    // const [expenseList, setExpenseList] = useState();
    // const [incomeList, setIncomeList] = useState();
    const [expense, setExpense] = useState();

    const handleUserChoice = (e) => {
        setExpense(e.target.value)
    }

    return (
        <div className="addMoney">
            <form action="" className="addExpenseForm" onSubmit={(e) => { addExpense(e, expense) }}>
                <h2>Add Expense</h2>
                <input
                    type="text"
                    onChange={handleUserChoice}
                    value={expense} />
                <button type="submit" className="addButton">Add</button>
            </form>
            <form action="" className="addIncomeForm">
                <h2>Add Income</h2>
                <input type="text" name="" id="" />
                <button type="submit" className="addButton">Add</button>
            </form>
        </div>
    )
}

export default AddMoney;