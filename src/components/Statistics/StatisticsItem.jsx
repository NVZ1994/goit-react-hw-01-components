import PropTypes from "prop-types";
import {StatisticItem} from './Statistics.styled'

const StatisticsItem = ({ data }) => {
    return data.map(element => {
        return (
        <StatisticItem key={element.id}>
            <span >{element.label}</span>
            <span >{element.percentage}</span>
        </StatisticItem>
        )
    })
}

StatisticsItem.propTypes = {
    data: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ])))

}

export default StatisticsItem