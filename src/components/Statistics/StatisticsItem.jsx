import PropTypes from "prop-types";

const StatisticsItem = ({ data }) => {
    return data.map(element => {
        return (
        <li class="item" key={element.id}>
            <span class="label">{element.label}</span>
            <span class="percentage">{element.percentage}</span>
        </li>
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