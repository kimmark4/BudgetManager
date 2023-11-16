// Modules
import { useState, useEffect } from 'react';
import { getDatabase, ref, onValue, push } from 'firebase/database';
import firebase from './firebase';
// Styling
import './App.css';

// Components


function App() {

  const [expenseList, setExpenseList] = useState([]);
  const [expense, setExpense] = useState();

  useEffect(() => {
    // create a variable that holds our database details
    const database = getDatabase(firebase);
    
    // we then create a variable that makes reference to our database
    const dbRef = ref(database);
    
    // add an event listener to that variable that will fire from the database, and call that data 'response'.
    onValue(dbRef, (response) => {
      // here we're creating a variable to store the new state we want to introduce to our app
      const newState = [];
    
      // here we store the response from our query to Firebase inside of a variable called data.val() is a Firebase method that gets us the information we want
      const data = response.val();
      // data is an object, so we iterate through it using a for in loop to access each book name 
    
      for (let key in data) {
        // inside the loop, we push each book name to an array we already created inside the onValue() function called newState
        newState.push(data[key]);
      }
    
      // then, we call setBooks in order to update our component's state using the local array newState
      setExpenseList(newState);
    });
  }, [])

  const handleUserChoice = (e) => {
    // console.log(e.target.value);
    setExpense(e.target.value)
  }

  const handleSubmit = (e) =>{
    e.preventDefault();

    // create referece to database
    const database = getDatabase(firebase);
    const dbRef = ref(database);

    push(dbRef, expense)
    // expenseList.push(parseInt(expense))
    console.log(expenseList);

    // reset the input value
    setExpense('');
  }



  return (
    <div className="App">
      <header>Budget Tracker</header>
      <form action="" className="addExpenseForm" onSubmit={handleSubmit}>
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
