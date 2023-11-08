// Modules
import { useState } from 'react';
// Styling
import './App.css';
// Components
import Header from './components/Header';
import AddMoney from './components/AddMoney';
import ListOfMoney from './components/ListOfMoney.js';

function App() {

  const [expenseList] = useState([]);


  const addExpense = (e, expense) => {
    e.preventDefault();
    console.log(expense);
    expenseList.push(expense);
    console.log(expenseList);
  }


  return (
    <div className="App">
      <Header />
      <AddMoney addExpense={addExpense} />
      <form action="" ><button type='submit'>Log app.js</button></form>
      <ListOfMoney expenseList={expenseList}/> 
    </div>
  );
}

export default App;
