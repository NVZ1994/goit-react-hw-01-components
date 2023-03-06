import Friend from './Friend';

const FriendList = ({ friends }) => {
    return (
    <ul class="friend-list">
    <Friend friends={friends}/>
    </ul>)
}

export default FriendList