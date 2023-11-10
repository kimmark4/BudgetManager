// Modules
import { useState, useEffect } from 'react';
// Styling
import './App.css';
// Components
// import Header from './components/Header';
// import AddMoney from './components/AddMoney';
// import ListOfMoney from './components/ListOfMoney.js';

function App() {

  const [expenseList, setExpenseList] = useState([]);
  const [expense, setExpense] = useState();

  const handleUserChoice = (e) => {
    // console.log(e.target.value);
    setExpense(e.target.value)
  }

  const addToExpenseList = (e) =>{
    e.preventDefault();
    expenseList.push(parseInt(expense))
    console.log(expenseList);
  }



  return (
    <div className="App">
      <header>Budget Tracker</header>
      <form action="" className="addExpenseForm" onSubmit={addToExpenseList}>
        <h2>Add Expense</h2>
        <input
          type="text"
          onChange={handleUserChoice} />
        <button type="submit" className="addButton">Add</button>
      </form>
      <form action="" className="addIncomeForm">
        <h2>Add Income</h2>
        <input type="text" name="" id="" />
        <button type="submit" className="addButton">Add</button>
      </form>
      <ul>
        {
          expenseList.map((expense) => {
            return (
              <li key={expense}>{expense}</li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default App;
