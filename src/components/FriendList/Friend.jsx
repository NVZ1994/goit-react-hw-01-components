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
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
}

export default Friend


