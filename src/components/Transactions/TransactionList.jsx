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
                {transactions.map(transaction =>
                    <TransactionItem
                        key={transaction.id}
                        type={transaction.type}
                        amount={transaction.amount}
                        currency={transaction.currency}
                />)}
            </tbody>
        </TransactionTable>
    )
}

export default TransactionHistory