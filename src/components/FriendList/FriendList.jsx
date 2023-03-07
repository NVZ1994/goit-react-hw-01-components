import Friend from './Friend';
import { ListOfFriends } from './Friends.styled';

const FriendList = ({ friends }) => {
    return (
    <ListOfFriends >
    <Friend friends={friends}/>
    </ListOfFriends>)
}

export default FriendList