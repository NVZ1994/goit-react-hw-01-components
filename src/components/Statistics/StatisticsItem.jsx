import PropTypes from "prop-types";
import {StatisticItem} from './Statistics.styled'

const StatisticsItem = ({ data }) => {
    return data.map(element => {
        return (
        <StatisticItem class="item" key={element.id}>
            <span class="label">{element.label}</span>
            <span class="percentage">{element.percentage}</span>
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