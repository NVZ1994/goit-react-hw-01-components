import PropTypes from 'prop-types';
import { FriendElement, Span } from './Friends.styled';

const Friend = ({ avatar, name, isOnline}) => {
    return <FriendElement>
                <Span isOnline={isOnline}></Span>
                <img src={avatar} alt={name} width="48" />
                <p >{name}</p>
            </FriendElement>
}  
    
Friend.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool,
        PropTypes.number,
    ])))
}

export default Friend


