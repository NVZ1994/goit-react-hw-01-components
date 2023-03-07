import TransactionItem from "./TransactionItem";
import { TransactionTable, TransactionHead } from "./Transactions.styled";

const TransactionHistory = ({ transactions }) => {
    return (
        <TransactionTable class="transaction-history">
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