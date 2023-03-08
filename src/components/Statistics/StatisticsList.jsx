import PropTypes from 'prop-types';
import StatisticsItem from "./StatisticsItem";
import {Title, StatisticList} from './Statistics.styled'

const Statistics = ({ title = '', data }) => {
    return (
        <section>
            {title && <Title>{title}</Title> }
            <StatisticList>
                {data.map(item =>
                    <StatisticsItem
                        key={item.id}
                        label={item.label}
                        percentage={item.percentage}    
                    />)}
            </StatisticList>
        </section>
    )
}

Statistics.propTpes = {
    title: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.oneOfType(PropTypes.string,PropTypes.number,))
}

export default Statistics;