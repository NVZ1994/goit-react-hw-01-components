import TransactionItem from "./TransactionItem";
import { TransactionTable } from "./Transactions.styled";

const TransactionHistory = ({ transactions }) => {
    return (
        <TransactionTable>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                <TransactionItem transactions={transactions}/>
            </tbody>
        </TransactionTable>
    )
}

export default TransactionHistory