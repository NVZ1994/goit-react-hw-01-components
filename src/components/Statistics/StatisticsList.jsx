import PropTypes from 'prop-types';
import StatisticsItem from "./StatisticsItem";

const Statistics = ({ title = '', data }) => {
    return (
        <section class="statistics">
            {title ? <h2 className="title">{title}</h2> : null}
            <ul class="stat-list">
                <StatisticsItem data={data} />
            </ul>
        </section>
    )
}

Statistics.propTpes = {
    title: PropTypes.string,
}

export default Statistics;