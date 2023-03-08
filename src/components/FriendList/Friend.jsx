import PropTypes from 'prop-types';
import { FriendElement, Span } from './Friends.styled';

const Friend = ({ friends }) => {
    return (
        friends.map(friend => {
            return <FriendElement key={friend.id}>
                    <Span isOnline={friend.isOnline}></Span>
                    <img src={friend.avatar} alt={friend.name} width="48" />
                    <p >{friend.name}</p>
                    </FriendElement>
        })
    )
}  
    
Friend.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool,
        PropTypes.number,
    ])))
}

export default Friend