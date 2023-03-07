import Friend from './Friend';
import { ListOfFriends } from './Friends.styled';

const FriendList = ({ friends }) => {
    return (
    <ListOfFriends class="friend-list">
    <Friend friends={friends}/>
    </ListOfFriends>)
}

export default FriendList