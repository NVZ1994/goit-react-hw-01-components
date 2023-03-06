import PropTypes from 'prop-types';

const Friend = ({ friends }) => {
    return (
        friends.map(friend => {
            return <li class="item" key={friend.id}>
                    <span class="status">{friend.isOnline}</span>
                    <img class="avatar" src={friend.avatar} alt={friend.name} width="48" />
                    <p class="name">{friend.name}</p>
                    </li>
        })
    )
}

Friend.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
        PropTypes.number,
    ])))
}

export default Friend