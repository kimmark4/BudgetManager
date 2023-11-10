import { useState } from "react";


const ListOfMoney = ({expenseList}) => {

    const [list, setList] = useState(expenseList);
    
    return (
        <div>
            <ul className="expenseList">
                {list
                    ?
                    list.map((expense) => {
                        return (
                            <li>{expense}</li>
                        )
                    })
                    :
                    <h2>No Expenses</h2>
                }
            </ul>
            <ul className="incomeList"></ul>
        </div>
    )
}

export default ListOfMoney;