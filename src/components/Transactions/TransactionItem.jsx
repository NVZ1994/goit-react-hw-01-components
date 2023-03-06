import PropTypes from 'prop-types'; 

const TransactionItem = ({ transactions }) => {
    return (
        transactions.map(transaction => {
            return <tr key={transaction.id}>
                        <td>{transaction.type}</td>
                        <td>{transaction.amount}</td>
                        <td>{transaction.currency}</td>
                    </tr>
        })
    )
}

TransactionItem.propTypes = {
    items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ])))

}

export default TransactionItem
