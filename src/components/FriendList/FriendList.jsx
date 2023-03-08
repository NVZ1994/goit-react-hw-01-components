import Friend from './Friend';
import { ListOfFriends } from './Friends.styled';

const FriendList = ({ friends }) => {
    return (
    <ListOfFriends >
            {friends.map(friend =>
                <Friend
                    key={friend.id}
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}
                />)}
    </ListOfFriends>)
}

export default FriendList

