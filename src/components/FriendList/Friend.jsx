import PropTypes from 'prop-types';
import { FriendElement, SpanGreen ,SpanRed } from './Friends.styled';

const Friend = ({ friends }) => {
    return (
        friends.map(friend => {
            return <FriendElement class="item" key={friend.id}>
                    {friend.isOnline? <SpanGreen></SpanGreen> : <SpanRed></SpanRed>}
                    <img class="avatar" src={friend.avatar} alt={friend.name} width="48" />
                    <p class="name">{friend.name}</p>
                    </FriendElement>
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