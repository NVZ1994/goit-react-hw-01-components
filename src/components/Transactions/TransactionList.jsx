import TransactionItem from "./TransactionItem";

const TransactionHistory = ({ transactions }) => {
    return (
        <table class="transaction-history">
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
        </table>
    )
}

export default TransactionHistory