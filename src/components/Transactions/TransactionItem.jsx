import PropTypes from 'prop-types';
import { TransactionData, TransactionRow } from './Transactions.styled';

const TransactionItem = ({ type, amount, currency }) => {
    return <TransactionRow>
                <TransactionData>{type}</TransactionData>
                <TransactionData>{amount}</TransactionData>
                <TransactionData>{currency}</TransactionData>
            </TransactionRow>
}

TransactionItem.propTypes = {
    type: PropTypes.string,
    amount: PropTypes.number,
    currency: PropTypes.string,
}

export default TransactionItem
