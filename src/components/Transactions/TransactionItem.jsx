import PropTypes from 'prop-types';
import { TransactionData, TransactionRow } from './Transactions.styled';

const TransactionItem = ({ transactions }) => {
    return (
        transactions.map(transaction => {
            return <TransactionRow key={transaction.id}>
                        <TransactionData>{transaction.type}</TransactionData>
                        <TransactionData>{transaction.amount}</TransactionData>
                        <TransactionData>{transaction.currency}</TransactionData>
                    </TransactionRow>
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
