import { Profile } from './Profile/Profile'
import Statistics from './Statistics/StatisticsList';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './Transactions/TransactionList';
import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';

import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        avatar={user.avatar}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics title="Upload stats" data={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </Container>
  );
};


