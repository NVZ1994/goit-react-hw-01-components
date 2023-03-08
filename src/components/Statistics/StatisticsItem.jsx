import PropTypes from "prop-types";
import {StatisticItem} from './Statistics.styled'

const StatisticsItem = ({ label, percentage }) => {
        return (
        <StatisticItem>
            <span >{label}</span>
            <span >{percentage}</span>
        </StatisticItem>
        )
    }


StatisticsItem.propTypes = {
    label: PropTypes.string,
    percentage: PropTypes.number,
}

export default StatisticsItem