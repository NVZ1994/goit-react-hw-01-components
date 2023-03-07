import PropTypes from 'prop-types';
import StatisticsItem from "./StatisticsItem";
import {Title, StatisticList} from './Statistics.styled'

const Statistics = ({ title = '', data }) => {
    return (
        <section>
            {title ? <Title>{title}</Title> : null}
            <StatisticList>
                <StatisticsItem data={data} />
            </StatisticList>
        </section>
    )
}

Statistics.propTpes = {
    title: PropTypes.string,
}

export default Statistics;